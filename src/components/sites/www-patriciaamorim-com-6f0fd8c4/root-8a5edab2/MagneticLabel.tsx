"use client";

import type { MouseEvent, ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Pointer-follow nudge used by every text link: the hovered box drifts up to
 * 0.05em toward the cursor and its [data-magnetic-item] child twice that.
 */
export function magneticMove(event: MouseEvent<HTMLElement>) {
  const outer = event.currentTarget;
  const inner = outer.querySelector<HTMLElement>("[data-magnetic-item]");
  const rect = outer.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
  const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
  outer.style.transform = `translate3d(${x * 0.05}em, ${y * 0.05}em, 0)`;
  if (inner) inner.style.transform = `translate3d(${x * 0.1}em, ${y * 0.1}em, 0)`;
}

export function magneticLeave(event: MouseEvent<HTMLElement>) {
  const outer = event.currentTarget;
  const inner = outer.querySelector<HTMLElement>("[data-magnetic-item]");
  outer.style.transform = "";
  if (inner) inner.style.transform = "";
}

export const magneticTransition =
  "transition-transform duration-300 ease-out will-change-transform";

/**
 * Two stacked copies of a label inside a clipping box. On hover of the
 * nearest `group`, both slide up one line so the serif copy replaces the
 * sans copy.
 */
export function SwapLabel({ children }: { children: ReactNode }) {
  const slide =
    "whitespace-nowrap uppercase transition-transform duration-500 ease-[cubic-bezier(0.165,0.84,0.44,1)] group-hover:-translate-y-full";
  return (
    <div className="relative overflow-hidden">
      <div className={cn("relative", slide)}>{children}</div>
      <div
        aria-hidden="true"
        className={cn(
          "absolute top-full left-0 font-serif-accent font-normal tracking-[0.05em]",
          slide,
        )}
      >
        {children}
      </div>
    </div>
  );
}
