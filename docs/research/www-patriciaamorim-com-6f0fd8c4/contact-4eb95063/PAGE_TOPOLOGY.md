# Page Topology — https://www.patriciaamorim.com/contact

Document height: 1798px @1440x900, 2048px @768x1024, 1688px @390x844.

```
.layout
├─ .content
│  └─ .hero-contact (min-height 100vh)      [time-driven load-in, hover]   ContactHero
└─ .footer                                   sticky under the content (shared)
```

No fixed navigation and no footer trigger on this page: the page carries its own link lists, and the footer is
uncovered without the reveal animation. Spec: `components/ContactHero.spec.md`. No page-specific assets.
