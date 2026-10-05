# AboutHero Specification

## Overview
- **Target file:** `src/components/sites/www-patriciaamorim-com-6f0fd8c4/about-979bddc4/AboutHero.tsx` (inside `shared/ChapterHero.tsx`, with `shared/ExploreLabel.tsx`)
- **Screenshot:** `docs/design-references/www-patriciaamorim-com-6f0fd8c4/about-979bddc4/top-desktop-1440.png`, `top-tablet-768.png`, `top-mobile-390.png`
- **Interaction model:** scroll-driven (ChapterHero) + pointer ring (ExploreLabel)

## DOM Structure
```
._1st-section-wrapper
├─ .about-image > .image-wrapper > .image-ratio + img.image-cover.is-grayscale
└─ .about-title-wrapper (mix-blend-mode: screen)
   ├─ .about-title-row > .about-name-wrapper > .about-name "Hi,I’m" + space + "Patricia"
   │                     .about-title "PHOTOGRAPHY" + "&" (58% size)
   └─ .about-title-row > .about-name-explore (Explore + ring)
                         .about-title "VISUAL" + empty spacer + "ART"
```

## Computed Styles
### .about-image
- position absolute; left 12vw; width 20vw; display flex; margin-bottom 7vh
- >=1280px: margin-bottom -9.4vh; margin-left 55px (box 288×288 at (228, 348) @1440)
- <=991px: width 33.3vw; margin-left 67px. <=767px: margin-bottom -1vh. <=479px: margin-bottom 2vh; margin-left 40px

### .image-wrapper / .image-ratio / img
- wrapper: relative; z 5; overflow hidden; background #222; flex 1
- ratio: padding-top 120% (100% at >=1280px)
- img: absolute cover; border-radius 20px; no filter

### .about-name-wrapper
- absolute; left 0; bottom 0; z 10; transform translate(-25%, -100%)

### .about-name, .about-title, .about-title-row, .about-title-wrapper, letters
- See `../../shared/components/ExploreLabel.spec.md` and `ProjectPage.spec.md` (same classes). @1440: name letters 57.6px ("icia" 72px), title letters 230.4px / 184.32px, "&" 133.6px

## States & Behaviors
- Next-chapter effect and ring: see the shared specs. The portrait is the `.image-wrapper` that rises 50% and tilts 8deg.
- The letters carry load-sequence classes but no load animation runs on this page.

## Text Content (verbatim, source casing; titles render uppercase)
- `Hi,I’m` `Patricia`
- `PHOToGrAphy` `&`
- `Explore`
- `VISUAL` `ArT`

## Assets
- Portrait: `public/sites/www-patriciaamorim-com-6f0fd8c4/about-979bddc4/images/01-img-3815.jpg` (alt "image")

## Responsive Behavior
- **Desktop (1440px):** portrait left of centre under the screen-blended title
- **Tablet (768px):** hero static with 25vh / 15vh vertical padding; title 18em; portrait 33.3vw
- **Mobile (390px):** title 8em; name 1.5em; Explore block shifted (translate 25%, 300%)
