# Preloader Specification

## Overview
- **Target file:** `src/components/sites/www-patriciaamorim-com-6f0fd8c4/shared/Preloader.tsx`
- **Screenshot:** `docs/design-references/www-patriciaamorim-com-6f0fd8c4/root-8a5edab2/preloader-desktop.png`
- **Interaction model:** time-driven

## DOM Structure
`.preloader > img.preloader-image`

## Computed Styles

### Container
- position: fixed; inset 0; 100vw x 100vh; z-index 999; background rgb(22, 21, 26); flex column centered

### Image
- width 40px (120x30 animated three-dot SVG)

## States & Behaviors
- **Trigger:** page load.
- **State A:** opacity 1, display flex — held until about 1.75s.
- **State B:** opacity 0 (measured .06 at 2.15s), then display none by 2.55s.
- **Implementation approach:** timers + CSS opacity transition, then unmount.

## Assets
- `public/sites/www-patriciaamorim-com-6f0fd8c4/shared/images/loader-three-dots-white.svg`

## Text Content (verbatim)
None.

## Responsive Behavior
Identical at all widths.
