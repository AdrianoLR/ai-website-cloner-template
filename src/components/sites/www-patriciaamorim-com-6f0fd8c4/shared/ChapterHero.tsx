"use client";

import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

import { follow, isDesktop, viewProgress } from "./motion";

/**
 * Full-viewport opening section. On desktop, as the page scrolls on to the
 * next section the hero lifts 20vh, shrinks to 95% and fades to 25% while its
 * backdrop darkens to black; any [data-chapter-image] inside rises and tilts.
 */
export function ChapterHero({ children }: { children: ReactNode }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const wrapper = wrapperRef.current;
    const trigger = triggerRef.current;
    if (!section || !wrapper || !trigger) return;
    const image = wrapper.querySelector<HTMLElement>("[data-chapter-image]");

    const reset = () => {
      wrapper.style.transform = "";
      wrapper.style.opacity = "";
      section.style.backgroundColor = "";
      if (image) image.style.transform = "";
    };

    const stop = follow(
      () => [isDesktop() ? viewProgress(trigger) : 0],
      ([progress]) => {
        if (!isDesktop()) {
          reset();
          return;
        }
        const shade = Math.round(34 * (1 - progress));
        wrapper.style.transform = `translate3d(0, ${-20 * progress}vh, 0) scale(${1 - 0.05 * progress})`;
        wrapper.style.opacity = String(1 - 0.75 * progress);
        section.style.backgroundColor = `rgb(${shade}, ${shade}, ${shade})`;
        if (image) {
          image.style.transform = `translate3d(0, ${-50 * progress}%, 0) rotate(${8 * progress}deg)`;
        }
      },
      76,
    );
    return () => {
      stop();
      reset();
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative z-[5] bg-canvas [perspective:100vw]">
      <div
        ref={wrapperRef}
        className="sticky top-0 mb-[-100vh] flex h-screen w-full flex-col items-center justify-center overflow-hidden p-[5vw] [perspective:100vw] [perspective-origin:50%] max-[991px]:static max-[991px]:mb-0 max-[991px]:h-auto max-[991px]:pt-[25vh] max-[991px]:pb-[15vh]"
      >
        {children}
      </div>
      <div ref={triggerRef} className="mt-[100vh] bg-canvas max-[991px]:hidden" />
    </div>
  );
}
