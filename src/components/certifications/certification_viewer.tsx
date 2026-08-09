import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate, faXmark } from "@fortawesome/free-solid-svg-icons";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./certification-viewer.css";

type Props = {
  open: boolean;
  pdfUrl: string;
  onClose: () => void;
};

function CertificationViewer({ open, pdfUrl, onClose }: Props) {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [blobUrl, setBlobUrl] = useState<string | null>(null);
  const revealTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Some of these certificate PDFs are multi-megabyte scans, so the fetch
  // itself takes real time. Track actual bytes received via the response
  // stream instead of faking a time-based ramp — the percentage shown is
  // then genuinely concurrent with the real download, not decorative. The
  // embed only ever gets a blob of the fully-downloaded PDF, so its own
  // load is instant off local memory, leaving just the plugin's internal
  // render time (still not observable, but now the only unaccounted gap).
  useEffect(() => {
    if (!open || !pdfUrl) {
      setProgress(0);
      setLoaded(false);
      setBlobUrl(null);
      return;
    }

    setProgress(0);
    setLoaded(false);
    setBlobUrl(null);

    const controller = new AbortController();
    let cancelled = false;
    let objectUrl: string | null = null;

    (async () => {
      try {
        const response = await fetch(pdfUrl, { signal: controller.signal });
        if (!response.ok || !response.body) throw new Error(`Fetch failed: ${response.status}`);

        const totalBytes = Number(response.headers.get("Content-Length")) || 0;
        const reader = response.body.getReader();
        const chunks: BlobPart[] = [];
        let receivedBytes = 0;

        for (;;) {
          const { done, value } = await reader.read();
          if (done) break;
          chunks.push(value);
          receivedBytes += value.byteLength;
          if (totalBytes > 0) {
            setProgress(Math.min((receivedBytes / totalBytes) * 100, 99));
          }
        }
        if (cancelled) return;

        objectUrl = URL.createObjectURL(new Blob(chunks, { type: "application/pdf" }));
        setProgress(100);
        setBlobUrl(objectUrl);
      } catch (err) {
        if (cancelled || (err instanceof DOMException && err.name === "AbortError")) return;
        // Fall back to letting the embed fetch the URL directly.
        setProgress(100);
        setBlobUrl(pdfUrl);
      }
    })();

    return () => {
      cancelled = true;
      controller.abort();
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [open, pdfUrl]);

  // The embed's onLoad fires once the plugin has accepted the bytes, not
  // once it has actually finished rendering the page — that happens
  // asynchronously inside the plugin with no JS event to hook into. Hold
  // briefly before revealing so the plugin has almost always finished
  // painting by the time our overlay is gone.
  function handleIframeLoad() {
    if (revealTimerRef.current) clearTimeout(revealTimerRef.current);
    revealTimerRef.current = setTimeout(() => setLoaded(true), 400);
  }

  // onLoad isn't guaranteed to fire for every browser/PDF-plugin combination
  // (some don't support embedded PDF rendering at all). Without a fallback,
  // a missing onLoad would leave the overlay stuck at 100% forever, which is
  // worse than the original mismatch this was meant to fix.
  useEffect(() => {
    if (!blobUrl) return;
    const fallback = setTimeout(() => setLoaded(true), 3000);
    return () => clearTimeout(fallback);
  }, [blobUrl]);

  useEffect(
    () => () => {
      if (revealTimerRef.current) clearTimeout(revealTimerRef.current);
    },
    [],
  );

  if (!open) return null;

  return (
    <div className="certification-viewer active">
      <div className="certification-viewer-overlay" onClick={onClose} />

      <div
        className="certification-viewer-card"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="certification-viewer-close" onClick={onClose}>
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <div className="certification-viewer-header">
          <FontAwesomeIcon icon={faCertificate} />
          <h3 className="certification-viewer-title">Certificate Preview</h3>
        </div>

        <div className="certification-viewer-content">
          {!loaded && (
            <div className="cv-progress-overlay">
              <div className="cv-progress-ring">
                <CircularProgressbar
                  value={progress}
                  text={`${Math.round(progress)}%`}
                  styles={buildStyles({
                    textSize: "18px",
                    pathColor: "#c5441c",
                    textColor: "#ffffff",
                    trailColor: "rgba(255,255,255,0.1)",
                    pathTransitionDuration: 0.3,
                  })}
                />
              </div>
              <p className="cv-progress-label">Loading document…</p>
            </div>
          )}

          {blobUrl && (
            <embed
              key={blobUrl}
              src={blobUrl}
              type="application/pdf"
              className="certification-viewer-iframe"
              style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.4s ease" }}
              onLoad={handleIframeLoad}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default CertificationViewer;
