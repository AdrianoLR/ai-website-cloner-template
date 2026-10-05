import type { ProjectDetail, ScrollerItem } from "@/types/patricia-amorim";

import { exhibitions } from "../../exhibitions-599cc963/content";
import { ProjectHero } from "../project/ProjectHero";
import { ProjectSectionView } from "../project/ProjectSectionView";
import { ProjectScroller } from "../ProjectScroller";
import { SitePage } from "../SitePage";
import { exhibitionDetails } from "./registry";

/** An /exhibitions/<slug> page: hero, one content band, then every other exhibition. */
export function ExhibitionPage({ exhibition }: { exhibition: ProjectDetail }) {
  const otherExhibitions: ScrollerItem[] = exhibitionDetails
    .filter((entry) => entry.slug !== exhibition.slug)
    .map((entry) => {
      const item = exhibitions.find((candidate) => candidate.href === `/exhibitions/${entry.slug}`);
      if (!item) throw new Error(`Unknown exhibition: ${entry.slug}`);
      return item;
    });

  return (
    <SitePage footerReveal footerInside>
      <ProjectHero project={exhibition} />
      {exhibition.sections.map((section, index) => (
        <ProjectSectionView
          key={index}
          section={section}
          id={index === 0 ? exhibition.contentAnchor : undefined}
        />
      ))}
      <ProjectScroller items={otherExhibitions} titleTag="h1" className="pb-[50vh]" />
    </SitePage>
  );
}
