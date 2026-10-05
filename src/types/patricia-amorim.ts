export interface PortfolioProject {
  /** Anchor id on the home page; the scroll indicator links to it. */
  anchorId: string;
  title: string;
  /** Destination of the title link. */
  href: string;
  /** Path under /public. */
  image: string;
  alt: string;
}

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}
