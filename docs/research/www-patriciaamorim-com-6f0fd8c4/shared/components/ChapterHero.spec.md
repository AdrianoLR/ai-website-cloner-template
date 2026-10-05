# ChapterHero Specification

## Overview
- **Target file:** `src/components/sites/www-patriciaamorim-com-6f0fd8c4/shared/ChapterHero.tsx`
- **Screenshot:** `docs/design-references/www-patriciaamorim-com-6f0fd8c4/about-979bddc4/top-desktop-1440.png`, `.../project-lotus-9542587b/top-desktop-1440.png`
- **Interaction model:** scroll-driven (desktop only)
- **Used by:** /about, every /project/*

## DOM Structure
`._1st-section > ._1st-section-wrapper (children) + .next-chapter-trigger`

## Computed Styles
### ._1st-section
- position relative; z-index 5; background #222; perspective 100vw

### ._1st-section-wrapper
- position sticky; top 0; height 100vh; margin-bottom -100vh; width 100%; padding 5vw
- display flex; column; centred both ways; overflow hidden; perspective 100vw
- <=991px: position static; height auto; margin-bottom 0; padding-top 25vh; padding-bottom 15vh

### .next-chapter-trigger
- margin-top 100vh; background #222; height 0. <=991px: display none

## States & Behaviors
### Next chapter (>=992px)
- **Trigger:** `.next-chapter-trigger` crossing the viewport (progress 0 at scrollY 0, 1 at scrollY = 100vh)
- **State A:** wrapper `translateY(0) scale(1)`, opacity 1; section background rgb(34,34,34); `.image-wrapper` `translateY(0) rotate(0)`
- **State B:** wrapper `translateY(-20vh) scale(.95)`, opacity .25; section background rgb(0,0,0); `.image-wrapper` `translateY(-50%) rotate(8deg)`
- **Transition:** linear in progress, smoothing 76 (24% of the remaining distance per frame)
- **Implementation approach:** requestAnimationFrame follow loop; the image is found by `[data-chapter-image]`

## Assets / Text Content
N/A (wrapper only).

## Responsive Behavior
- **Desktop (1440px):** 900px tall hero, effect active
- **Tablet (768px) / Mobile (390px):** static block, natural height, no scroll effect
- **Breakpoint:** 991px
