# SitePage + FooterReveal Specification

## Overview
- **Target files:** `src/components/sites/www-patriciaamorim-com-6f0fd8c4/shared/SitePage.tsx`, `shared/FooterReveal.tsx` (navigation, footer and preloader specs live with the home page: `../../root-8a5edab2/components/`)
- **Screenshot:** any `full-desktop-1440.jpg` of an inner page
- **Interaction model:** scroll-driven footer reveal (desktop)

## DOM Structure
```
body
├─ .layout (bg #000)
│  ├─ .navigation            (absent on /contact)
│  ├─ .content (relative, z 1, bg #222)
│  │    … page sections …
│  │    └─ .footer-trigger   (0-height; absent on / and /contact)
│  └─ .footer                (sticky bottom 0, z 0; relative at <=991px)
└─ .preloader
```

## Computed Styles
- `.layout`: width 100%; background #000
- `.content`: position relative; z-index 1; background #222
- `.thumb-wrapper.is-work` (list pages and the list under each project): padding-bottom 50vh

## States & Behaviors
### Footer show (>=992px)
- **Trigger:** `.footer-trigger` crossing the viewport
- **State A:** footer `translateY(25%) scale(.9)`, opacity .25
- **State B:** footer `translateY(0) scale(1)`, opacity 1
- **Transition:** linear in progress, smoothing 80
- **Implementation approach:** `FooterReveal` renders the trigger and drives `[data-site-footer]`

### Current navigation link
- `.link-block.w--current`: font-variation-settings "opsz" 32, "wght" 450 (other links inherit 420)

## Responsive Behavior
- **Desktop:** footer revealed from under the content with the animation above
- **Tablet / Mobile (<=991px):** footer is a normal block after the content; no animation
