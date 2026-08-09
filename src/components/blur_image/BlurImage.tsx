import { useEffect, useRef, useState } from "react";
import {
  registerImage,
  requestImageLoad,
  prioritizeImageLoad,
  subscribeImageStart,
  hasImageStarted,
  completeImage,
} from "../lazy_section/imageQueue";

interface BlurImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  /** Skip lazy-loading for above-the-fold images (e.g. the hero photo). */
  priority?: boolean;
}

// Tracks src URLs that have already finished loading once, so remounts /
// rerenders don't re-blur or re-fetch images we already have.
const loadedImages = new Set<string>();

function isOnline(): boolean {
  return typeof navigator === "undefined" || navigator.onLine;
}

function BlurImage({ src, alt, style, priority = false, ...props }: BlurImageProps) {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const alreadyLoaded = loadedImages.has(src);
  const [visible, setVisible] = useState(() => priority || alreadyLoaded);
  const pendingOfflineRef = useRef(false);
  const [loaded, setLoaded] = useState(() => alreadyLoaded);
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);

  // Called when it's this image's turn (background queue or prioritized) —
  // starts the real request unless offline, in which case it waits for the
  // "online" listener below to resume it.
  const startLoading = () => {
    if (isOnline()) {
      setVisible(true);
    } else {
      pendingOfflineRef.current = true;
    }
  };

  // Register with the global background image queue and join it. Already-
  // loaded/priority images have nothing left to queue. A shared src (same
  // logo used more than once) may already have had its turn fire before
  // this instance mounted — that signal won't repeat, so catch up directly.
  useEffect(() => {
    if (priority || alreadyLoaded) return;
    registerImage(src);
    const unsubscribe = subscribeImageStart(src, startLoading);
    if (hasImageStarted(src)) {
      // Catching up to a turn that already fired for this src — deferred a
      // tick so this effect doesn't set state synchronously within itself.
      queueMicrotask(startLoading);
    } else {
      requestImageLoad(src);
    }
    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src]);

  // The image scrolling into (or near) view means the user is about to see
  // it — jump the background queue instead of waiting a turn.
  useEffect(() => {
    if (priority || alreadyLoaded) return;
    const el = imgRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      prioritizeImageLoad(src);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) prioritizeImageLoad(src);
      },
      { rootMargin: "400px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src, attempt]);

  // Resume any load that was deferred/failed due to being offline, without
  // touching images that already loaded successfully.
  useEffect(() => {
    const handleOnline = () => {
      if (loadedImages.has(src)) return;
      if (pendingOfflineRef.current) {
        pendingOfflineRef.current = false;
        setVisible(true);
      } else if (failed) {
        setFailed(false);
        setAttempt((a) => a + 1);
      }
    };

    window.addEventListener("online", handleOnline);
    return () => window.removeEventListener("online", handleOnline);
  }, [failed, src]);

  return (
    <img
      key={attempt}
      ref={imgRef}
      src={visible ? src : undefined}
      alt={alt}
      style={{
        filter: loaded ? "blur(0px)" : "blur(12px)",
        transition: "filter 0.5s ease-out",
        ...style,
      }}
      onLoad={() => {
        loadedImages.add(src);
        setLoaded(true);
        setFailed(false);
        completeImage(src);
      }}
      onError={() => {
        setFailed(true);
        completeImage(src);
      }}
      {...props}
      // Forced last, after the prop spread: this component already fully
      // controls when src gets set (via the background queue / priority
      // observer above). The browser's own native lazy-loading would defer
      // fetching an off-screen image indefinitely on its own heuristic,
      // which never resolves onLoad — deadlocking the whole background
      // queue behind it. A caller passing loading="lazy" must not win.
      loading="eager"
    />
  );
}

export default BlurImage;
