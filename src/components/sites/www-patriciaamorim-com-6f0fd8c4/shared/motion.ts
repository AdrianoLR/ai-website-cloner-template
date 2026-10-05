/**
 * Eased value-following used by the site's scroll- and pointer-driven effects.
 * Each frame every value moves a fixed fraction of the remaining distance to
 * its target; `smoothing` (0–100) is the source site's setting for that effect.
 */
export function follow(
  /** Returns the current targets, or null to hold the last ones. */
  read: () => number[] | null,
  apply: (values: number[]) => void,
  smoothing: number,
): () => void {
  const ease = Math.max(1 - smoothing / 100, 0.01);
  let current: number[] | null = null;
  let target: number[] | null = null;
  let frame = 0;

  const tick = () => {
    frame = requestAnimationFrame(tick);
    target = read() ?? target;
    if (!target) return;
    if (!current) {
      current = [...target];
      apply(current);
      return;
    }
    let moved = false;
    current = current.map((value, index) => {
      const delta = target![index] - value;
      if (Math.abs(delta) < 0.0005) return target![index];
      moved = true;
      return value + delta * ease;
    });
    if (moved) apply(current);
  };

  frame = requestAnimationFrame(tick);
  return () => cancelAnimationFrame(frame);
}

/**
 * How far an element has travelled through the viewport: 0 when its top meets
 * the viewport bottom, 1 when its bottom leaves the viewport top.
 */
export function viewProgress(element: Element): number {
  const rect = element.getBoundingClientRect();
  const viewport = window.innerHeight;
  return Math.min(1, Math.max(0, (viewport - rect.top) / (viewport + rect.height)));
}

/** Layout breakpoint above which the desktop-only interactions run. */
export const isDesktop = () => window.innerWidth >= 992;
