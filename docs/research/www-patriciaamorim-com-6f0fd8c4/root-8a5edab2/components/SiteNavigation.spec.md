# SiteNavigation Specification

## Overview
- **Target file:** `src/components/sites/www-patriciaamorim-com-6f0fd8c4/shared/SiteNavigation.tsx` (+ `shared/MagneticLabel.tsx`)
- **Screenshot:** `docs/design-references/www-patriciaamorim-com-6f0fd8c4/root-8a5edab2/desktop-top.png`, `desktop-nav-hover.png`, `mobile-menu-open.png`, `tablet-menu-open.png`
- **Interaction model:** hover-driven (label swap, magnetic nudge); click-driven menu at <=991px

## DOM Structure
- `a.navbar-name > .magnetic-link > div > [.magnetic-item > .link-overflow > .link-label + .link-label.on-hover] + .navbar-caption`
- `.navbar > nav.navbar-menu > .navbar-menu-wrap > [.navbar-list (5 links) + .navbar-meta-tablet (2 links)]`, then `.menu-button` (2 bars)

## Computed Styles (1440px)

### Brand link
- position: fixed; top/left: 43.2px (3vw); z-index: 1000 (1001 at <=991px); mix-blend-mode: difference
- font: 10.8px (.75em) / 12.96px, Inter var `"opsz" 32, "wght" 420`, uppercase, #fff; rect 151x28

### Caption
- Shockaserif 400, 12.15px (1.125em), letter-spacing .729px (.06em), color rgb(128, 128, 128)

### Navbar
- position: fixed; top/right: 43.2px (3vw); z-index: 1000; mix-blend-mode: difference; rect 71x104
- list: flex column, align-items flex-end, row-gap 8px (.5em), font-size 1rem
- link: 12px (.75em) / 14.4px, `"wght" 450`, uppercase, letter-spacing 0

### Hover label
- `.on-hover`: position absolute, top 100%, Shockaserif 400, letter-spacing .05em

## States & Behaviors
- **Label swap:** both labels translateY 0 → -100% on hover, about 500ms ease-out (-4.9px at 60ms, -10.8px at 210ms, -14.4px final); reverses on leave.
- **Magnetic:** outer box about ±0.05em, inner box about ±0.1em, following pointer position inside the link.
- **Menu (<=991px):** button toggles nav `display: none` ↔ `block`. Bars do not animate.

## Text Content (verbatim)
Patricia Amorim · Photography & Visual Arts · HOME · ARTWork · Exhibitions · About · Contact · Instagram · LinkedIn (labels render uppercase)

## Assets
None beyond fonts.

## Responsive Behavior
- **<=991px:** navbar inset 0 0 auto auto, blend normal; button 72x72, bars 24x2 at top 32px / 40px; menu fixed inset 0, 100vw x 100dvh, bg #222, padding 25vh 3vw 5vh; wrap flex column space-between; list align start, gap .25em, font 2em (links 24px); social row flex, gap 2em (12px text).
- **<=767px:** brand top 32px, left 24px, font 1em; navbar inset 24px 24px auto auto; button 48x48, bars at 21.33px / 26.67px; menu padding-x 24px.
- **<=479px:** brand and navbar font .8125em (links 19.5px, social 9.75px).
