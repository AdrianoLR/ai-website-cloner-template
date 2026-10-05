# Behaviors — https://www.patriciaamorim.com/

All values measured with getComputedStyle / getBoundingClientRect in Chromium.

## Scroll-driven
**Project title slide** — `p = (vh - itemTop) / (vh + itemHeight)` for each block.
Title layer is `display:none` unless `0 < p < 1`; the `<h2>` is `translateY(100% - 200%·p)`
(+100% entering from below, 0 when centred, -100% leaving). Verified: block 2 at scrollY 400 → 79.7%, at 1000 → 12.9%.

**Thumbnail drift (>=992px only)** — `.thumb-perspective` translateY ≈ `clamp(-15%, -12.2% + 31%·p, 15%)`
(measured -10.7% @p=.047, -3.6% @.269, 3.3% @.5, 9.6% @.713, 15% @.936). No drift at 768px or 390px.

**Scroll indicator** — the marker whose block spans the viewport midline gets opacity 1, others 0.2
(`transition: opacity .5s`); none is current once the midline passes the end of the list.
Every marker is `translateY(100% · scrollY/maxScroll)` (0 → 16px over the page).

**Footer reveal** — sticky footer under the content layer (desktop only).

## Hover
**Text links (brand + nav)** — two stacked labels in an `overflow:hidden` box; both slide `translateY(-100%)`
on hover (≈500ms ease-out: -4.9px @60ms, -10.8px @210ms, -13.3px @360ms, -14.4px final), swapping
Inter for Shocka Serif (letter-spacing .05em). Reverses on leave.
**Magnetic nudge** — link box drifts ≈±0.05em toward the pointer, inner box ≈±0.1em.
**Scroll indicator marker** — opacity → 1.
**Footer social (>=992px)** — gradient disc behind the icon scales 0 → 1.
**Project titles** — pointer cursor only; no visual change.

## Click
- Indicator markers jump to their block (`#anchor`).
- Menu button (<=991px) toggles a full-screen menu (`display:none` ↔ `block`, bg #222, padding 25vh 3vw 5vh;
  links 24px @768 / 19.5px @390; Instagram/LinkedIn row at the bottom). The two bars do not animate.

## Time-driven
Preloader (#16151a, three-dot SVG 40px wide) stays ~1.75s after load, fades to 0 in ~0.4s, then `display:none`.

## Responsive
| | >=1440 | 1280–1439 | 992–1279 | <=991 | <=767 | <=479 |
| --- | --- | --- | --- | --- | --- | --- |
| body font-size | 1vw | 1vw | 1rem | 1rem | 1rem | 1rem |
| title size / line-height | 24em / .8 | 24em / .8 | 24em / .8 | 12em / .7 | 8em / .7 | 6em / .7 |
| thumbnail width | 27vw | 27vw | 40vw | 75vw | 75vw | 75vw |
| block margin-bottom | 15% | 0 | 0 | 0 | 0 | 0 |
| nav | list | list | list | menu button 72px | button 48px | font .8125em |
| indicator | left 1vw | | | left 3vw | | dots 8px, left 18px, bottom 35% |
| footer | sticky | | | relative, gradient badges | title 14em | title 8em |
