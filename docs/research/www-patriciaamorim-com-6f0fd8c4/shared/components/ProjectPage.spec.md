# Project page template Specification

## Overview
- **Target files:** `src/components/sites/www-patriciaamorim-com-6f0fd8c4/shared/project/{ProjectPage,ProjectHero,ProjectSectionView}.tsx`, `shared/RichText.tsx`; per-page data in `<page-key>/content.ts`
- **Route:** `src/app/project/[slug]/page.tsx` (16 static params, `dynamicParams = false`)
- **Screenshot:** `docs/design-references/www-patriciaamorim-com-6f0fd8c4/project-*/full-desktop-1440.jpg`
- **Interaction model:** scroll-driven hero (ChapterHero), pointer ring (ExploreLabel), scroll-driven project list (ProjectScroller)

## DOM Structure
```
.content
├─ ._1st-section > ._1st-section-wrapper > .about-title-wrapper
│     ├─ .about-title-row > .about-name-explore + h1.about-title
│     ├─ .spacer-large
│     └─ .work-grid > 2 × (.caption-eyebrow + .caption)      Category / Year
├─ .section.show-on-load  × 3 CMS variants, hidden by condition:
│     1 "stack": img.image, .background-video-3?, .projects-list (1 col), .background-video-2?, .work-info > .text-medium.w-richtext
│     2/3 "grid": .projects-list-2 (2 cols), .work-info > rich text
├─ .thumb-wrapper.is-work   the other 15 projects, fixed order
└─ .footer-trigger
```
Visible variants: all pages show variant 1 except `unveiling-layers` (variant 3 only) and `mirage-reveries` (variants 1 and 2, same content twice).

## Computed Styles
### .about-title-wrapper
- relative; z 5; flex column wrap centred; mix-blend-mode screen; margin-top 280px (0 at >=1280px and <=991px)

### .about-title-row
- relative; flex; align centre; margin-top 2px; >=1280px 0; >=1440px -79px; <=991px 0; <=767px 71px; <=479px 66px

### h1.about-title
- Humane 600; uppercase; color #ba3737; letter-spacing -.01em; flex wrap; margin-top -303px; padding-top .14em; font-size 30em; line-height .75em
- >=1280px: margin-top 0; padding-top .25em; 24em / .8. >=1440px: padding-top .35em; 20em / .8 (288px / 230.4px)
- <=991px: margin-top -70px; padding-top 0; 18em / .75em. <=767px: margin-top 0; 12em. <=479px: 8em; letter-spacing 0

### .spacer-large / .work-grid
- spacer: height 12vh (10vh <=479px); >=1440px margin-bottom -68px
- work-grid: grid; gap 2em; columns `auto`, auto-columns 1fr, auto-flow column; <=991px 3 × 1fr; <=767px gap 1em, auto-flow row; <=479px 1 column, width 100%
- `.caption-eyebrow`: Shocka Serif 400, .875em (1em <=479px), line-height 1.3, letter-spacing .06em, grey. `.caption`: Inter wght 450, 1em, line-height 1.2, uppercase

### .section
- relative; z 10; background #222; padding 15% 10vw (side padding 24px <=479px); min-width 50%

### img.image (cover)
- block; width 100%; margin-bottom 10% (100px <=991px); >=1280px box-shadow 0 0 1.9em -.7em #000

### .background-video-3 / -2 (`.w-background-video`)
- relative; width 100%; height 500px; margin-bottom 100px; overflow hidden
- >=1280px: height 50vw (video-3) / 100vh (video-2)
- video: absolute, fills the box, object-fit cover, z-index -100, autoplay loop muted playsinline, poster as background

### .projects-list / .projects-list-2
- grid; gap 1em; rows `auto 1fr`; columns 1fr (list) or 1fr 1fr (list-2, 1fr at <=767px); >=1280px place-content stretch, place-items baseline
- `.collection-item`: flex; justify centre; width / min-width 100%; >=1440px display block
- `img.image-2`: block; width 100%; height auto; margin-bottom 100px
  - >=1280px: width auto; margin-inline auto; box-shadow 0 0 1.9em -.7em #000
  - >=1440px: width 100%; max-width 80%; no shadow

### .work-info > .text-medium.w-richtext
- work-info: grid, 1 column, gap 2em
- text: Montserrat 400; 1.5em (1.25em <=767px); line-height 1.1; letter-spacing -.02em; left
- >=1280px: white-space break-spaces — the rich-text clearfix pseudo-elements become one empty line (1.1em) above and below
- h1 38px/44px 700; h2 32px/36px 700; h3 24px/30px 700; h4 18px/24px 700 with margin 10px 0; p margin 0
- blockquote: border-left 5px solid #e2e2e2; padding 10px 20px; margin-bottom 10px; 18px/22px; `em` italic
- empty paragraphs hold a zero-width joiner and act as blank lines

## States & Behaviors
See `ChapterHero.spec.md`, `ExploreLabel.spec.md`, `SitePage.spec.md` and the home page's `ProjectScroller.spec.md`.
The project pages carry the `.load-Nth-item` / `.show-on-load` classes but no load animation is bound to them.

## Per-State Content
One data module per page: `src/components/sites/www-patriciaamorim-com-6f0fd8c4/<page-key>/content.ts` (title, meta, sections with images, clips and rich text, all verbatim from the CMS output).

## Assets
`public/sites/www-patriciaamorim-com-6f0fd8c4/<page-key>/images/NN-name.ext` and `/videos/`; thumbnails for the project list in `public/sites/.../shared/images/thumbs/<slug>.jpg`.

## Responsive Behavior
- **Desktop (1440px):** hero 900px; gallery images 80% of the 1152px column
- **Tablet (768px):** hero static; title 18em; images full column width; cover margin 100px
- **Mobile (390px):** section side padding 24px; title 8em; meta grid single column
- **Breakpoints:** 1440, 1280, 991, 767, 479px
