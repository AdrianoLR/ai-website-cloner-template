# Output Plan — inner pages

Single application (app root `.`), site key `www-patriciaamorim-com-6f0fd8c4`. The home page plan is in `root-8a5edab2/OUTPUT_PLAN.md`.

| Source URL | Page key | Route file | Assets |
| --- | --- | --- | --- |
| https://www.patriciaamorim.com/artwork | `artwork-47456e98` | `src/app/artwork/page.tsx` | 0 |
| https://www.patriciaamorim.com/exhibitions | `exhibitions-599cc963` | `src/app/exhibitions/page.tsx` | 11 |
| https://www.patriciaamorim.com/about | `about-979bddc4` | `src/app/about/page.tsx` | 20 |
| https://www.patriciaamorim.com/contact | `contact-4eb95063` | `src/app/contact/page.tsx` | 0 |
| https://www.patriciaamorim.com/project/between-light-traces-and-the-archive | `project-between-light-traces-and-the-archive-6de45d2e` | `src/app/project/[slug]/page.tsx` | 26 |
| https://www.patriciaamorim.com/project/of-thread-and-time | `project-of-thread-and-time-f6eb80ab` | `src/app/project/[slug]/page.tsx` | 11 |
| https://www.patriciaamorim.com/project/hopscotch-series | `project-hopscotch-series-373062ce` | `src/app/project/[slug]/page.tsx` | 5 |
| https://www.patriciaamorim.com/project/a-hundred-names | `project-a-hundred-names-0282c8fa` | `src/app/project/[slug]/page.tsx` | 5 |
| https://www.patriciaamorim.com/project/unravelling-threads | `project-unravelling-threads-c6ed9380` | `src/app/project/[slug]/page.tsx` | 18 |
| https://www.patriciaamorim.com/project/maou-series | `project-maou-series-e94af0b0` | `src/app/project/[slug]/page.tsx` | 26 |
| https://www.patriciaamorim.com/project/unveiling-layers | `project-unveiling-layers-2b518fb7` | `src/app/project/[slug]/page.tsx` | 9 |
| https://www.patriciaamorim.com/project/paradox | `project-paradox-66004374` | `src/app/project/[slug]/page.tsx` | 5 |
| https://www.patriciaamorim.com/project/identity-series | `project-identity-series-662206d3` | `src/app/project/[slug]/page.tsx` | 16 |
| https://www.patriciaamorim.com/project/lotus | `project-lotus-9542587b` | `src/app/project/[slug]/page.tsx` | 3 |
| https://www.patriciaamorim.com/project/a-casa | `project-a-casa-7ab62b8d` | `src/app/project/[slug]/page.tsx` | 14 |
| https://www.patriciaamorim.com/project/presence-series | `project-presence-series-0e594cbb` | `src/app/project/[slug]/page.tsx` | 3 |
| https://www.patriciaamorim.com/project/palimpsest-series | `project-palimpsest-series-260a5105` | `src/app/project/[slug]/page.tsx` | 5 |
| https://www.patriciaamorim.com/project/duplo-series | `project-duplo-series-7fc85262` | `src/app/project/[slug]/page.tsx` | 11 |
| https://www.patriciaamorim.com/project/alchemy-of-form | `project-alchemy-of-form-d969cd1e` | `src/app/project/[slug]/page.tsx` | 17 |
| https://www.patriciaamorim.com/project/mirage-reveries | `project-mirage-reveries-d7da5d79` | `src/app/project/[slug]/page.tsx` | 13 |
| https://www.patriciaamorim.com/exhibitions/cleanse | `exhibitions-cleanse-63f2ef2e` | `src/app/exhibitions/[slug]/page.tsx` | 15 |
| https://www.patriciaamorim.com/exhibitions/between-light-traces-and-the-archive | `exhibitions-between-light-traces-and-the-archive-36dccd9b` | `src/app/exhibitions/[slug]/page.tsx` | 8 |
| https://www.patriciaamorim.com/exhibitions/searching-my-work | `exhibitions-searching-my-work-0a5f4ffb` | `src/app/exhibitions/[slug]/page.tsx` | 13 |
| https://www.patriciaamorim.com/exhibitions/ecu-postgraduate-show | `exhibitions-ecu-postgraduate-show-76472b94` | `src/app/exhibitions/[slug]/page.tsx` | 13 |
| https://www.patriciaamorim.com/exhibitions/finding-our-place | `exhibitions-finding-our-place-336d22cd` | `src/app/exhibitions/[slug]/page.tsx` | 10 |
| https://www.patriciaamorim.com/exhibitions/nexus | `exhibitions-nexus-8a514a53` | `src/app/exhibitions/[slug]/page.tsx` | 7 |
| https://www.patriciaamorim.com/exhibitions/crossroads | `exhibitions-crossroads-a7fbfc09` | `src/app/exhibitions/[slug]/page.tsx` | 6 |
| https://www.patriciaamorim.com/exhibitions/re-borrowing-arrows | `exhibitions-re-borrowing-arrows-2a60cd5b` | `src/app/exhibitions/[slug]/page.tsx` | 15 |
| https://www.patriciaamorim.com/exhibitions/collective | `exhibitions-collective-39e1a92e` | `src/app/exhibitions/[slug]/page.tsx` | 6 |
| https://www.patriciaamorim.com/exhibitions/here-now | `exhibitions-here-now-78ec3cf0` | `src/app/exhibitions/[slug]/page.tsx` | 4 |
| https://www.patriciaamorim.com/exhibitions/the-artist-is-absent | `exhibitions-the-artist-is-absent-1580b11d` | `src/app/exhibitions/[slug]/page.tsx` | 7 |
| https://www.patriciaamorim.com/404 (any unknown path) | `404-316556f0` | `src/app/not-found.tsx` | 0 |

