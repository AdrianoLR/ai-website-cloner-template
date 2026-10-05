# AboutIntro Specification

## Overview
- **Target file:** `src/components/sites/www-patriciaamorim-com-6f0fd8c4/about-979bddc4/AboutIntro.tsx` (grid + lead presets in `styles.ts`)
- **Screenshot:** `docs/design-references/www-patriciaamorim-com-6f0fd8c4/about-979bddc4/full-desktop-1440.jpg` (y 900–1900)
- **Interaction model:** static

## DOM Structure
`#content.section.is-hidden-tablet >` block A `(.about-grid facts, .spacer-medium, .about-grid > .text-lead)`, `.spacer-large`, block B `(.about-grid > .relative > .text-medium + .about-experience-title, .spacer-large)`

## Computed Styles
### .section
- relative; z 10; background #222; padding 15% 10vw (216px 144px @1440; side 24px <=479px); overflow hidden <=991px

### .about-grid
- grid; columns `2fr 1fr 1fr 1fr 1fr 1fr`; gap 1em; width 100%; relative; z 1; <=991px 3 × 1fr; <=479px 1 column

### Facts row
- three cells: span 1, span 1, span 2; `.caption-eyebrow` label over `.caption` value

### .text-lead
- cell spans 5 columns (3 <=991px, 1 <=479px)
- font-size 4em; line-height 1; letter-spacing -.025em; Inter wght 450
- >=1280px: Montserrat 400. >=1440px: 3em (43.2px). <=991px: 2.5em. <=767px: 1.5em, letter-spacing -.01em

### Biography cell
- grid-area 1 / 4 / 2 / 6 (<=991px span 2; <=479px span 1); relative; flex column; align start
- `.text-medium`: Montserrat 400; 1.5em (21.6px @1440; 1.25em <=767px); line-height 1.1; letter-spacing -.02em

### .about-experience-title
- absolute; left 0; bottom 0; transform translate(-50%, 75%); Humane 600; 32em; line-height .6; uppercase; nowrap; color #000; opacity .2
- <=991px: left 50%; 20em. <=767px: 12em. <=479px: 8em

### Spacers
- `.spacer-medium`: 6vh (5vh <=479px). `.spacer-large`: 12vh (10vh <=479px), margin-bottom -68px at >=1440px

## States & Behaviors
N/A — static block.

## Text Content (verbatim)
- Location / PERTH - Wa · Born / August 12, 1983 · Focus / photography visual arts
- Patricia Amorim, a Brazilian contemporary artist, holds a Fine Arts degree from Centro Universitario de Belas Artes de São Paulo and a Master of Fine Arts from the University of Northampton, UK.
- Her work has been exhibited globally, including the UK, China, Brazil, and Australia. ⏎⏎ She's a PhD candidate at Edith Cowan University, holding the ECU Higher Degree Research Program Scholarship. ⏎⏎ Her contributions extend to teaching photography work shops, art education, and published journal articles.
- 13 years

## Assets
None.

## Responsive Behavior
- **Desktop (1440px):** biography in columns 4–5; "13 years" bleeds left behind it
- **Tablet (768px):** 3-column grid; lead 2.5em; backdrop centred under the biography
- **Mobile (390px):** single column
