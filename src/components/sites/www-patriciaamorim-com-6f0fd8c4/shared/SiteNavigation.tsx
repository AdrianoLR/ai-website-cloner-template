"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { cn } from "@/lib/utils";
import type { NavLink } from "@/types/patricia-amorim";

import { SwapLabel, magneticLeave, magneticMove, magneticTransition } from "./MagneticLabel";

interface MenuLinkProps {
  link: NavLink;
  /** The link points at the page being viewed. */
  current: boolean;
  onNavigate: () => void;
}

function MenuLink({ link, current, onNavigate }: MenuLinkProps) {
  const external = link.external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <div
      onMouseMove={magneticMove}
      onMouseLeave={magneticLeave}
      className={cn("flex text-white", magneticTransition)}
    >
      <Link
        href={link.href}
        onClick={onNavigate}
        aria-current={current ? "page" : undefined}
        className={cn(
          "group text-[0.75em] leading-[1.2] tracking-normal uppercase",
          current && "font-wght-450",
        )}
        {...external}
      >
        <div data-magnetic-item className={cn("relative", magneticTransition)}>
          <SwapLabel>{link.label}</SwapLabel>
        </div>
      </Link>
    </div>
  );
}

interface SiteNavigationProps {
  name: string;
  caption: string;
  links: NavLink[];
  socialLinks: NavLink[];
}

export function SiteNavigation({ name, caption, links, socialLinks }: SiteNavigationProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div>
      <Link
        href="/"
        className="group fixed top-[3vw] left-[3vw] z-[1000] text-[0.75em] leading-[1.2] text-white mix-blend-difference max-[991px]:z-[1001] max-[767px]:top-[32px] max-[767px]:left-[24px] max-[767px]:text-[1em] max-[479px]:text-[0.8125em]"
      >
        <div
          onMouseMove={magneticMove}
          onMouseLeave={magneticLeave}
          className={cn("flex text-white", magneticTransition)}
        >
          <div>
            <div data-magnetic-item className={cn("relative", magneticTransition)}>
              <SwapLabel>{name}</SwapLabel>
            </div>
            <div className="font-serif-accent text-[1.125em] font-normal tracking-[0.06em] text-dim">
              {caption}
            </div>
          </div>
        </div>
      </Link>

      <div
        role="banner"
        className="fixed top-[3vw] right-[3vw] z-[1000] mix-blend-difference max-[991px]:top-0 max-[991px]:right-0 max-[991px]:mix-blend-normal max-[767px]:top-[24px] max-[767px]:right-[24px] max-[767px]:text-[1em] max-[479px]:text-[0.8125em]"
      >
        <nav
          role="navigation"
          className={cn(
            "max-[991px]:fixed max-[991px]:inset-0 max-[991px]:h-dvh max-[991px]:w-screen max-[991px]:bg-canvas max-[991px]:px-[3vw] max-[991px]:pt-[25vh] max-[991px]:pb-[5vh] max-[767px]:px-[24px]",
            open ? "max-[991px]:block" : "max-[991px]:hidden",
          )}
        >
          <div className="max-[991px]:flex max-[991px]:h-full max-[991px]:flex-col max-[991px]:justify-between">
            <div className="flex flex-col items-end gap-y-[0.5em] text-[1rem] max-[991px]:items-start max-[991px]:gap-y-[0.25em] max-[991px]:text-[2em]">
              {links.map((link) => (
                <MenuLink
                  key={link.href}
                  link={link}
                  current={link.href === pathname}
                  onNavigate={close}
                />
              ))}
            </div>
            <div className="hidden max-[991px]:flex max-[991px]:items-center max-[991px]:gap-[2em]">
              {socialLinks.map((link) => (
                <MenuLink key={link.href} link={link} current={false} onNavigate={close} />
              ))}
            </div>
          </div>
        </nav>
        <button
          type="button"
          aria-label="menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="relative hidden cursor-pointer p-[18px] select-none max-[991px]:block max-[991px]:h-[72px] max-[991px]:w-[72px] max-[767px]:h-[48px] max-[767px]:w-[48px]"
        >
          <span className="absolute top-[32px] left-1/2 h-[2px] w-[24px] -translate-x-1/2 bg-white max-[767px]:top-[21.3333px]" />
          <span className="absolute top-[40px] left-1/2 h-[2px] w-[24px] -translate-x-1/2 bg-white max-[767px]:top-[26.6667px]" />
        </button>
      </div>
    </div>
  );
}