Per page: research in `docs/research/www-patriciaamorim-com-6f0fd8c4/<page-key>/`, screenshots in `docs/design-references/www-patriciaamorim-com-6f0fd8c4/<page-key>/`
(`full-*.jpg` and `top-*.png` at desktop-1440, tablet-768, mobile-390), components and content in `src/components/sites/www-patriciaamorim-com-6f0fd8c4/<page-key>/`,
assets in `public/sites/www-patriciaamorim-com-6f0fd8c4/<page-key>/`, downloader `scripts/download-assets-www-patriciaamorim-com-6f0fd8c4-<page-key>.mjs`.

## Decisions
- The 16 project pages are one CMS template, so they share one route file with 16 static params
  (`dynamicParams = false`) and one set of components under `shared/project/`; each page keeps its own
  content module, assets, screenshots and research folder.
- `/project/mirage-reveries` ("Body Series") is linked only from /artwork and the project pages, not from the home page; it is included.
- /artwork has no page-specific assets: it lists the shared project thumbnails.
- The 11 exhibition detail pages are one CMS template too: one route file with 11 static params (`dynamicParams = false`),
  components under `shared/exhibition/` that reuse the project hero and section view, and the /exhibitions page's
  thumbnails for the list of other exhibitions. Template notes: `shared/components/ExhibitionPage.spec.md`.

## Shared foundation changes
- Moved to `src/components/sites/www-patriciaamorim-com-6f0fd8c4/shared/`: SiteNavigation, SiteFooter, Preloader, MagneticLabel, ProjectScroller (were under `root-8a5edab2/`); nav/social data now in `shared/site.ts`.
- Project thumbnails moved from `public/sites/www-patriciaamorim-com-6f0fd8c4/root-8a5edab2/images/` to `shared/images/thumbs/<slug>.jpg` (16 files, downloader `-shared.mjs`).
- `src/app/layout.tsx`: added Humane Medium (500) and Montserrat (Google). `src/app/globals.css`: `--color-divider`, `--font-body-alt`, `font-wght-550`, load-in keyframes.
- `SiteNavigation` now marks the current page's link (wght 450); other links inherit 420.
- Exhibition pages: `SitePage` gained `footerInside`, `ProjectScroller` gained `titleTag`, `ProjectSection.layout` gained `"rows"`,
  `RichBlock` gained bullet lists. `--font-body-alt` now names Montserrat directly so missing glyphs use the unadjusted system fallback.
- The 404 page is Webflow's utility page: no preloader, navigation or footer. It is the app's `not-found.tsx`, so it is served
  with status 404 for every unknown path, as on the source. `globals.css` gained the `loop-left` keyframes for its ticker.
