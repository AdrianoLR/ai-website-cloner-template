import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export interface Letter {
  content: ReactNode;
  /** Slot in the source site's load sequence (1–17); it also selects the size preset. */
  order: number;
  /** Closes a word with a 0.1em gap. */
  gap?: boolean;
}

/** Splits a word into letters, pairing each character with its sequence slot. */
export function spell(word: string, orders: number[], gapAfter: number[] = []): Letter[] {
  return [...word].map((content, index) => ({
    content,
    order: orders[index],
    gap: gapAfter.includes(index),
  }));
}

// Slots that keep the full size at 1440px and up; every other slot drops to 0.8em.
const fullSizeSlots = new Set([11, 14, 15, 16]);

// Start of each slot's swing-in: preloader hold (1750ms) + 500ms + 50ms per slot.
const swingDelays = [
  "[animation-delay:2250ms]",
  "[animation-delay:2300ms]",
  "[animation-delay:2350ms]",
  "[animation-delay:2400ms]",
  "[animation-delay:2450ms]",
  "[animation-delay:2500ms]",
  "[animation-delay:2550ms]",
  "[animation-delay:2600ms]",
  "[animation-delay:2650ms]",
  "[animation-delay:2700ms]",
  "[animation-delay:2750ms]",
];

interface LettersProps {
  letters: Letter[];
  /** Plays the staggered swing-in after the preloader. */
  animated?: boolean;
}

/** One box per letter, each in its own perspective wrapper. */
export function Letters({ letters, animated = false }: LettersProps) {
  return letters.map((letter, index) => (
    <div
      key={index}
      className={cn(
        "relative z-10 [perspective:100vw] [perspective-origin:50%]",
        letter.gap && "mr-[0.1em]",
      )}
    >
      <div
        className={cn(
          fullSizeSlots.has(letter.order) ? "relative" : "min-[1440px]:text-[0.8em]",
          letter.order === 10 && "min-[1440px]:leading-[0.6]",
          animated && "animate-letter-in",
          animated && swingDelays[letter.order - 1],
        )}
      >
        {letter.content}
      </div>
    </div>
  ));
}
