# ExploreLabel + Letters Specification

## Overview
- **Target files:** `src/components/sites/www-patriciaamorim-com-6f0fd8c4/shared/ExploreLabel.tsx`, `shared/Letters.tsx`, type presets in `shared/text.ts`
- **Screenshot:** `docs/design-references/www-patriciaamorim-com-6f0fd8c4/about-979bddc4/top-desktop-1440.png`
- **Interaction model:** pointer-driven ring + click to scroll

## DOM Structure
`.about-name-explore > .about-name > 7 × (.perspective > .load-Nth-item "E x p l o r e", N = 4…10) + .space-divider + .perspective > .load-11th-item > .scroll-down-wrapper > a.scroll-down-link > .scroll-down-icon > svg`

## Computed Styles
### .about-name-explore
- position absolute; right 10%; z-index 10; transform translate(25%, 100%); margin-top -22vh; margin-right 124px
- >=1280px: margin-top 21vh. >=1440px: margin-right 0
- <=991px: margin-top 0; margin-right 100px. <=479px: margin-top -23vh; margin-right 35px; right 20%; transform translate(25%, 300%)

### .about-name (also the "Hi, I’m Patricia" line)
- Shocka Serif 400; font-size 5em (72px @1440); line-height 1; letter-spacing 0; flex centred
- margin-top -95px; margin-left 123px; padding-bottom 74px
- >=1280px: margin-top -57px; margin-left 0; padding 0
- <=991px: margin-left 111px; padding-bottom 125px; font-size 3em. <=767px: padding-bottom 29px. <=479px: margin-top 1px; font-size 1.5em

### .perspective / .load-Nth-item
- `.perspective`: relative; z-index 10; perspective 100vw. `.perspective.margin`: margin-right .1em
- >=1440px: slots 1–10, 12, 13, 17 are font-size .8em (slot 10 also line-height .6); slots 11, 14, 15, 16 stay 1em and are position relative

### .space-divider
- width 6vw; >=1440px 2vw; <=479px 12vw

### .scroll-down-wrapper
- position absolute; right 5%; bottom 5%; 20vw square; padding 5vw; overflow hidden; transform translate(50%, 50%). <=479px: font-size 3em

### a.scroll-down-link
- 100% square; border .5px solid #ffffff40; border-radius 999px; flex centred; transition border-color .3s, background-color .3s
- <=991px: font-size .125em

### .scroll-down-icon
- 1em square; font-size .5em (36px @1440); <=991px 4em; <=479px 2em
- svg: 24×24 viewBox, stroke currentColor, stroke-width 1, round caps: `line 12,5 → 12,19` + `polyline 19 12 12 19 5 12`

## States & Behaviors
- **Hover:** background `#fff3`, border-width 0 (300ms)
- **Pointer follow:** while the pointer is over the link it translates up to ±3vw on each axis toward the pointer; returns to 0 on leave; smoothing 96
- **Click:** smooth scroll to the section whose id is the link's hash (`content` on /about, `content-1` on /project/*)

## Text Content (verbatim)
`Explore`

## Responsive Behavior
- **Desktop (1440px):** 57.6px letters, 144px ring to the right of the word
- **Tablet (768px):** 48px letters, ring 76.8px
- **Mobile (390px):** 24px letters
