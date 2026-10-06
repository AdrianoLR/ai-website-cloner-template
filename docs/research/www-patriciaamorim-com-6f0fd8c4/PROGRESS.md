# Clone progress — https://www.patriciaamorim.com

Last updated: 2026-10-06. Branch: `initial-page`.

## Where things stand

Every page on the live site is cloned: the 32 pages in the sitemap plus the 404 page.

| Live URL | Clone route file |
| --- | --- |
| `/` | `src/app/page.tsx` |
| `/about`, `/artwork`, `/exhibitions`, `/contact` | `src/app/<name>/page.tsx` |
| `/project/<slug>` (16 pages) | `src/app/project/[slug]/page.tsx` |
| `/exhibitions/<slug>` (11 pages) | `src/app/exhibitions/[slug]/page.tsx` |
| any unknown path (404) | `src/app/not-found.tsx` |

The full page list with page keys and asset counts is in `OUTPUT_PLAN.md` beside this file.

## Not committed yet

The work from the 2026-10-06 session is in the working tree only. `npm run check` passed after the last code change.

- **404 page (new):** `src/app/not-found.tsx`, `src/components/sites/www-patriciaamorim-com-6f0fd8c4/404-316556f0/NotFoundPanel.tsx`,
  a `loop-left` keyframe in `src/app/globals.css`, plus screenshots and research docs under `404-316556f0/`.
- **Footer social buttons:** `shared/SiteFooter.tsx`. The coloured circles now show at rest and shrink away on hover, as on live
  (300 ms out-sine on hover, 300 ms out-expo on leave).
- **List titles:** `shared/ProjectScroller.tsx`. A title is shown only while its block is at least 5% of the viewport past
  either edge, and it fades in and out over 250 ms, as on live.
- **Docs:** `OUTPUT_PLAN.md`, `root-8a5edab2/BEHAVIORS.md`, and the `SiteFooter` and `ProjectScroller` specs updated to match.

## Checked against the live site (2026-10-06)

- **Page heights:** all 32 pages at 1440, 768 and 390 px are within 9 px of live; most are exact.
- **404 page:** identical geometry at 1440, 1100, 768 and 390 px; status 404; ticker speed matches.
- **List titles:** the home page, /artwork and /exhibitions/nexus match live across 403 scroll positions at 1440 and 390 px,
  apart from two positions where live was caught mid-fade.
- **Footer buttons:** rest, hover and leave states match live at 1440 px; the tablet and mobile badges were already correct.
- **Contact heading:** the last letter stays fully opaque and only swings in, as on live.

## Known differences from live

- **Preloader timing:** the clone holds for a fixed 1.75 s; live waits for the window `load` event (1.3–2.0 s when measured).
  Left as is, because locally `load` fires almost at once and the preloader would only flash.
- **Scroll smoothing:** live eases list titles and thumbnails toward their scroll position over a few frames; the clone tracks
  scroll directly. Both end in the same place, so it shows only during a fast jump.

## Possible next steps

1. Commit the uncommitted work listed above.
2. Decide whether to switch the preloader to the `load` event.
3. Add the scroll smoothing if the fast-jump difference matters.
4. A visual side-by-side pass of the hover states in the navigation, which were last checked in an earlier session.

## Picking the work back up

- **Browser tool:** Playwright is not a project dependency. Install it in a scratch folder (`npm i playwright`); the Chromium
  build is already cached under `%LOCALAPPDATA%\ms-playwright`.
- **Serving the clone:** `npm run build`, then `PORT=3100 node node_modules/next/dist/bin/next start`. Passing `-p` through
  `npx next start` failed in this shell. Do not rebuild while a comparison script is using the server.
- **Measuring heights:** scroll through the page and wait for images before reading the height. A fast bulk run reported
  false gaps of 70–180 px on pages whose images had not finished loading.
- **Image sizes:** `naturalWidth` on a `srcset` image is density-corrected, so a clone image reading 750 px wide against
  1440 px on live is not a smaller file.
- **Live interaction data:** the exact triggers, offsets, durations and easings are in the site's
  `webflow.schunk.*.js` files (search for the class name, such as `thumb-item`).
