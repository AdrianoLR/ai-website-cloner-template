import { exhibitions } from "@/components/sites/www-patriciaamorim-com-6f0fd8c4/exhibitions-599cc963/content";
import { ProjectScroller } from "@/components/sites/www-patriciaamorim-com-6f0fd8c4/shared/ProjectScroller";
import { SitePage } from "@/components/sites/www-patriciaamorim-com-6f0fd8c4/shared/SitePage";

export default function ExhibitionsPage() {
  return (
    <SitePage footerReveal>
      <ProjectScroller items={exhibitions} className="pb-[50vh]" />
    </SitePage>
  );
}
