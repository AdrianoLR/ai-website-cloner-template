# ContactHero Specification

## Overview
- **Target file:** `src/components/sites/www-patriciaamorim-com-6f0fd8c4/contact-4eb95063/ContactHero.tsx` (+ `content.ts`)
- **Screenshot:** `docs/design-references/www-patriciaamorim-com-6f0fd8c4/contact-4eb95063/top-desktop-1440.png`, `full-tablet-768.jpg`, `full-mobile-390.jpg`
- **Interaction model:** time-driven load-in; hover on text links
- **Page facts:** no fixed navigation, no footer trigger; document height 1798px @1440×900 (hero 900 + footer)

## DOM Structure
```
.hero-contact > .contact-grid
├─ .divider.show-on-load                      (spans both columns)
├─ .show-on-load > a.magnetic-link[href=/]    brand name + caption
├─ div > .contact-heading                     G e t · i n · [t o u c h]
├─ .divider.show-on-load                      (spans both columns)
├─ .show-on-load > .contact-navigation-wrap   Navigation list | Social list
└─ .show-on-load > .table-list                divider, .contact-info-row, divider
```

## Computed Styles
### .hero-contact
- display flex; width 100%; min-height 100vh; padding 5vw 10vw (72px 144px @1440); overflow hidden; perspective 200px. <=767px: padding-bottom 10%

### .contact-grid
- grid; columns `auto 1fr`; rows `auto 1fr`; gap 5vw (row) / 10vw (column); align-content space-between; width 100%
- <=991px: rows `auto auto 1fr`; column gap 5vw. <=767px: 1 column; gap 10vw
- placement: dividers span 2 columns (1 at <=767px); brand cell `place-self: center start`; heading cell `align-self: center` (<=991px spans 2, `align-self: end`); link-list cell moves to row 6 at <=767px

### .divider
- height 1.5px; width 100%; background #ffffff1a; relative; z 100

### .contact-heading
- Humane 600; uppercase; color #ba3737; font-size 23em (17em <=991px, 8em <=767px, 5em <=479px); line-height .6; letter-spacing -.01em (0 <=479px)
- flex wrap; align centre; row-gap .124em; padding-top .14em; relative; z 5
- letters: `.perspective` wrappers, `.margin` after "t" and "n"; at >=1440px each letter is .8em (264.96px) and the last one has line-height .6
- measured @1440: heading box 822×205 at (474, 243); letters 159px tall

### Brand link
- `.caption` label: Inter wght 450, 14.4px / 17.28px, uppercase, swap label on hover
- `.caption-eyebrow`: Shocka Serif 12.6px / 16.38px, letter-spacing .756px, grey

### .contact-navigation-wrap
- grid; 2 × 1fr; gap 1em; justify-items start
- titles `.caption-eyebrow.is-title` (margin-bottom 1em): "Navigation", "Social"
- `.contact-navigation-list`: flex column; align start; row-gap .375em; links are `.caption` inside `.magnetic-link`

### .table-list / .contact-info-row
- table-list: flex column; row-gap 1.25em
- row: grid 5 × 1fr; gap 1em; <=479px 2 columns, row-gap .5em
- cell 1: `.caption-eyebrow` "01" + line break. Cell 2 (span 2): `.caption.is-title` "Email" (Shocka Serif, letter-spacing .1em, margin-bottom 1em) + email link
- `.table-divider`: absolute; width 1.5px; top 0; bottom -1.25em; left -1em; background #ffffff1a; hidden <=479px

## States & Behaviors
### Load-in (after the preloader)
- **Letters:** from `translate3d(5vw,20vh,-15vw) rotateY(90deg)`, opacity 0 → identity, opacity 1; 1500ms move / 1300ms fade, `cubic-bezier(.425,.005,0,1)`; start 500ms + 50ms per letter (10 letters), counted from the window `load` event, which is also when the preloader starts its 500ms fade. The 10th letter ("h") has no fade: opacity 1 throughout (`animate-letter-swing`)
- **`.show-on-load` (4 blocks + 2 dividers):** opacity 0 → 1, 1000ms, delay 700ms
- **Implementation approach:** CSS keyframes (`animate-letter-in`, `animate-show-on-load`) with fixed delays offset by the preloader hold

### Hover states
- **Text links:** both stacked labels slide up one line; magnetic nudge (see home page BEHAVIORS.md)

## Text Content (verbatim; serif hover copy in brackets where it differs)
- Patricia Amorim / Photography & Visual Arts
- Get in touch
- Navigation: Home, Artwork [ARTWORK], EXHIBITIONS [EXHBITIONS], About, Contact
- Social: Instagram, Linkedin [LINKEDIN]
- 01 / Email / patricia.ptasilva@gmail.com [PATRICIA.PTASILVA@GMAI.COM] → `mailto:patricia.ptasilva@gmail.com?subject=Portfolio%20website`

## Assets
None.

## Responsive Behavior
- **Desktop (1440px):** two columns; heading centred vertically beside the brand link
- **Tablet (768px):** heading on its own row spanning both columns (17em); height 1024px
- **Mobile (390px):** single column; link lists move below the email row
- **Breakpoints:** 991, 767, 479px
