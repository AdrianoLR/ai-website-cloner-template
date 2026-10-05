# ProjectScroller Specification

## Overview
- **Target file:** `src/components/sites/www-patriciaamorim-com-6f0fd8c4/shared/ProjectScroller.tsx`
- **Screenshot:** `docs/design-references/www-patriciaamorim-com-6f0fd8c4/root-8a5edab2/desktop-top.png`, `desktop-item2.png`, `desktop-item2-mid.png`, `full-desktop-1440.png`
- **Interaction model:** scroll-driven (JS scroll listener; no IntersectionObserver, no scroll-snap, no smooth-scroll library)

## DOM Structure
`.thumb-wrapper > .thumb-grid >` 15 x `[list wrapper #anchor > .thumb-item > (.thumb-title-wrapper > a.thumb-title-overflow > h2.thumb-title) + (.thumb-perspective > .thumb-image-width > .thumb-aspect-ratio + img.thumb-image)]`

## Computed Styles (1440px)

### .thumb-wrapper / .thumb-grid
- flex column, align center, width 100%, overflow hidden / grid, 1 column, gap 0, line-height 1.5

### .thumb-item
- position: relative; z-index: 1; flex column centered; 1440x900 (100vh); margin-bottom 216px (15%, >=1440px only)

### .thumb-title-wrapper
- position: fixed; inset 0 0 auto; width/height 100%; z-index 1; mix-blend-mode: screen; flex column centered

### a.thumb-title-overflow
- flex column, align center, overflow hidden, color #fff

### h2.thumb-title
- Humane 700; 345.6px (24em); line-height 276.48px (.8); letter-spacing -3.456px (-.01em); uppercase; centered; white-space pre-wrap; color rgb(186, 55, 55); padding 44.928px 69.12px 0 (.13em .2em 0); margin 0

### .thumb-perspective
- position: relative; flex column centered; 100% x 100%; perspective 35vw

### .thumb-image-width / .thumb-aspect-ratio / .thumb-image
- width 388.8px (27vw), overflow hidden / padding-top 125% / absolute inset 0, object-fit cover, filter brightness(.5)

## States & Behaviors

### Title slide
- **Trigger:** scroll. `p = (vh - itemTop) / (vh + itemHeight)`.
- **State A (p <= 0 or p >= 1):** layer `display: none`.
- **State B (0 < p < 1):** layer `display: flex`; h2 `translateY(100% - 200%·p)`.
- **Transition:** none (position tracks scroll directly).

### Thumbnail drift (>=992px only)
- `.thumb-perspective` translateY `clamp(-15%, -12.75% + 30%·p, 15%)`; no transform at <=991px.

### Hover states
- Title link: cursor pointer only.

## Per-item content
15 projects. Titles, hrefs, anchor ids and image files are listed in `content.ts` beside the component.

## Assets
`public/sites/www-patriciaamorim-com-6f0fd8c4/shared/images/thumbs/<slug>.jpg` — one image per block, no overlays.

## Responsive Behavior
- **1280–1439px:** no block margin.
- **992–1279px:** image 40vw; first six wrappers margin-top 25px (applies below 1280px).
- **<=991px:** title 12em / line-height .7; image 75vw (576x720 at 768).
- **<=767px:** title 8em.
- **<=479px:** title 6em (96px); image 292.5x366.
