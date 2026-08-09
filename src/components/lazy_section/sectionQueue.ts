// Coordinates section-by-section content mounting: sections mount one after
// another (in DOM order) as fast as React can commit them, so the whole
// portfolio structure is up within a few frames of load — content always
// wins over images, so this never waits on anything image-related. A direct
// scroll/jump to a later section can still force it to start immediately,
// bypassing the queue.
//
// Once every registered section has mounted, background image downloading
// is allowed to begin (see imageQueue.ts).

import { markSectionsReady } from "./imageQueue";

type Listener = () => void;

const order: string[] = [];
const listeners = new Map<string, Listener>();
const pending = new Set<string>();
const started = new Set<string>();
const completed = new Set<string>();
let activeId: string | null = null;
let sectionsReadyFired = false;

export function registerSection(id: string): void {
  if (!order.includes(id)) order.push(id);
}

function fireStart(id: string): void {
  started.add(id);
  listeners.get(id)?.();
}

function advanceQueue(): void {
  if (activeId !== null) return;
  const next = order.find((candidate) => pending.has(candidate));
  if (!next) return;
  pending.delete(next);
  activeId = next;
  fireStart(next);
}

// Soft request: joins the queue and waits its turn if another section is
// currently loading.
export function requestSectionStart(id: string): void {
  if (started.has(id) || pending.has(id)) return;
  pending.add(id);
  advanceQueue();
}

// Hard request: starts immediately regardless of the queue. Only takes over
// as the queue's active slot if nothing else is in progress, so an
// already-active section can still complete normally and advance the queue.
export function prioritizeSectionStart(id: string): void {
  pending.delete(id);
  if (started.has(id)) return;
  fireStart(id);
  if (activeId === null) {
    activeId = id;
  }
}

// Used by nav jumps: forces every section up to and including the target to
// start immediately, since correctly positioning the scroll needs their real
// (non-placeholder) heights.
export function prioritizeSectionsUpTo(targetId: string): void {
  const targetIndex = order.indexOf(targetId);
  if (targetIndex === -1) return;
  for (let i = 0; i <= targetIndex; i += 1) {
    prioritizeSectionStart(order[i]);
  }
}

export function completeSection(id: string): void {
  completed.add(id);
  if (activeId === id) {
    activeId = null;
    advanceQueue();
  }
  // order is fully populated by the time any section finishes mounting —
  // every LazySection registers in the same initial effect flush — so this
  // reliably fires once, exactly when the last section mounts.
  if (!sectionsReadyFired && order.length > 0 && completed.size >= order.length) {
    sectionsReadyFired = true;
    markSectionsReady();
  }
}

export function subscribeSectionStart(id: string, listener: Listener): () => void {
  listeners.set(id, listener);
  return () => {
    if (listeners.get(id) === listener) listeners.delete(id);
  };
}
