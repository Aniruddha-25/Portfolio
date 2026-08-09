// Tracks whether the user is actively scrolling, so background preloading
// can pause while they're in motion (avoiding contention with the section
// they're heading toward) and resume once they settle.

type Listener = (scrolling: boolean) => void;

const IDLE_DELAY_MS = 150;

let scrolling = false;
let idleTimer: ReturnType<typeof setTimeout> | null = null;
const listeners = new Set<Listener>();

function setScrolling(next: boolean): void {
  if (scrolling === next) return;
  scrolling = next;
  listeners.forEach((listener) => listener(scrolling));
}

function handleScroll(): void {
  setScrolling(true);
  if (idleTimer) clearTimeout(idleTimer);
  idleTimer = setTimeout(() => setScrolling(false), IDLE_DELAY_MS);
}

if (typeof window !== "undefined") {
  window.addEventListener("scroll", handleScroll, { passive: true });
}

export function isScrolling(): boolean {
  return scrolling;
}

export function subscribeScrollState(listener: Listener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
