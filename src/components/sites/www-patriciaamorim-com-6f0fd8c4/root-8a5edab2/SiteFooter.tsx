import type { ComponentType, SVGProps } from "react";

import { cn } from "@/lib/utils";

import { InstagramIcon, LinkedinIcon } from "../shared/icons";

interface SocialButton {
  label: string;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  /** Fill revealed on hover (desktop). */
  hoverFill: string;
  /** Permanent badge fill at 991px and below. */
  badgeFill: string;
}

const socialButtons: SocialButton[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ptamorim/",
    Icon: LinkedinIcon,
    hoverFill: "bg-linkedin-hover",
    badgeFill: "max-[991px]:bg-linkedin-badge",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ptamorimsilva/",
    Icon: InstagramIcon,
    hoverFill: "bg-instagram-hover",
    badgeFill: "max-[991px]:bg-instagram-badge",
  },
];

/**
 * Full-viewport closing panel. On desktop it is sticky to the viewport bottom
 * underneath the content layer, so the last project scrolls away to reveal it.
 */
export function SiteFooter() {
  return (
    <div className="sticky bottom-0 z-0 mt-[-2px] flex min-h-screen overflow-hidden bg-canvas max-[991px]:relative max-[991px]:z-[1] max-[991px]:mt-0">
      <div className="relative grid w-full grid-cols-2 grid-rows-[1fr] gap-x-[10vw] gap-y-[15vh] overflow-hidden px-[3vw] pt-[15vh] pb-[3vw] font-normal max-[991px]:grid-cols-1 max-[991px]:gap-y-[5vw] max-[991px]:text-[1em] max-[479px]:gap-y-[20vw] max-[479px]:px-[24px] max-[479px]:pt-[50vw] max-[479px]:pb-[10vh]">
        <div className="relative col-span-full mx-auto flex flex-col items-center justify-center gap-y-[4em] text-center">
          <div className="relative flex items-center gap-[2vw] max-[991px]:justify-items-center">
            {socialButtons.map(({ label, href, Icon, hoverFill, badgeFill }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group relative mr-[-31px] flex size-0 flex-none items-center justify-center p-[40px] min-[1280px]:mr-[-40px]"
              >
                <div
                  className={cn(
                    "relative z-[1] flex size-[1.5em] shrink-0 text-[1.5em] min-[1280px]:size-[1em] max-[991px]:size-[3em] max-[991px]:rounded-[40px] max-[991px]:p-[20px]",
                    badgeFill,
                  )}
                >
                  <Icon className="size-full" />
                </div>
                <div
                  className={cn(
                    "absolute size-full scale-0 rounded-full transition-transform duration-300 ease-out group-hover:scale-100 max-[991px]:hidden",
                    hoverFill,
                  )}
                />
              </a>
            ))}
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[32em] leading-[0.6] font-semibold whitespace-nowrap text-canvas-muted uppercase opacity-20 max-[767px]:text-[14em] max-[479px]:text-[8em]">
            Let’s Connect
          </div>
        </div>
      </div>
    </div>
  );
}
