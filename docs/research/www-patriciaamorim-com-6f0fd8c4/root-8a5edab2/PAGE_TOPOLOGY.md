# Page Topology — https://www.patriciaamorim.com/

Document height: 17638px @1440x900, 16534px @768x1024, 13654px @390x844.

```
body (#222, Inter var, font-size 1vw >=1280px else 1rem, line-height 1.4, letter-spacing -0.01em)
├─ .layout (bg #000)
│  ├─ .navigation
│  │  ├─ a.navbar-name      fixed top/left 3vw, z 1000, mix-blend difference   [hover-driven]
│  │  └─ .navbar            fixed top/right 3vw, z 1000, mix-blend difference  [hover; click menu <=991px]
│  └─ .content (relative, z 1, bg #222)
│     ├─ .thumb-wrapper > .thumb-grid  15 x project block (100vh each)         [scroll-driven]
│     │    └─ .thumb-item (relative, z 1 → isolated group)
│     │         ├─ .thumb-title-wrapper  fixed full-viewport, mix-blend screen
│     │         └─ .thumb-perspective > image 27vw, 4:5, brightness(.5)
│     └─ .scroll-indicator-wrapper  fixed left, z 50                           [scroll-driven + click]
├─ .preloader  fixed, z 999                                                    [time-driven]
└─ .footer     sticky bottom:0, z 0, min-height 100vh                          [static + hover]
```

## Z-order (top → bottom)
1000/1001 brand + navbar · 999 preloader · 50 scroll indicator · 1 content (titles above thumbnails inside each block) · 0 footer.

## Key layout facts
- Each `.thumb-item` creates a stacking context, so its `mix-blend-mode: screen` title blends only with that block's own thumbnail.
- Desktop (>=1440px) blocks have `margin-bottom: 15%` (216px @1440) → 1116px pitch. Below 1280px the first six list wrappers carry `margin-top: 25px`.
- The footer is the last flow element and sticks to the viewport bottom beneath `.content`; scrolling past the last block uncovers it. At <=991px it is `position: relative`.
- Anchor ids on the list wrappers do not match the titles they contain (CMS quirk, reproduced as-is).
