import { cn } from "@/lib/utils";

import { caption, captionEyebrow, spacerLarge, spacerMedium, textMedium } from "../shared/text";
import { aboutGrid, textLead } from "./styles";

interface AboutIntroProps {
  facts: { label: string; value: string }[];
}

/** Facts row, lead statement and biography with the oversized "13 years" backdrop. */
export function AboutIntro({ facts }: AboutIntroProps) {
  return (
    <>
      <div>
        <div className={aboutGrid}>
          {facts.map((fact, index) => (
            <div key={fact.label} className={cn(index === facts.length - 1 && "col-span-2")}>
              <div className={captionEyebrow}>{fact.label}</div>
              <div className={caption}>{fact.value}</div>
            </div>
          ))}
        </div>
        <div className={spacerMedium} />
        <div className={aboutGrid}>
          <div className="col-span-5 max-[991px]:col-span-3 max-[479px]:col-span-1">
            <div className={textLead}>
              Patricia Amorim, a Brazilian contemporary artist, holds a Fine Arts degree from Centro
              Universitario de Belas Artes de São Paulo and a Master of Fine Arts from the
              University of Northampton, UK.
            </div>
          </div>
        </div>
      </div>
      <div className={spacerLarge} />
      <div>
        <div className={aboutGrid}>
          <div className="relative flex flex-col items-start [grid-area:1/4/2/6] max-[991px]:[grid-area:span_1/span_2/span_1/span_2] max-[479px]:col-span-1">
            <div className={textMedium}>
              Her work has been exhibited globally, including the UK, China, Brazil, and Australia.{" "}
              <br />
              <br />
              She&apos;s a PhD candidate at Edith Cowan University, holding the ECU Higher Degree
              Research Program Scholarship. <br />
              <br />
              Her contributions extend to teaching photography work shops, art education, and
              published journal articles.
            </div>
            <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-3/4 font-display text-[32em] leading-[0.6] font-semibold whitespace-nowrap text-canvas-muted uppercase opacity-20 max-[991px]:left-1/2 max-[991px]:text-[20em] max-[767px]:text-[12em] max-[479px]:text-[8em]">
              13 years
            </div>
          </div>
        </div>
        <div className={spacerLarge} />
      </div>
    </>
  );
}
