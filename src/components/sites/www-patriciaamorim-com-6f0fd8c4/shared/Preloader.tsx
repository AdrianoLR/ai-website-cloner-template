"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const HOLD_MS = 1750;
const FADE_MS = 500;

/** Full-screen cover shown on load: holds ~1.75s, fades out, then unmounts. */
export function Preloader() {
  const [phase, setPhase] = useState<"visible" | "fading" | "done">("visible");

  useEffect(() => {
    const fade = window.setTimeout(() => setPhase("fading"), HOLD_MS);
    const done = window.setTimeout(() => setPhase("done"), HOLD_MS + FADE_MS);
    return () => {
      window.clearTimeout(fade);
      window.clearTimeout(done);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      aria-hidden="true"
      className={cn(
        "fixed inset-0 z-[999] flex h-screen w-screen flex-col items-center justify-center bg-preloader transition-opacity duration-500",
        phase === "fading" ? "opacity-0" : "opacity-100",
      )}
    >
      <Image
        src="/sites/www-patriciaamorim-com-6f0fd8c4/shared/images/loader-three-dots-white.svg"
        alt=""
        width={120}
        height={30}
        unoptimized
        className="h-auto w-[40px]"
      />
    </div>
  );
}
