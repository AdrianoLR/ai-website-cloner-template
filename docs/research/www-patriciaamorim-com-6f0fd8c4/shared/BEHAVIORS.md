# Behaviors — inner pages of https://www.patriciaamorim.com

Source: the site's Webflow IX2 interaction data (`webflow.schunk.*.js`) cross-checked against
computed styles in Chromium at 1440 / 768 / 390. "Smoothing N" is the IX2 setting: each frame a
value moves `max(1 - N/100, 0.01)` of the remaining distance to its target.

## Time-driven (page load)
| Effect | Pages | Detail |
| --- | --- | --- |
| Preloader hide | all | `.preloader` shown, `.layout` opacity 0 → both cross-fade over 500ms, then `display:none` |
| Rotated characters | /contact only (the load classes exist on /about and /project/* but nothing triggers them there) | each `.load-Nth-item` starts `translate3d(5vw,20vh,-15vw) rotateY(90deg)`, opacity 0; after 500ms + 50ms·(N-1) it moves to identity over 1500ms and fades in over 1300ms, both `cubic-bezier(.425,.005,0,1)` |
| Show on load | /contact | `.show-on-load` opacity 0 → 1, delay 700ms, 1000ms, same easing |

## Scroll-driven
| Effect | Trigger | From → to | Smoothing | Breakpoints |
| --- | --- | --- | --- | --- |
| Next chapter / hero | `.next-chapter-trigger` (0-height, 100vh below the hero top) crossing the viewport | `._1st-section-wrapper` translateY 0 → -20vh, scale 1 → .95, opacity 1 → .25; `._1st-section` background #222 → #000; `.image-wrapper` translateY 0 → -50%, rotate 0 → 8deg | 76 | >=992px |
| Footer show | `.footer-trigger` (0-height, end of `.content`) crossing the viewport | `.footer` translateY 25% → 0, scale .9 → 1, opacity .25 → 1 | 80 | >=992px |
| Scrolling loop left / right | `.about-scrolling-left` / `-right` crossing the viewport | translateX 0 → -25% / -25% → 0 | 100 | all |
| Title slide + thumbnail drift | `.thumb-item` / `.thumb-perspective` | see the home page BEHAVIORS.md | 20 / 50 | all / >=992px |

Progress is 0 when the trigger's top meets the viewport bottom and 1 when its bottom leaves the top.
The home page has no `.footer-trigger`; /contact has neither it nor the fixed navigation.

## Pointer-driven
| Effect | Target | Detail |
| --- | --- | --- |
| Scroll-down ring | `.scroll-down-link` (about + project heroes) | follows the pointer inside itself: translate ±3vw on both axes, rest at 0, smoothing 96. Hover: background `#fff3`, border-width 0, 300ms. Click: smooth scroll to `#content` (/about) or `#content-1` (/project/*) |
| Award row in/out | `.award-link` | padding-inline 0 ↔ 2em (700ms `cubic-bezier(.2,1,.23,1)`, >=992px); `.award-bg` height 0 ↔ 100% with the same timing |
| Award backdrop tint | `.award-bg` | inline `opacity:0`; a click on the row fades it to 1 (Webflow "fade in" preset), so the tint is only visible on rows that were clicked |
| Award image show/hide | `.award-image-aspect-ratio`, `.award-image` | scale .6 ↔ 1 and 1.4 ↔ 1; opacity 0 ↔ 1. In: 100ms delay, 900ms (opacity 300ms). Out: 800ms (opacity 250ms) |
| Award image move | `.award-image-width` of the hovered row | translateY -25% … 25% with the pointer's Y inside the row, smoothing 96 |
| Award image rotate | every `.award-image-hover` | translateX -100% … 100% and rotate -6deg … 6deg with the pointer's X inside `.award-link-wrap`, smoothing 96 |
| Text links | `.magnetic-link` | label swap + magnetic nudge, as on the home page |

## Responsive summary
| | >=1440 | 1280–1439 | 992–1279 | <=991 | <=767 | <=479 |
| --- | --- | --- | --- | --- | --- | --- |
| hero | sticky 100vh | same | same | static, auto height, padding 25vh 5vw 15vh | | |
| hero title | 20em / .8 | 24em / .8 | 30em / .75em | 18em | 12em | 8em |
| section padding | 15% 10vw | | | | | 15% 24px |
| about grid | 2fr + 5×1fr | | | 3×1fr | | 1fr |
| project gallery image | 80% wide | natural width, centred | 100% | 100% | | |
| contact grid | auto 1fr, gap 5vw 10vw | | | rows auto auto 1fr | 1 column, gap 10vw | |
