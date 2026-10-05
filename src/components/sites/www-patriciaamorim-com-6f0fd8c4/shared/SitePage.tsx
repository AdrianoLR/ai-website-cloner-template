import type { ReactNode } from "react";

import { FooterReveal } from "./FooterReveal";
import { Preloader } from "./Preloader";
import { SiteFooter } from "./SiteFooter";
import { SiteNavigation } from "./SiteNavigation";
import { navLinks, siteCaption, siteName, socialLinks } from "./site";

interface SitePageProps {
  children: ReactNode;
  /** The contact page has no fixed navigation. */
  navigation?: boolean;
  /** Animates the footer in as the content scrolls off it (desktop). */
  footerReveal?: boolean;
  /**
   * Puts the footer inside the content layer, as the exhibition detail pages do: on desktop
   * it then stays pinned behind the whole page and shows faintly through the project list.
   */
  footerInside?: boolean;
}

/** Frame shared by the inner pages: navigation, content layer, footer and preloader. */
export function SitePage({
  children,
  navigation = true,
  footerReveal = false,
  footerInside = false,
}: SitePageProps) {
  return (
    <>
      <div className="w-full bg-canvas-muted">
        {navigation && (
          <SiteNavigation
            name={siteName}
            caption={siteCaption}
            links={navLinks}
            socialLinks={socialLinks}
          />
        )}
        <div className="relative z-[1] bg-canvas">
          {children}
          {footerReveal && <FooterReveal />}
          {footerInside && <SiteFooter />}
        </div>
        {!footerInside && <SiteFooter />}
      </div>
      <Preloader />
    </>
  );
}
