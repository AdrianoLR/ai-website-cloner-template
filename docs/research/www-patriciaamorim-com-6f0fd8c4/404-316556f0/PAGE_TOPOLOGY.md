# Page Topology — https://www.patriciaamorim.com/404

Webflow's utility page, served with status 404 for every unknown path. Document height equals the viewport
(900px @1440x900, 1024px @768x1024, 844px @390x844).

```
body
└─ .utility-page-wrap (100vw x 100vh, centred)      [time-driven ticker]   NotFoundPanel
   └─ .utility-page-content
      ├─ h2._404-heading          "404"
      ├─ ._404-scrolling          ticker
      └─ a.submit-button          "Go back home" → /
```

No preloader, navigation or footer. Document title: `404`. Spec: `components/NotFoundPanel.spec.md`.
No page-specific assets. Route file: `src/app/not-found.tsx`.
