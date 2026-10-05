# AboutAwards Specification

## Overview
- **Target file:** `src/components/sites/www-patriciaamorim-com-6f0fd8c4/about-979bddc4/AboutAwards.tsx` (rows from `content.ts`)
- **Screenshot:** `docs/design-references/www-patriciaamorim-com-6f0fd8c4/about-979bddc4/full-desktop-1440.jpg` (y 3134–4856)
- **Interaction model:** hover + pointer-driven (>=992px); rows are links

## DOM Structure
```
div
├─ .text-lead "Exhibitions" + .text-lead "& Publications"
├─ .spacer-medium
└─ .about-grid
   ├─ .award-title-bg > .service-item-title > .service-title-height + div > .award-bg-heading "expression"
   └─ .award-link-wrap > 18 × ( a.award-link + .divider )
        a.award-link: .award-bg | div(.award-heading + .award-caption-wrapper > .caption-eyebrow)
                      | div(.award-heading year) | .hide-portrait > .award-icon > svg
                      | .award-image-wrapper > .award-image-hover > .award-image-width > .award-image-aspect-ratio > img
```

## Computed Styles
### .award-title-bg
- spans 2 grid columns; relative; z 20; margin -8vh -1em -12vh -4em; flex centred; overflow hidden
- <=991px: absolute; inset 0; z 0; margin 0
- `.service-item-title`: grid, one cell, rotated -90deg (0 <=991px), nowrap; the first child is a square spacer (padding-top 100%, 0 <=991px) stacked with the text
- `.award-bg-heading`: Humane 500; 20em (288px @1440; 8em <=479px); uppercase; color #000; opacity .2

### .award-link-wrap
- grid-area 1 / 3 / 2 / 7 (636–1296px @1440); <=991px spans 3 columns, relative, z 1

### a.award-link
- grid 6 × 1fr (5 at <=479px); gap 1em; align centre; padding 1.75em 0; relative; z 1; transition padding .7s cubic-bezier(.2,1,.23,1)
- cells: title spans 4; year 1; icon 1 (justify-self end, hidden <=479px)
- row height 97px @1440 (one-line title)

### .award-heading
- Inter wght 450; 1.625em (23.4px); line-height 1; letter-spacing -.01em; <=991px 1.25em; <=479px 1.125em, line-height 1.2, letter-spacing 0

### .award-caption-wrapper
- absolute; transform translateY(.1em); holds a `.caption-eyebrow`

### .award-icon
- 1em square; font-size 1.875em (27px); svg 24×24, stroke 1.5, path `M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25`

### .award-bg
- absolute; left/right 0; vertically centred in the row; width 100%; height 0; background #ffffff1a; inline opacity 0; hidden <=991px

### Preview image
- `.award-image-wrapper`: absolute; z -50; width 50%; transform translateX(-100%); flex column centred; hidden <=991px
- `.award-image-width`: 12vw. `.award-image-aspect-ratio`: padding-top 125%, overflow hidden. `img.award-image`: absolute cover; filter contrast(85%) grayscale(50%)

### .divider
- 1.5px; #ffffff1a; z 100

## States & Behaviors
- **Row hover (>=992px):** z-index 2; padding-inline 0 → 2em; `.award-bg` height 0 → 100% (700ms `cubic-bezier(.2,1,.23,1)`)
- **Backdrop tint:** `.award-bg` stays at opacity 0 until the row is clicked, then fades to 1
- **Preview show:** aspect box scale .6 → 1 (900ms, 100ms delay), opacity 0 → 1 (300ms); image scale 1.4 → 1 (900ms). Hide: 800ms / 250ms
- **Preview move:** `.award-image-width` translateY -25% … 25% with pointer Y inside the row (smoothing 96)
- **Preview rotate:** all `.award-image-hover` translateX -100% … 100%, rotate -6deg … 6deg with pointer X inside `.award-link-wrap` (smoothing 96)

## Per-State Content
18 rows (title, caption, year, link, preview image) in `content.ts`, verbatim. Years 2026 → 2016. Row 8 opens in the same tab; all others in a new tab. Two titles are bold (`<strong>`), two contain a line break.

## Assets
`public/sites/www-patriciaamorim-com-6f0fd8c4/about-979bddc4/images/05…20-*.{jpg,png}` (two rows reuse another row's image)

## Responsive Behavior
- **Desktop (1440px):** vertical "expression" at the left, list in columns 3–6, hover previews
- **Tablet (768px):** "expression" lies horizontally behind the full-width list; no hover effects
- **Mobile (390px):** 5-column rows, arrow icon hidden
