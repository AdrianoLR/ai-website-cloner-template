"use client";

import Image from "next/image";
import type { MouseEvent } from "react";
import { Fragment, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import type { AboutAward } from "@/types/patricia-amorim";

import { ArrowUpRightIcon } from "../shared/icons";
import { follow } from "../shared/motion";
import { RichInlines } from "../shared/RichText";
import { captionEyebrow, divider, spacerMedium } from "../shared/text";
import { aboutGrid, textLead } from "./styles";

const awardHeading =
  "relative z-[1] font-wght-450 text-[1.625em] leading-none tracking-[-0.01em] max-[991px]:text-[1.25em] max-[479px]:text-[1.125em] max-[479px]:leading-[1.2] max-[479px]:tracking-normal";

const reveal = "ease-[cubic-bezier(0.2,1,0.23,1)]";

/** Pointer position inside an element, from -1 (start) to 1 (end) on each axis. */
function pointerOffset(event: MouseEvent<HTMLElement>): [number, number] {
  const rect = event.currentTarget.getBoundingClientRect();
  return [
    ((event.clientX - rect.left) / rect.width - 0.5) * 2,
    ((event.clientY - rect.top) / rect.height - 0.5) * 2,
  ];
}

interface AwardRowProps {
  award: AboutAward;
  onPointer: (y: number) => void;
}

function AwardRow({ award, onPointer }: AwardRowProps) {
  // The row's tinted backdrop only becomes visible once the row has been clicked.
  const [tinted, setTinted] = useState(false);
  const target = award.newTab ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <a
      href={award.href}
      onClick={() => setTinted(true)}
      onMouseMove={(event) => onPointer(pointerOffset(event)[1])}
      onMouseLeave={() => onPointer(0)}
      className={cn(
        "group relative z-[1] grid auto-cols-fr grid-cols-6 items-center gap-[1em] py-[1.75em] transition-[padding] duration-700 hover:z-[2] hover:px-[2em] max-[991px]:hover:px-0 max-[479px]:grid-cols-5",
        reveal,
      )}
      {...target}
    >
      <div
        className={cn(
          "absolute inset-x-0 top-1/2 h-0 w-full -translate-y-1/2 bg-divider transition-[height,opacity] duration-700 group-hover:h-full max-[991px]:hidden",
          reveal,
          tinted ? "opacity-100" : "opacity-0",
        )}
      />
      <div className="col-span-4">
        <div className={awardHeading}>
          <RichInlines nodes={award.title} />
        </div>
        <div className="absolute translate-y-[0.1em]">
          <div className={captionEyebrow}>{award.caption}</div>
        </div>
      </div>
      <div>
        <div className={awardHeading}>{award.year}</div>
      </div>
      <div className="justify-self-end max-[479px]:hidden">
        <div className="flex size-[1em] text-[1.875em]">
          <ArrowUpRightIcon className="size-full" />
        </div>
      </div>
      <div className="absolute -z-50 flex w-1/2 -translate-x-full flex-col items-center justify-center max-[991px]:hidden">
        <div data-award-tilt className="flex flex-col items-center justify-center will-change-transform">
          <div data-award-lift className="w-[12vw] will-change-transform">
            <div
              className={cn(
                "relative w-full scale-[0.6] overflow-hidden pt-[125%] opacity-0 transition-[scale,opacity] duration-[800ms,250ms] group-hover:scale-100 group-hover:opacity-100 group-hover:delay-100 group-hover:duration-[900ms,300ms]",
                reveal,
              )}
            >
              <Image
                src={award.image.src}
                alt={award.image.alt}
                fill
                sizes="12vw"
                className={cn(
                  "scale-[1.4] object-cover contrast-[.85] grayscale-[.5] transition-[scale] duration-[800ms] group-hover:scale-100 group-hover:delay-100 group-hover:duration-[900ms]",
                  reveal,
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

/**
 * "Exhibitions & Publications" list. Hovering a row slides it inward and pops
 * a preview image to its left; the preview tilts and slides with the pointer's
 * horizontal position over the list and lifts with its vertical position over
 * the row.
 */
export function AboutAwards({ awards }: { awards: AboutAward[] }) {
  const listRef = useRef<HTMLDivElement>(null);
  // [pointer x over the list, pointer y over each row…]
  const pointer = useRef<number[]>([0, ...awards.map(() => 0)]);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const tilts = [...list.querySelectorAll<HTMLElement>("[data-award-tilt]")];
    const lifts = [...list.querySelectorAll<HTMLElement>("[data-award-lift]")];
    return follow(
      () => pointer.current,
      ([x, ...rows]) => {
        tilts.forEach((tilt) => {
          tilt.style.transform = `translate3d(${x * 100}%, 0, 0) rotate(${x * 6}deg)`;
        });
        lifts.forEach((lift, index) => {
          lift.style.transform = `translate3d(0, ${rows[index] * 25}%, 0)`;
        });
      },
      96,
    );
  }, []);

  return (
    <div>
      <div>
        <div className={textLead}>Exhibitions</div>
        <div className={textLead}>&amp; Publications</div>
      </div>
      <div className={spacerMedium} />
      <div className={aboutGrid}>
        <div className="relative z-20 col-span-2 mt-[-8vh] mr-[-1em] mb-[-12vh] ml-[-4em] flex items-center justify-center overflow-hidden max-[991px]:absolute max-[991px]:inset-0 max-[991px]:z-0 max-[991px]:m-0">
          <div className="relative z-[1] grid w-full -rotate-90 auto-cols-auto grid-cols-[auto] grid-rows-[auto] place-items-center justify-center gap-[16px] whitespace-nowrap max-[991px]:rotate-0">
            <div className="flex w-full flex-row items-center justify-center pt-[100%] [grid-area:1/1/2/2] max-[991px]:pt-0" />
            <div className="[grid-area:1/1/2/2]">
              <div className="font-display text-[20em] font-medium tracking-normal text-canvas-muted uppercase opacity-20 max-[479px]:text-[8em]">
                expression
              </div>
            </div>
          </div>
        </div>
        <div
          ref={listRef}
          onMouseMove={(event) => {
            pointer.current[0] = pointerOffset(event)[0];
          }}
          onMouseLeave={() => {
            pointer.current[0] = 0;
          }}
          className="[grid-area:1/3/2/7] max-[991px]:relative max-[991px]:z-[1] max-[991px]:[grid-area:span_1/span_3/span_1/span_3]"
        >
          {awards.map((award, index) => (
            <Fragment key={`${award.href}-${award.year}`}>
              <AwardRow
                award={award}
                onPointer={(y) => {
                  pointer.current[index + 1] = y;
                }}
              />
              <div className={divider} />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
