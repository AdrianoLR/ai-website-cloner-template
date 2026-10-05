"use client";

import type { MouseEvent } from "react";
import { useEffect, useRef } from "react";

import { ArrowDownIcon } from "./icons";
import { Letters, spell } from "./Letters";
import { follow } from "./motion";
import { heroName, heroSpace } from "./text";

const exploreLetters = spell("Explore", [4, 5, 6, 7, 8, 9, 10]);

// Furthest the ring drifts toward the pointer, in vw.
const DRIFT = 3;

/**
 * "Explore" set over the hero title with a ring link that scrolls to the
 * page's first content section. The ring follows the pointer while hovered.
 */
export function ExploreLabel({ targetId }: { targetId: string }) {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const pointer = useRef([0, 0]);

  useEffect(() => {
    const link = linkRef.current;
    if (!link) return;
    return follow(
      () => pointer.current,
      ([x, y]) => {
        link.style.transform = `translate3d(${x * DRIFT}vw, ${y * DRIFT}vw, 0)`;
      },
      96,
    );
  }, []);

  function track(event: MouseEvent<HTMLAnchorElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    pointer.current = [
      ((event.clientX - rect.left) / rect.width - 0.5) * 2,
      ((event.clientY - rect.top) / rect.height - 0.5) * 2,
    ];
  }

  function scrollToTarget(event: MouseEvent<HTMLAnchorElement>) {
    const target = document.getElementById(targetId);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="absolute right-[10%] z-10 mt-[-22vh] mr-[124px] translate-x-1/4 translate-y-full min-[1280px]:mt-[21vh] min-[1440px]:mr-0 max-[991px]:mt-0 max-[991px]:mr-[100px] max-[479px]:right-[20%] max-[479px]:mt-[-23vh] max-[479px]:mr-[35px] max-[479px]:translate-y-[300%]">
      <div className={heroName}>
        <Letters letters={exploreLetters} />
        <div className={heroSpace} />
        <div className="relative z-10 [perspective:100vw] [perspective-origin:50%]">
          <div className="relative">
            <div className="absolute right-[5%] bottom-[5%] flex size-[20vw] translate-x-1/2 translate-y-1/2 overflow-hidden p-[5vw] max-[479px]:text-[3em]">
              <a
                ref={linkRef}
                href={`#${targetId}`}
                aria-label="Scroll to content"
                onClick={scrollToTarget}
                onMouseMove={track}
                onMouseLeave={() => {
                  pointer.current = [0, 0];
                }}
                className="flex size-full items-center justify-center rounded-full border-[0.5px] border-white/25 transition-[border-color,background-color] duration-300 will-change-transform hover:border-0 hover:bg-white/20 max-[991px]:text-[0.125em]"
              >
                <div className="flex size-[1em] text-[0.5em] leading-[1.2] max-[991px]:text-[4em] max-[479px]:text-[2em]">
                  <ArrowDownIcon className="size-full" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
