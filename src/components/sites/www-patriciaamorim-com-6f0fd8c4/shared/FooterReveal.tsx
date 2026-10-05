"use client";

import { useEffect, useRef } from "react";

import { follow, isDesktop, viewProgress } from "./motion";

/**
 * Zero-height marker placed at the end of the page content. While it crosses
 * the viewport (desktop only) the footer behind the content rises from 25%
 * below, grows from 90% and fades in from 25% opacity.
 */
export function FooterReveal() {
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footer = document.querySelector<HTMLElement>("[data-site-footer]");
    const trigger = triggerRef.current;
    if (!footer || !trigger) return;

    const stop = follow(
      () => (isDesktop() ? [viewProgress(trigger)] : [1]),
      ([progress]) => {
        if (!isDesktop()) {
          footer.style.transform = "";
          footer.style.opacity = "";
          return;
        }
        footer.style.transform = `translate3d(0, ${25 * (1 - progress)}%, 0) scale(${0.9 + 0.1 * progress})`;
        footer.style.opacity = String(0.25 + 0.75 * progress);
      },
      80,
    );
    return () => {
      stop();
      footer.style.transform = "";
      footer.style.opacity = "";
    };
  }, []);

  return <div ref={triggerRef} />;
}
