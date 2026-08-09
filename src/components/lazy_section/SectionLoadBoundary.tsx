import { useEffect } from "react";
import type { ReactNode } from "react";
import { completeSection } from "./sectionQueue";

// Tells the section queue this section's content has mounted, so the next
// section can start. Advancement never waits on this section's images —
// those are handled entirely separately, by the global background image
// queue — only on the content itself being on screen.
function SectionLoadBoundary({ id, children }: { id: string; children: ReactNode }) {
  useEffect(() => {
    completeSection(id);
  }, [id]);

  return <>{children}</>;
}

export default SectionLoadBoundary;
