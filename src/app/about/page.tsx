import { AboutAwards } from "@/components/sites/www-patriciaamorim-com-6f0fd8c4/about-979bddc4/AboutAwards";
import { AboutGallery } from "@/components/sites/www-patriciaamorim-com-6f0fd8c4/about-979bddc4/AboutGallery";
import { AboutHero } from "@/components/sites/www-patriciaamorim-com-6f0fd8c4/about-979bddc4/AboutHero";
import { AboutIntro } from "@/components/sites/www-patriciaamorim-com-6f0fd8c4/about-979bddc4/AboutIntro";
import { about } from "@/components/sites/www-patriciaamorim-com-6f0fd8c4/about-979bddc4/content";
import { SitePage } from "@/components/sites/www-patriciaamorim-com-6f0fd8c4/shared/SitePage";
import { section, spacerLarge } from "@/components/sites/www-patriciaamorim-com-6f0fd8c4/shared/text";
import { cn } from "@/lib/utils";

const CONTENT_ID = "content";

export default function AboutPage() {
  return (
    <SitePage footerReveal>
      <AboutHero portrait={about.portrait} contentId={CONTENT_ID} />
      <div id={CONTENT_ID} className={cn(section, "max-[991px]:overflow-hidden")}>
        <AboutIntro facts={about.facts} />
        <div className={spacerLarge} />
        <AboutGallery entries={about.gallery} />
        <div className={spacerLarge} />
        <div className="font-wght-550 text-[1.5em] leading-[1.5] tracking-[-0.02em] min-[1280px]:font-body-alt min-[1280px]:leading-[1.1] min-[1280px]:font-normal min-[1280px]:whitespace-break-spaces max-[767px]:text-[1.25em]">
          Contemporary artist and researcher interested in exploring how identity can be perceived
          through gendered bodies from a feminist standpoint. Her practice-led research examines how
          contemporary digital photography affects the concept of gendered bodies and the
          possibilities of inscriptions of digitally altered gendered bodies in a cross-cultural
          setting.
        </div>
        <div className={spacerLarge} />
        <AboutAwards awards={about.awards} />
        <div className={spacerLarge} />
      </div>
    </SitePage>
  );
}
