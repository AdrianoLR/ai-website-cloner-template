"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";
import type { AboutGalleryEntry } from "@/types/patricia-amorim";

import { follow, viewProgress } from "../shared/motion";
import { RichInlines } from "../shared/RichText";
import { caption, captionEyebrow } from "../shared/text";
import { aboutGrid } from "./styles";

// Grid placement of each photo card (desktop), in page order.
const placements = [
  { grid: aboutGrid, item: "[grid-area:1/4/2/7]" },
  { grid: aboutGrid, item: "self-end [grid-area:1/1/2/3]" },
  { grid: cn(aboutGrid, "mt-[-4em] max-[991px]:mt-0"), item: "[grid-area:1/3/2/6]" },
];

const marqueeRow = "flex gap-[0.1em] will-change-transform";
const marqueeItem = "flex flex-none flex-row items-center justify-start gap-[0.1em]";

// The two backdrop lines travel a quarter of their own width, in opposite directions.
const MARQUEE_SHIFT = 25;

/**
 * Three staggered photo cards over two giant backdrop lines that slide in
 * opposite directions as the block scrolls through the viewport.
 */
export function AboutGallery({ entries }: { entries: AboutGalleryEntry[] }) {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const left = leftRef.current;
    const right = rightRef.current;
    if (!left || !right) return;
    return follow(
      () => [viewProgress(left), viewProgress(right)],
      ([leftProgress, rightProgress]) => {
        left.style.transform = `translate3d(${-MARQUEE_SHIFT * leftProgress}%, 0, 0)`;
        right.style.transform = `translate3d(${-MARQUEE_SHIFT * (1 - rightProgress)}%, 0, 0)`;
      },
      100,
    );
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center max-[991px]:gap-y-[3em]">
      {entries.map((entry, index) => (
        <div key={entry.image.src} className={placements[index].grid}>
          <div
            className={cn(
              "grid auto-cols-fr grid-cols-[1.75fr_1fr] gap-[0.5em] max-[991px]:[grid-area:span_1/span_3/span_1/span_3] max-[479px]:col-span-1 max-[479px]:grid-cols-1",
              placements[index].item,
            )}
          >
            <div className="relative w-full pt-[125%]">
              <Image
                src={entry.image.src}
                alt={entry.image.alt}
                fill
                sizes="(max-width: 479px) 90vw, (max-width: 991px) 50vw, 22vw"
                className="z-[1] rounded-[20px] object-cover"
              />
            </div>
            <div className="flex flex-col gap-[0.5em]">
              <div>
                <div className={captionEyebrow}>{entry.venue}</div>
                <div className={caption}>{entry.year}</div>
              </div>
              <div className="min-[1280px]:font-body-alt">
                <RichInlines nodes={entry.description} />
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute inset-0 mx-[-10vw] flex h-full items-center justify-center overflow-hidden max-[479px]:mx-[-24px]">
        <div
          aria-hidden="true"
          className="pt-[0.1em] font-display text-[32em] leading-[0.75] font-semibold tracking-normal text-canvas-muted uppercase opacity-20"
        >
          <div ref={leftRef} className={marqueeRow}>
            <div className={marqueeItem}>
              <div />
              <div />
            </div>
            <div className={marqueeItem}>
              <div>phohotography and arts</div>
              <div>Hast du den Mut deinen eigenen Weg zu gehen</div>
            </div>
          </div>
          <div ref={rightRef} className={marqueeRow}>
            <div className={marqueeItem}>
              <div />
              <div />
            </div>
            <div className={marqueeItem}>
              <div>ARArts aRTS ARTS ARTS ARTS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
