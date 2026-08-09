// Coordinates background image downloading, globally across every section.
// It only starts once every section has mounted (content always wins over
// images), then works through registered images one at a time in DOM order,
// pausing while the user is actively scrolling or offline so bandwidth isn't
// spent on images they're not near. A prioritized (visible/approaching)
// image always bypasses every gate and starts immediately.

import { isScrolling, subscribeScrollState } from "./scrollActivity";

type Listener = () => void;

// Multiple BlurImage instances can share the same src (a reused logo or
// placeholder), so each id can have more than one subscriber — all of them
// need to hear about a shared image's turn, not just the most recent one.
const order: string[] = [];
const listeners = new Map<string, Set<Listener>>();
const pending = new Set<string>();
const started = new Set<string>();
let activeId: string | null = null;
let sectionsReady = false;

function isOnline(): boolean {
  return typeof navigator === "undefined" || navigator.onLine;
}

export function registerImage(id: string): void {
  if (!order.includes(id)) order.push(id);
}

// Lets a late subscriber (a second BlurImage sharing this src, mounting
// after the first already claimed its turn) catch up immediately instead of
// waiting for a start signal that already fired and won't fire again.
export function hasImageStarted(id: string): boolean {
  return started.has(id);
}

function fireStart(id: string): void {
  started.add(id);
  listeners.get(id)?.forEach((listener) => listener());
}

function advanceQueue(): void {
  if (activeId !== null) return;
  if (!sectionsReady) return;
  if (isScrolling()) return;
  if (!isOnline()) return;
  const next = order.find((candidate) => pending.has(candidate));
  if (!next) return;
  pending.delete(next);
  activeId = next;
  fireStart(next);
}

// Soft request: joins the background queue and waits its turn.
export function requestImageLoad(id: string): void {
  if (started.has(id) || pending.has(id)) return;
  pending.add(id);
  advanceQueue();
}

// Hard request: starts immediately regardless of queue position, readiness,
// scroll state, or connectivity — the caller (BlurImage) still holds off the
// actual network request while offline.
export function prioritizeImageLoad(id: string): void {
  pending.delete(id);
  if (started.has(id)) return;
  fireStart(id);
  if (activeId === null) activeId = id;
}

export function completeImage(id: string): void {
  if (activeId === id) {
    activeId = null;
    advanceQueue();
  }
}

export function subscribeImageStart(id: string, listener: Listener): () => void {
  let set = listeners.get(id);
  if (!set) {
    set = new Set();
    listeners.set(id, set);
  }
  set.add(listener);
  return () => {
    set?.delete(listener);
  };
}

// Called once every registered section has mounted its real content —
// background image downloading has nothing to do before that.
export function markSectionsReady(): void {
  if (sectionsReady) return;
  sectionsReady = true;
  advanceQueue();
}

if (typeof window !== "undefined") {
  subscribeScrollState((scrolling) => {
    if (!scrolling) advanceQueue();
  });
  window.addEventListener("online", () => advanceQueue());
}
