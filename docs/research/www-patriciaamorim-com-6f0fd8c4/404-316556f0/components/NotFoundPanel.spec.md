# NotFoundPanel Specification

## Overview
- **Target file:** `src/components/sites/www-patriciaamorim-com-6f0fd8c4/404-316556f0/NotFoundPanel.tsx`
- **Screenshot:** `docs/design-references/www-patriciaamorim-com-6f0fd8c4/404-316556f0/top-desktop-1440.png`, `top-tablet-768.png`, `top-mobile-390.png`
- **Interaction model:** time-driven (ticker); the button is a plain link

## DOM Structure
`.utility-page-wrap > .utility-page-content > [h2._404-heading + ._404-scrolling > .scrolling-loop > 2 x (.scrolling-loop-item > 2 x div) + a.submit-button]`

## Computed Styles (getComputedStyle, 1440x900)

### body
- background #222; color #fff; Inter var, `"opsz" 32, "wght" 420`; 14.4px (1vw) / 1.4; letter-spacing -0.01em

### .utility-page-wrap
- display flex; justify-content center; align-items center; width 100vw; max-width 100%; height 100vh; max-height 100%; position relative

### .utility-page-content
- display flex; flex-direction column; align-items center; text-align center; 302.4 x 267.5px

### ._404-heading
- Humane 700; 230.4px (16em); line-height 0.7; letter-spacing -0.01em; uppercase; display flex; flex-wrap wrap; align-items center; margin 0; 164.5 x 161.3px

### ._404-scrolling
- width 21vw; margin 1em 0 3em; font-size 12.6px (0.875em); `"opsz" 32, "wght" 450`; letter-spacing 0; uppercase; display flex; flex-direction column; justify-content center; overflow hidden

### .scrolling-loop / .scrolling-loop-item
- loop: display flex; gap 0.25em
- item: display flex; flex 0 0 auto; justify-content flex-start; align-items center; gap 0.25em; overflow hidden; 226.4px wide

### .submit-button
- background #fff; color #222; border-radius 9999px; padding 0.625em 1.25em (9px 18px); 14.4px; no border; 126.3 x 38.2px

## States & Behaviors

### Ticker
- **Trigger:** page load (Webflow IX2 loop).
- **Motion:** each `.scrolling-loop-item` translateX 0 → -100%, linear, 30s, repeating. Sampled at 3.33% per second (-11.67% at 3.9s … -23.55% at 7.5s).
- **Implementation approach:** CSS keyframes (`animate-loop-left`).

### Hover states
- **Button:** no change (colour, background and transform identical after 800ms of hover); cursor pointer.

## Assets
None.

## Text Content (verbatim)
- 404
- Page not found.&nbsp; (four copies)
- Go back home

## Responsive Behavior
- **Desktop (1440px):** as above; body font 1vw.
- **Tablet (768px):** body font 16px; heading 14em (224px); ticker width 32vw, 14px; button padding 10px 20px.
- **Mobile (390px):** heading 8em (128px); ticker width 45vw.
- **Breakpoints:** 991px (heading, ticker width), 767px (ticker width), 479px (heading).
