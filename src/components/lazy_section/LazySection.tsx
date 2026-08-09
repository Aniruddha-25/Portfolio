import { useEffect, useRef, useState } from "react";
import type { ComponentType, RefObject } from "react";
import { registerSection, requestSectionStart, prioritizeSectionStart, subscribeSectionStart } from "./sectionQueue";
import SectionLoadBoundary from "./SectionLoadBoundary";

interface LazySectionProps {
  id: string;
  title: string;
  component: ComponentType;
}

// Renders the section shell (id + heading) so the navbar can always find and
// scroll to it, and so the section keeps its layout position, whether or not
// the real content has mounted yet.
function SectionPlaceholder({
  id,
  title,
  sectionRef,
}: {
  id: string;
  title: string;
  sectionRef: RefObject<HTMLElement | null>;
}) {
  return (
    <section id={id} className="section" ref={sectionRef}>
      <h2>{title}</h2>
    </section>
  );
}

function LazySection({ id, title, component: Component }: LazySectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [shouldRender, setShouldRender] = useState(false);

  // Every section joins the mount queue as soon as it exists — content takes
  // priority over everything else (including every section's own images),
  // so there's no reason to wait for scroll proximity before queuing it up.
  // The listener must be subscribed before requesting a start: for the very
  // first section, activeId is still null, so requestSectionStart fires
  // synchronously in this same effect — a later, separate effect would
  // subscribe too late to hear it.
  useEffect(() => {
    const unsubscribe = subscribeSectionStart(id, () => setShouldRender(true));
    registerSection(id);
    requestSectionStart(id);
    return unsubscribe;
  }, [id]);

  // Backstop: if the user scrolls to this section before its turn in the
  // queue comes up, mount it immediately rather than making them wait.
  useEffect(() => {
    if (shouldRender) return;
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      prioritizeSectionStart(id);
      return;
    }

    const visibleObserver = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting) prioritizeSectionStart(id);
    });

    visibleObserver.observe(el);
    return () => visibleObserver.disconnect();
  }, [shouldRender, id]);

  if (!shouldRender) {
    return <SectionPlaceholder id={id} title={title} sectionRef={sectionRef} />;
  }

  return (
    <SectionLoadBoundary id={id}>
      <Component />
    </SectionLoadBoundary>
  );
}

export default LazySection;
