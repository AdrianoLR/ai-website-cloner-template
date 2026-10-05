/** One full-viewport block of a title scroller (home, artwork, exhibitions, project pages). */
export interface ScrollerItem {
  title: string;
  /** Destination of the title link. */
  href: string;
  /** Path under /public. */
  image: string;
  alt: string;
  /** Anchor id of the block's list wrapper, where the page links to it. */
  anchorId?: string;
}

export interface PortfolioProject extends ScrollerItem {
  /** Anchor id on the home page; the scroll indicator links to it. */
  anchorId: string;
}

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface ProjectSummary {
  slug: string;
  title: string;
  /** Thumbnail path under /public. */
  thumbnail: string;
}

export interface SiteImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface SiteVideo {
  poster: string;
  sources: { src: string; type: string }[];
}

export type RichInline =
  | string
  | { tag: "br" }
  | { tag: "em" | "strong" | "span"; children: RichInline[] }
  | { tag: "a"; href: string; children: RichInline[] };

export interface RichBlock {
  tag: "h1" | "h2" | "h3" | "h4" | "p" | "blockquote";
  children: RichInline[];
}

export interface ProjectSection {
  /** "stack": cover image, then a one-column gallery. "grid": two-column gallery only. */
  layout: "stack" | "grid";
  cover?: SiteImage;
  /** Looping clip shown after the cover image. */
  coverVideo?: SiteVideo;
  gallery: SiteImage[];
  /** Looping clip shown after the gallery. */
  galleryVideo?: SiteVideo;
  body: RichBlock[];
}

export interface ProjectDetail {
  slug: string;
  title: string;
  /** Id of the first content section; the hero's scroll-down link targets it. */
  contentAnchor: string;
  meta: { label: string; value: string }[];
  sections: ProjectSection[];
}

export interface AboutGalleryEntry {
  image: SiteImage;
  venue: string;
  year: string;
  description: RichInline[];
}

export interface AboutAward {
  href: string;
  newTab: boolean;
  title: RichInline[];
  caption: string;
  year: string;
  image: SiteImage;
}

export interface AboutContent {
  portrait: SiteImage;
  facts: { label: string; value: string }[];
  gallery: AboutGalleryEntry[];
  awards: AboutAward[];
}
