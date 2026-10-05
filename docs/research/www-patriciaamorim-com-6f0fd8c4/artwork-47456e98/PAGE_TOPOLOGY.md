# Page Topology — https://www.patriciaamorim.com/artwork

Document height: 19384px @1440x900, 17920px @768x1024, 14770px @390x844.

```
.layout
├─ .navigation                         fixed brand + nav (shared)
├─ .content
│  ├─ .thumb-wrapper.is-work           padding-bottom 50vh
│  │   └─ .thumb-grid > 16 × .thumb-item (100vh each)     [scroll-driven]
│  └─ .footer-trigger                  drives the footer reveal [scroll-driven, >=992px]
└─ .footer                             sticky under the content (shared)
```

- Same block as the home page's project list (`../root-8a5edab2/components/ProjectScroller.spec.md`): fixed screen-blended
  title sliding +100% → -100%, thumbnail 27vw / 40vw / 75vw at 4:5 with brightness(.5), 15% bottom margin per block at >=1440px.
- Differences from the home page: no scroll indicator, no 25px wrapper offsets, no anchor ids, 50vh bottom padding, footer reveal.
- 16 projects in the page's own order (`artwork-47456e98/content.ts`); every thumbnail has its title as alt text; links go to `/project/<slug>`.
- Assets: shared thumbnails only.
- Behaviors: `../shared/BEHAVIORS.md`; shell: `../shared/components/SitePage.spec.md`.
