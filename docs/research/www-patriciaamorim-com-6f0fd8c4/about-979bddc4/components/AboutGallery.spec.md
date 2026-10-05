# AboutGallery Specification

## Overview
- **Target file:** `src/components/sites/www-patriciaamorim-com-6f0fd8c4/about-979bddc4/AboutGallery.tsx`
- **Screenshot:** `docs/design-references/www-patriciaamorim-com-6f0fd8c4/about-979bddc4/full-desktop-1440.jpg` (y 1872–2959)
- **Interaction model:** scroll-driven backdrop lines; otherwise static

## DOM Structure
`.about-gallery-wrapper > 3 × (.about-grid > .about-gallery-item > .about-gallery-image > img + .about-gallery-info) + .about-scrolling-wrapper > .about-scrolling-list > .about-scrolling-left + .about-scrolling-right`

## Computed Styles
### .about-gallery-wrapper
- relative; flex column; centred; <=991px row-gap 3em

### .about-gallery-item
- grid; columns `1.75fr 1fr` (1 column <=479px); gap .5em
- placement in the 6-column about grid: card 1 `1 / 4 / 2 / 7`; card 2 `1 / 1 / 2 / 3` with align-self end; card 3 `1 / 3 / 2 / 6` in a grid with margin-top -4em (0 <=991px)
- <=991px: every card spans 3 columns; <=479px: 1 column
- measured @1440: card 1 at (804, 1872) 492×385; card 2 at (144, 2258) 477×374; card 3 at (636, 2574) 492×385

### .about-gallery-image / img
- relative; width 100%; padding-top 125%; img absolute cover, border-radius 20px

### .about-gallery-info
- flex column; gap .5em; `.caption-eyebrow` venue + `.caption` year; description 1em / 1.4 (Montserrat at >=1280px); inline link is plain white text

### .about-scrolling-wrapper
- absolute; inset 0; margin-inline -10vw (-24px <=479px); flex centred; overflow hidden (sits under the cards, which are z 1)

### .about-scrolling-list
- Humane 600; 32em (460.8px @1440); line-height .75; uppercase; color #000; opacity .2; padding-top .1em
- rows: flex; gap .1em; each row starts with an empty item, then the text item(s)

## States & Behaviors
### Scrolling loop
- **Trigger:** each row crossing the viewport (progress 0 → 1)
- **Left row:** translateX 0 → -25%. **Right row:** translateX -25% → 0
- **Transition:** smoothing 100 (1% of the remaining distance per frame — the rows trail the scroll noticeably)
- **Implementation approach:** rAF follow loop on both rows

## Per-State Content (cards, verbatim)
1. Moores Building / 2023 — "Exhibition of the work (Re)Borrowing Arrows with Thatched Boats. ⏎ Patricia Amorim in the foreground. ⏎ In the background her work [Body Presence Identity → /exhibitions]"; image alt "profile-image"
2. ECU Galleries / 2023 — "Nexus Postgraduates showcases the creative works of candidates undertaking a Masters or PhD."
3. Museum of Sexual Diversity / 2019 — "My artistic composition is built through photographic media using the B&W (black and white) technique with parts of my body and projections of images from sites pertaining to my affective memory."

Backdrop rows: "phohotography and arts" + "Hast du den Mut deinen eigenen Weg zu gehen"; "ARArts aRTS ARTS ARTS ARTS"

## Assets
`public/sites/www-patriciaamorim-com-6f0fd8c4/about-979bddc4/images/02-dsc01636.jpg`, `03-thumbnail.jpg`, `04-patricialotus.jpg`

## Responsive Behavior
- **Desktop (1440px):** three staggered cards over the two lines
- **Tablet (768px):** cards stacked full width with 3em gaps
- **Mobile (390px):** image above its caption
