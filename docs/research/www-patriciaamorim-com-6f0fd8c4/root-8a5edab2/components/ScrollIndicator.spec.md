# ScrollIndicator Specification

## Overview
- **Target file:** `src/components/sites/www-patriciaamorim-com-6f0fd8c4/root-8a5edab2/ScrollIndicator.tsx`
- **Screenshot:** `docs/design-references/www-patriciaamorim-com-6f0fd8c4/root-8a5edab2/desktop-top.png`, `mobile-top.png`
- **Interaction model:** scroll-driven, plus click (anchor jump) and hover

## DOM Structure
`.scroll-indicator-wrapper > .scroll-indicator-list >` 15 x `a.scroll-indicator-item-wrapper[href="#anchor"] > .scroll-indicator-item`

## Computed Styles (1440px)

### Wrapper
- position: fixed; top 50%; bottom 0; left 14.4px (1vw); width 57.6px (4vw); transform translateY(-50%); z-index 50; flex column centered

### List
- position: relative; flex column; padding 0 8px (36x360)

### Item wrapper
- 20x24; flex column, justify center, align stretch; opacity .2; transition opacity .5s

### Item
- 20x16; border 1px solid #fff; border-radius 2px

## States & Behaviors
- **Current:** the marker whose block spans the viewport midline has opacity 1; none once the midline passes the end of the list.
- **Sink:** every item translateY(100% · scrollY / maxScroll) — 0 at the top, 16px at the bottom.
- **Hover:** opacity .2 → 1 (.5s).
- **Click:** scrolls to the anchor.

## Text Content (verbatim)
None.

## Assets
None.

## Responsive Behavior
- **<=991px:** left 3vw.
- **<=479px:** bottom 35%, top auto, left 18px, width 20px, no transform; list padding 0 4px, centered; wrappers 20px tall; items 8x8, filled #fff, radius 999px.
