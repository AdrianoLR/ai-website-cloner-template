"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";
import type { PortfolioProject } from "@/types/patricia-amorim";

interface ProjectScrollerProps {
  projects: PortfolioProject[];
  /** Number of leading list wrappers that carry the 25px top margin below 1280px. */
  offsetWrapperCount: number;
  /** Id of the list element; the scroll indicator measures against it. */
  listId: string;
}

/**
 * One full-viewport block per project. Each block owns a fixed, screen-blended
 * title that slides from +100% to -100% while the block crosses the viewport,
 * and a thumbnail that drifts from -15% to +15% over the same pass (desktop only).
 */
export function ProjectScroller({ projects, offsetWrapperCount, listId }: ProjectScrollerProps) {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const layerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const driftRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const viewport = window.innerHeight;
      // The thumbnail drift only runs on the desktop layout.
      const parallax = window.innerWidth >= 992;
      itemRefs.current.forEach((item, index) => {
        const layer = layerRefs.current[index];
        const title = titleRefs.current[index];
        const drift = driftRefs.current[index];
        if (!item || !layer || !title || !drift) return;

        const rect = item.getBoundingClientRect();
        // 0 when the block's top meets the viewport bottom, 1 when its bottom leaves the top.
        const progress = (viewport - rect.top) / (viewport + rect.height);
        const inView = progress > 0 && progress < 1;

        layer.style.display = inView ? "flex" : "none";
        if (inView) {
          title.style.transform = `translate3d(0, ${100 - 200 * progress}%, 0)`;
        }
        if (parallax) {
          const shift = Math.min(15, Math.max(-15, -12.2 + 31 * progress));
          drift.style.transform = `translate3d(0, ${shift}%, 0)`;
        } else {
          drift.style.transform = "";
        }
      });
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [projects.length]);

  return (
    <div className="flex w-full flex-col items-center justify-start overflow-hidden">
      <div id={listId} className="grid w-full grid-cols-1 place-content-center leading-[1.5]">
        {projects.map((project, index) => (
          <div
            key={project.anchorId}
            id={project.anchorId}
            className={cn(index < offsetWrapperCount && "max-[1279px]:mt-[25px]")}
          >
            <div
              ref={(node) => {
                itemRefs.current[index] = node;
              }}
              className="relative z-[1] flex h-screen w-full flex-col items-center justify-center min-[1440px]:mb-[15%]"
            >
              <div
                ref={(node) => {
                  layerRefs.current[index] = node;
                }}
                className={cn(
                  "fixed inset-x-0 top-0 z-[1] h-full w-full flex-col items-center justify-center mix-blend-screen",
                  index === 0 ? "flex" : "hidden",
                )}
              >
                <Link
                  href={project.href}
                  className="flex max-w-full flex-col items-center overflow-hidden text-white"
                >
                  <h2
                    ref={(node) => {
                      titleRefs.current[index] = node;
                    }}
                    className="relative m-0 px-[0.2em] pt-[0.13em] text-center font-display text-[24em] leading-[0.8] font-bold tracking-[-0.01em] whitespace-pre-wrap text-brand uppercase will-change-transform max-[991px]:text-[12em] max-[991px]:leading-[0.7] max-[767px]:text-[8em] max-[479px]:text-[6em]"
                  >
                    {project.title}
                  </h2>
                </Link>
              </div>
              <div
                ref={(node) => {
                  driftRefs.current[index] = node;
                }}
                className="relative flex h-full w-full flex-col items-center justify-center will-change-transform max-[991px]:z-0"
              >
                <div className="relative w-[40vw] overflow-hidden min-[1280px]:w-[27vw] max-[991px]:w-[75vw]">
                  <div className="w-full pt-[125%]" />
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 479px) 72vw, (max-width: 1439px) 49vw, 50vw"
                    className="object-cover brightness-50"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
