import Image from "next/image";

import { cn } from "@/lib/utils";
import type { ProjectSection, SiteVideo } from "@/types/patricia-amorim";

import { RichText } from "../RichText";
import { section as sectionBand, textMedium } from "../text";

/** Muted, looping clip that fills its box; the poster shows until it plays. */
function BackgroundVideo({ video, className }: { video: SiteVideo; className: string }) {
  return (
    <div className={cn("relative mb-[100px] h-[500px] w-full overflow-hidden text-white", className)}>
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={video.poster}
        className="absolute inset-0 -z-[100] size-full object-cover"
      >
        {video.sources.map((source) => (
          <source key={source.src} src={source.src} type={source.type} />
        ))}
      </video>
    </div>
  );
}

interface ProjectSectionViewProps {
  section: ProjectSection;
  /** Anchor id, set on the page's first section. */
  id?: string;
}

/**
 * One content band of a project page: optional cover image and clips, the
 * gallery (one column, or two for the "grid" layout) and the write-up.
 */
export function ProjectSectionView({ section, id }: ProjectSectionViewProps) {
  const grid = section.layout === "grid";

  return (
    <div id={id} className={cn(sectionBand, "min-w-1/2 font-sans")}>
      {section.cover && (
        <Image
          src={section.cover.src}
          alt={section.cover.alt}
          width={section.cover.width}
          height={section.cover.height}
          sizes="100vw"
          className="mb-[10%] block h-auto w-full min-[1280px]:shadow-[0_0_1.9em_-0.7em_#000] max-[991px]:mb-[100px]"
        />
      )}
      {section.coverVideo && (
        <BackgroundVideo video={section.coverVideo} className="min-[1280px]:h-[50vw]" />
      )}
      <div>
        <div
          className={cn(
            "grid auto-cols-fr grid-rows-[auto_1fr] gap-[1em] min-[1280px]:place-content-stretch min-[1280px]:place-items-baseline",
            grid ? "grid-cols-2 max-[767px]:grid-cols-1" : "grid-cols-1",
          )}
        >
          {section.gallery.map((image) => (
            <div
              key={image.src}
              className="flex w-full min-w-full justify-center text-center min-[1280px]:row-span-2 min-[1440px]:block"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="100vw"
                className="mb-[100px] block h-auto w-full max-w-full min-[1280px]:mx-auto min-[1280px]:w-auto min-[1280px]:shadow-[0_0_1.9em_-0.7em_#000] min-[1440px]:w-full min-[1440px]:max-w-[80%] min-[1440px]:shadow-none"
              />
            </div>
          ))}
        </div>
      </div>
      {section.galleryVideo && (
        <BackgroundVideo video={section.galleryVideo} className="min-[1280px]:h-screen" />
      )}
      <div>
        <div className="grid grid-cols-1 gap-[2em]">
          <RichText blocks={section.body} className={cn(textMedium, "min-[1280px]:py-[1.1em]")} />
        </div>
      </div>
    </div>
  );
}
