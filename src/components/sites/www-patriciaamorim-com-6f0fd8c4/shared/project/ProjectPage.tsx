import type { ProjectDetail, ScrollerItem } from "@/types/patricia-amorim";

import { ProjectScroller } from "../ProjectScroller";
import { projectIndex } from "../projects";
import { SitePage } from "../SitePage";
import { ProjectHero } from "./ProjectHero";
import { ProjectSectionView } from "./ProjectSectionView";

/** A /project/<slug> page: hero, content bands, then every other project. */
export function ProjectPage({ project }: { project: ProjectDetail }) {
  const otherProjects: ScrollerItem[] = projectIndex
    .filter((entry) => entry.slug !== project.slug)
    .map((entry) => ({
      title: entry.title,
      href: `/project/${entry.slug}`,
      image: entry.thumbnail,
      alt: "",
    }));

  return (
    <SitePage footerReveal>
      <ProjectHero project={project} />
      {project.sections.map((section, index) => (
        <ProjectSectionView
          key={index}
          section={section}
          id={index === 0 ? project.contentAnchor : undefined}
        />
      ))}
      <ProjectScroller items={otherProjects} className="pb-[50vh]" />
    </SitePage>
  );
}
