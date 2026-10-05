# Exhibition detail page template Specification

## Overview
- **Target files:** `src/components/sites/www-patriciaamorim-com-6f0fd8c4/shared/exhibition/{ExhibitionPage.tsx,registry.ts}`; reuses `shared/project/{ProjectHero,ProjectSectionView}.tsx`, `shared/RichText.tsx`, `shared/ProjectScroller.tsx`, `shared/SitePage.tsx`; per-page data in `exhibitions-<slug>-<hash>/content.ts`
- **Route:** `src/app/exhibitions/[slug]/page.tsx` (11 static params, `dynamicParams = false`)
- **Screenshot:** `docs/design-references/www-patriciaamorim-com-6f0fd8c4/exhibitions-<slug>-<hash>/full-desktop-1440.jpg`
- **Interaction model:** scroll-driven hero (ChapterHero), pointer ring (ExploreLabel), scroll-driven exhibition list (ProjectScroller), scroll-driven footer reveal

Everything not listed here is identical to the project page template (`ProjectPage.spec.md`): hero, meta row, section band,
cover image, gallery image sizes, rich-text type, list blocks.

## DOM Structure
```
body
├─ .content                            (no .layout wrapper on this template)
│  ├─ .navigation
│  ├─ ._1st-section                    hero: "Explore" + h1.about-title + Category / Year
│  ├─ #content.section.show-on-load    a single CMS section
│  │    ├─ img.image                   cover (hidden when the CMS field is empty: /exhibitions/cleanse)
│  │    ├─ .background-video-2         only visible on /exhibitions/re-borrowing-arrows
│  │    ├─ .projects-list              gallery
│  │    └─ .work-info > .text-medium.w-richtext   (empty and hidden on /exhibitions/finding-our-place)
│  ├─ .thumb-wrapper.is-work           the other 10 exhibitions; titles are h1.thumb-title
│  ├─ .footer-trigger
│  └─ .footer                          INSIDE .content on this template
└─ .preloader
```

## Computed Styles (differences from the project template)

### .projects-list (gallery)
- >=1280px: `grid-template-columns: 1fr 1fr`; every `.collection-item` has `grid-column: span 2; grid-row: span 1`, so each image
  takes one full-width row (the project template uses one column with `grid-row: span 2`)
- gap 1em (14.4px @1440, 12.8px @1280, 16px below); place-items baseline, place-content stretch at >=1280px
- <=1279px: one column, items auto-placed
- image widths as on project pages: 80% of the column at >=1440px (922px @1440), 100% with shadow at 1280–1439px, 100% below

### .background-video-2 (cover clip, between the cover image and the gallery)
- relative; width 100%; height 500px; margin-bottom 100px; >=1280px height 100vh (900px @1440, 800px @1280)
- video absolute, fills the box, object-fit cover; autoplay loop muted playsinline; poster shown until it plays

### Rich text additions
- `ul`: margin 0 0 10px; padding-left 40px; list-style disc; `li` inherits the body type (21.6px / 23.76px @1440)
- `a`: inherits colour (white), no underline
- Glyphs missing from Montserrat (e.g. "∩" on /exhibitions/crossroads) fall back to the plain system sans-serif

### .footer inside .content
- sticky; bottom 0; z-index 0 — same rules as elsewhere, but its containing block is now the whole page
- >=992px: it is pinned to the viewport bottom for the entire scroll, behind the hero (z 5) and section (z 10), and visible
  through the exhibition list (static, transparent) at the reveal's start state: translateY 25%, scale .9, opacity .25
- <=991px: relative, a normal block at the end of the page

## States & Behaviors
- Hero, scroll-down ring (target `#content`), list title slide / thumbnail drift and footer reveal: see `../BEHAVIORS.md`
  and the home page `ProjectScroller.spec.md`. Measured values on /exhibitions/nexus match /project/lotus.
- Menu at <=991px: same component and geometry as every other page.

## Per-State Content
One data module per page (`ProjectDetail` shape, `layout: "rows"`): title, Category / Year, cover, optional clip, gallery, rich text.

List order on the detail pages (each page omits itself); it differs from the /exhibitions page order:
cleanse, between-light-traces-and-the-archive, searching-my-work, ecu-postgraduate-show, finding-our-place,
the-artist-is-absent, collective, here-now, crossroads, nexus, re-borrowing-arrows.

## Assets
- `public/sites/www-patriciaamorim-com-6f0fd8c4/exhibitions-<slug>-<hash>/images/NN-name.ext` (+ `/videos/` for re-borrowing-arrows)
- List thumbnails are the /exhibitions page images: `public/sites/.../exhibitions-599cc963/images/`

## Responsive Behavior
- **Desktop (1440px):** hero 900px; gallery images 922px wide, one per row; footer ghost visible behind the list
- **Tablet (768px):** hero static; images full column width (614px); footer is a normal block
- **Mobile (390px):** section side padding 24px; images 342px wide
- **Breakpoints:** 1440, 1280, 991, 767, 479px
