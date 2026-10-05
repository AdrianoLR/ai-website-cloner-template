"use client";

import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";

import { cn } from "@/lib/utils";

interface ScrollIndicatorProps {
  /** Anchor ids of the project blocks, in page order. */
  anchorIds: string[];
  /** Id of the element wrapping every block; nothing is current once it ends. */
  listId: string;
}

/**
 * Fixed column of markers, one per project. The marker whose block spans the
 * viewport midline is fully opaque; every marker sinks by its own height over
 * the length of the page.
 */
export function ScrollIndicator({ anchorIds, listId }: ScrollIndicatorProps) {
  const [current, setCurrent] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const midline = window.innerHeight / 2;
      const end = document.getElementById(listId)?.getBoundingClientRect().bottom ?? 0;
      let next = -1;
      if (midline < end) {
        anchorIds.forEach((id, index) => {
          const top = document.getElementById(id)?.getBoundingClientRect().top;
          if (top !== undefined && top <= midline) next = index;
        });
      }
      setCurrent(next);

      const range = document.documentElement.scrollHeight - window.innerHeight;
      const progress = range > 0 ? Math.min(1, Math.max(0, window.scrollY / range)) : 0;
      listRef.current?.style.setProperty("--indicator-progress", progress.toFixed(4));
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [anchorIds, listId]);

  function scrollToAnchor(event: MouseEvent<HTMLAnchorElement>, id: string) {
    const target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="fixed top-1/2 bottom-0 left-[1vw] z-50 flex w-[4vw] -translate-y-1/2 flex-col items-center justify-center max-[991px]:left-[3vw] max-[479px]:top-auto max-[479px]:bottom-[35%] max-[479px]:left-[18px] max-[479px]:w-[20px] max-[479px]:translate-y-0">
      <div
        ref={listRef}
        className="relative flex flex-col px-[8px] max-[479px]:w-full max-[479px]:items-center max-[479px]:px-[4px]"
      >
        {anchorIds.map((id, index) => (
          <a
            key={id}
            href={`#${id}`}
            aria-label={`Go to project ${index + 1}`}
            aria-current={index === current ? "true" : undefined}
            onClick={(event) => scrollToAnchor(event, id)}
            className={cn(
              "relative z-[1] flex h-[24px] flex-col items-stretch justify-center transition-opacity duration-500 hover:opacity-100 max-[479px]:h-[20px]",
              index === current ? "opacity-100" : "opacity-20",
            )}
          >
            <div className="h-[16px] w-[20px] translate-y-[calc(var(--indicator-progress,0)*100%)] rounded-[2px] border border-white max-[479px]:h-[8px] max-[479px]:w-[8px] max-[479px]:rounded-full max-[479px]:bg-white" />
          </a>
        ))}
      </div>
    </div>
  );
}
