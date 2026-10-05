# Page Topology — https://www.patriciaamorim.com/about

Document height: 6190px @1440x900, 7246px @768x1024, 6696px @390x844.

```
.layout
├─ .navigation                               fixed (shared)
├─ .content
│  ├─ ._1st-section                          hero, 100vh                  [scroll-driven + pointer]   AboutHero
│  ├─ #content.section.is-hidden-tablet      padding 15% 10vw
│  │   ├─ facts row, lead, biography + "13 years"                         [static]                    AboutIntro
│  │   ├─ .about-gallery-wrapper             3 cards over 2 backdrop rows [scroll-driven]             AboutGallery
│  │   ├─ .text-medium-2                     statement paragraph          [static]                    (inline in the route)
│  │   └─ "Exhibitions & Publications"       18 link rows                 [hover + pointer]           AboutAwards
│  └─ .footer-trigger
└─ .footer
```

Blocks inside `#content` are separated by `.spacer-large` (12vh, with -68px bottom margin at >=1440px).
Measured block tops @1440: facts 1116, lead 1204, biography 1460, gallery 1872, statement 2999, list heading 3134, list 3275–4857.

Statement (`.text-medium-2`): Inter wght 550, 1.5em, line-height 1.5; at >=1280px Montserrat 400, line-height 1.1; 1.25em at <=767px.

Specs: `components/`; behaviors: `../shared/BEHAVIORS.md`. Assets (20): `public/sites/www-patriciaamorim-com-6f0fd8c4/about-979bddc4/images/`.
