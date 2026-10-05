import { artworkOrder } from "@/components/sites/www-patriciaamorim-com-6f0fd8c4/artwork-47456e98/content";
import { ProjectScroller } from "@/components/sites/www-patriciaamorim-com-6f0fd8c4/shared/ProjectScroller";
import { projectBySlug } from "@/components/sites/www-patriciaamorim-com-6f0fd8c4/shared/projects";
import { SitePage } from "@/components/sites/www-patriciaamorim-com-6f0fd8c4/shared/SitePage";
import type { ScrollerItem } from "@/types/patricia-amorim";

const items: ScrollerItem[] = artworkOrder.map((slug) => {
  const project = projectBySlug(slug);
  return {
    title: project.title,
    href: `/project/${slug}`,
    image: project.thumbnail,
    alt: project.title,
  };
});

export default function ArtworkPage() {
  return (
    <SitePage footerReveal>
      <ProjectScroller items={items} className="pb-[50vh]" />
    </SitePage>
  );
}
