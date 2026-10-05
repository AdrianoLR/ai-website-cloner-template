import Image from "next/image";

import type { SiteImage } from "@/types/patricia-amorim";

import { ChapterHero } from "../shared/ChapterHero";
import { ExploreLabel } from "../shared/ExploreLabel";
import { Letters, spell } from "../shared/Letters";
import type { Letter } from "../shared/Letters";
import { heroName, heroSpace, heroTitle, heroTitleRow, heroTitleWrapper } from "../shared/text";

// Casing and sequence slots mirror the target markup; the titles render uppercase.
const greeting = spell("Hi,I’m", [1, 2, 3, 4, 5, 6], [2, 5]);
const firstName = spell("Patricia", [7, 8, 9, 10, 11, 14, 15, 16]);
const firstLine: Letter[] = [
  ...spell("PHOToGrAphy", [1, 2, 3, 4, 5, 6, 7, 8, 13, 17, 13]),
  { content: <div className="text-[58%]">&amp;</div>, order: 9 },
];
const secondLineStart = spell("VISUAL", [1, 2, 3, 4, 5, 6]);
const secondLineEnd = spell("ArT", [8, 9, 12]);

interface AboutHeroProps {
  portrait: SiteImage;
  /** Id of the section the "Explore" ring scrolls to. */
  contentId: string;
}

/** Opening viewport: portrait under the screen-blended "Photography & Visual Art" title. */
export function AboutHero({ portrait, contentId }: AboutHeroProps) {
  return (
    <ChapterHero>
      <div className="absolute left-[12vw] mb-[7vh] flex w-[20vw] min-[1280px]:mb-[-9.4vh] min-[1280px]:ml-[55px] max-[991px]:ml-[67px] max-[991px]:w-[33.3vw] max-[767px]:mb-[-1vh] max-[479px]:mb-[2vh] max-[479px]:ml-[40px]">
        <div
          data-chapter-image
          className="relative z-[5] flex w-full flex-1 items-center justify-center overflow-hidden bg-canvas will-change-transform"
        >
          <div className="w-full pt-[120%] min-[1280px]:pt-[100%]" />
          <Image
            src={portrait.src}
            alt={portrait.alt}
            fill
            priority
            sizes="(max-width: 991px) 34vw, 20vw"
            className="z-[1] rounded-[20px] object-cover"
          />
        </div>
      </div>
      <div className={heroTitleWrapper}>
        <div className={heroTitleRow}>
          <div className="absolute bottom-0 left-0 z-10 -translate-x-1/4 -translate-y-full">
            <div className={heroName}>
              <Letters letters={greeting} />
              <div className={heroSpace} />
              <Letters letters={firstName} />
            </div>
          </div>
          <div className={heroTitle}>
            <Letters letters={firstLine} />
          </div>
        </div>
        <div className={heroTitleRow}>
          <ExploreLabel targetId={contentId} />
          <div className={heroTitle}>
            <Letters letters={secondLineStart} />
            <div className="relative z-10" />
            <Letters letters={secondLineEnd} />
          </div>
        </div>
      </div>
    </ChapterHero>
  );
}
