# SiteFooter Specification

## Overview
- **Target file:** `src/components/sites/www-patriciaamorim-com-6f0fd8c4/shared/SiteFooter.tsx` (icons in `shared/icons.tsx`)
- **Screenshot:** `docs/design-references/www-patriciaamorim-com-6f0fd8c4/root-8a5edab2/desktop-footer.png`, `desktop-footer-hover.png`, `tablet-footer.png`, `mobile-footer.png`
- **Interaction model:** static; hover on social links (>=992px)

## DOM Structure
`.footer > .footer-grid > .footer-content > [.footer-social-grid >` 2 x `a.footer-social-link > (.social-button-icon > svg) + .footer-social-link-hover] + .footer-bg-title`

## Computed Styles (1440px)

### .footer
- position: sticky; bottom 0; z-index 0; min-height 100vh; margin-top -2px; display flex; overflow hidden; background rgb(34, 34, 34)

### .footer-grid
- grid, 2 x 1fr; gap 135px 144px (15vh / 10vw); padding 135px 43.2px 43.2px (15vh 3vw 3vw); width 100%; overflow hidden

### .footer-content
- spans the grid, margin 0 auto; flex column centered; row-gap 4em; text-align center

### .footer-social-grid
- flex; align center; gap 28.8px (2vw)

### a.footer-social-link
- width/height 0 plus padding 40px → 80x80; margin-right -40px (>=1280px, otherwise -31px); flex centered

### .social-button-icon
- font-size 21.6px (1.5em); 1em square (>=1280px, otherwise 1.5em); z-index 1; color #fff

### .footer-social-link-hover
- position absolute; 100% x 100%; border-radius 100%
- LinkedIn: `linear-gradient(125deg, #0077b5 25%, #459cc9 66%, #d9ebf4 89%, #90c4df 100%, #fff)`
- Instagram: `repeating-linear-gradient(135deg, #0077b5, #5b51d8 12%, #833ab4 25%, #c13584 39%, #e1306c 51%, #fd1d1d 63%, #f56040 74%, #f77737 85%, #fcaf45 94%, #ffdc80)`

### .footer-bg-title
- position absolute, centered; Humane 600; 460.8px (32em); line-height .6; uppercase; nowrap; color #000; opacity .2

## States & Behaviors

### Hover states
- **Social link:** gradient disc scale 0 → 1.

## Text Content (verbatim)
Let’s Connect

## Assets
- Icons used: `LinkedinIcon`, `InstagramIcon` (inline SVG paths from the target).

## Responsive Behavior
- **<=991px:** footer position relative, z-index 1, margin-top 0; grid 1 column, row-gap 5vw; hover discs hidden; icons become 3em gradient badges (radius 40px, padding 20px; LinkedIn `linear-gradient(132deg, #0077b5, #5ca8d0 52%, #fff)`, Instagram `repeating-linear-gradient(125deg, … 101%)`).
- **<=767px:** title 14em.
- **<=479px:** title 8em; grid padding 50vw 24px 10vh, row-gap 20vw.
