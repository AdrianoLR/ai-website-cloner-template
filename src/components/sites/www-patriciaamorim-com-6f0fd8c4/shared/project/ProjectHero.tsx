import type { ProjectDetail } from "@/types/patricia-amorim";

import { ChapterHero } from "../ChapterHero";
import { ExploreLabel } from "../ExploreLabel";
import {
  caption,
  captionEyebrow,
  heroTitle,
  heroTitleRow,
  heroTitleWrapper,
  spacerLarge,
} from "../text";

/** Opening viewport of a project page: title, "Explore" link and the meta row. */
export function ProjectHero({ project }: { project: ProjectDetail }) {
  return (
    <ChapterHero>
      <div className={heroTitleWrapper}>
        <div className={heroTitleRow}>
          <ExploreLabel targetId={project.contentAnchor} />
          <h1 className={heroTitle}>{project.title}</h1>
        </div>
        <div className={spacerLarge} />
        <div className="relative z-[1] grid auto-cols-fr grid-flow-col grid-cols-[auto] grid-rows-[auto] gap-[2em] max-[991px]:grid-cols-3 max-[767px]:grid-flow-row max-[767px]:gap-[1em] max-[479px]:w-full max-[479px]:grid-cols-1">
          {project.meta.map((entry) => (
            <div key={entry.label}>
              <div className={captionEyebrow}>{entry.label}</div>
              <div className={caption}>{entry.value}</div>
            </div>
          ))}
        </div>
      </div>
    </ChapterHero>
  );
}
