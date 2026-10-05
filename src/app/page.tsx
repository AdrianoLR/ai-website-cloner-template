import { Preloader } from "@/components/sites/www-patriciaamorim-com-6f0fd8c4/root-8a5edab2/Preloader";
import { ProjectScroller } from "@/components/sites/www-patriciaamorim-com-6f0fd8c4/root-8a5edab2/ProjectScroller";
import { ScrollIndicator } from "@/components/sites/www-patriciaamorim-com-6f0fd8c4/root-8a5edab2/ScrollIndicator";
import { SiteFooter } from "@/components/sites/www-patriciaamorim-com-6f0fd8c4/root-8a5edab2/SiteFooter";
import { SiteNavigation } from "@/components/sites/www-patriciaamorim-com-6f0fd8c4/root-8a5edab2/SiteNavigation";
import {
  navLinks,
  offsetWrapperCount,
  projects,
  siteCaption,
  siteName,
  socialLinks,
} from "@/components/sites/www-patriciaamorim-com-6f0fd8c4/root-8a5edab2/content";

const PROJECT_LIST_ID = "project-list";

export default function Home() {
  return (
    <>
      <div className="w-full bg-canvas-muted">
        <SiteNavigation
          name={siteName}
          caption={siteCaption}
          links={navLinks}
          socialLinks={socialLinks}
        />
        <div className="relative z-[1] bg-canvas">
          <ProjectScroller
            projects={projects}
            offsetWrapperCount={offsetWrapperCount}
            listId={PROJECT_LIST_ID}
          />
          <ScrollIndicator
            anchorIds={projects.map((project) => project.anchorId)}
            listId={PROJECT_LIST_ID}
          />
        </div>
      </div>
      <Preloader />
      <SiteFooter />
    </>
  );
}
