"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";

import { Letters, spell } from "../shared/Letters";
import {
  MagneticLink,
  SwapLabel,
  magneticLeave,
  magneticMove,
  magneticTransition,
} from "../shared/MagneticLabel";
import { caption, captionEyebrow, captionTitle, divider } from "../shared/text";
import { email, navigation, social } from "./content";

const leadingLetters = spell("Getin", [1, 2, 3, 4, 5], [2, 4]);
const lastWord = spell("touch", [6, 7, 8, 9, 10]);

/**
 * The whole contact page: "Get in touch" swings in letter by letter after the
 * preloader while the rules, brand link, link lists and email row fade in.
 */
export function ContactHero() {
  return (
    <div className="flex min-h-screen w-full overflow-hidden px-[10vw] py-[5vw] [perspective:200px] max-[767px]:pb-[10%]">
      <div className="grid w-full auto-cols-fr grid-cols-[auto_1fr] grid-rows-[auto_1fr] content-between gap-x-[10vw] gap-y-[5vw] max-[991px]:grid-rows-[auto_auto_1fr] max-[991px]:gap-x-[5vw] max-[767px]:grid-cols-1 max-[767px]:gap-[10vw]">
        <div className={cn(divider, "col-span-2 animate-show-on-load max-[767px]:col-span-1")} />

        <div className="animate-show-on-load self-center justify-self-start">
          <Link
            href="/"
            onMouseMove={magneticMove}
            onMouseLeave={magneticLeave}
            className={cn("group flex max-w-full text-white", magneticTransition)}
          >
            <div>
              <div className={caption}>
                <div data-magnetic-item className={cn("relative", magneticTransition)}>
                  <SwapLabel>Patricia Amorim</SwapLabel>
                </div>
              </div>
              <div className={captionEyebrow}>Photography &amp; Visual Arts</div>
            </div>
          </Link>
        </div>

        <div className="self-center max-[991px]:col-span-2 max-[991px]:self-end max-[767px]:col-span-1">
          <h1 className="relative z-[5] flex flex-wrap items-center gap-y-[0.124em] pt-[0.14em] font-display text-[23em] leading-[0.6] font-semibold tracking-[-0.01em] text-brand uppercase max-[991px]:text-[17em] max-[767px]:text-[8em] max-[479px]:text-[5em] max-[479px]:tracking-normal">
            <Letters letters={leadingLetters} animated />
            <div className="flex">
              <Letters letters={lastWord} animated />
            </div>
          </h1>
        </div>

        <div className={cn(divider, "col-span-2 animate-show-on-load max-[767px]:col-span-1")} />

        <div className="animate-show-on-load max-[767px]:col-start-1 max-[767px]:row-start-6">
          <div className="grid auto-cols-fr grid-cols-2 justify-items-start gap-[1em]">
            <div>
              <div className={cn(captionEyebrow, "mb-[1em]")}>Navigation</div>
              <div className="grid auto-cols-fr grid-cols-1 gap-[2em]">
                <div className="flex flex-col items-start gap-y-[0.375em]">
                  {navigation.map((link) => (
                    <MagneticLink
                      key={link.href}
                      href={link.href}
                      hoverLabel={link.hoverLabel}
                      className={caption}
                    >
                      {link.label}
                    </MagneticLink>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className={cn(captionEyebrow, "mb-[1em]")}>Social</div>
              <div className="flex flex-col items-start gap-y-[0.375em]">
                {social.map((link) => (
                  <MagneticLink
                    key={link.href}
                    href={link.href}
                    hoverLabel={link.hoverLabel}
                    external
                    className={caption}
                  >
                    {link.label}
                  </MagneticLink>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="animate-show-on-load">
          <div className="flex flex-col gap-x-[1em] gap-y-[1.25em]">
            <div className={divider} />
            <div className="grid auto-cols-fr grid-cols-5 gap-[1em] max-[479px]:grid-cols-2 max-[479px]:gap-y-[0.5em]">
              <div className="relative flex flex-col items-start">
                <div className={captionEyebrow}>
                  01
                  <br />‍
                </div>
              </div>
              <div className="relative col-span-2 flex flex-col items-start">
                <div className={captionTitle}>Email</div>
                <MagneticLink href={email.href} hoverLabel={email.hoverLabel} className={caption}>
                  {email.label}
                </MagneticLink>
                <div className="absolute top-0 bottom-[-1.25em] left-[-1em] w-[1.5px] bg-divider max-[479px]:hidden" />
              </div>
            </div>
            <div className={divider} />
          </div>
        </div>
      </div>
    </div>
  );
}
