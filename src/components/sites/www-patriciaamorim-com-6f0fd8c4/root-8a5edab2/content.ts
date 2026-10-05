import type { PortfolioProject } from "@/types/patricia-amorim";

// Order, titles and anchor ids mirror the target page (the ids there do not
// always match the title they wrap).
const imageRoot = "/sites/www-patriciaamorim-com-6f0fd8c4/shared/images/thumbs";

export const projects: PortfolioProject[] = [
  { anchorId: "of-thread-and-time", title: "Between Light Traces", href: "/project/between-light-traces-and-the-archive", image: `${imageRoot}/between-light-traces-and-the-archive.jpg`, alt: "Between Light Traces" },
  { anchorId: "hopscotch-series", title: "Of Thread And Time", href: "/project/of-thread-and-time", image: `${imageRoot}/of-thread-and-time.jpg`, alt: "Of Thread And Time" },
  { anchorId: "a-hundred-names", title: "Hopscotch Series", href: "/project/hopscotch-series", image: `${imageRoot}/hopscotch-series.jpg`, alt: "Hopscotch Series" },
  { anchorId: "unravelling-threads", title: "A Hundred Names", href: "/project/a-hundred-names", image: `${imageRoot}/a-hundred-names.jpg`, alt: "A Hundred Names" },
  { anchorId: "palimpset-series", title: "Presence Series", href: "/project/presence-series", image: `${imageRoot}/presence-series.jpg`, alt: "Presence Series" },
  { anchorId: "duplo-series", title: "Palimpsest Series", href: "/project/palimpsest-series", image: `${imageRoot}/palimpsest-series.jpg`, alt: "" },
  { anchorId: "paradox", title: "Unveiling Layers", href: "/project/unveiling-layers", image: `${imageRoot}/unveiling-layers.jpg`, alt: "" },
  { anchorId: "presence-series", title: "A Casa", href: "/project/a-casa", image: `${imageRoot}/a-casa.jpg`, alt: "" },
  { anchorId: "identity-series", title: "Paradox", href: "/project/paradox", image: `${imageRoot}/paradox.jpg`, alt: "" },
  { anchorId: "mirage-reveries", title: "Alchemy of Form", href: "/project/alchemy-of-form", image: `${imageRoot}/alchemy-of-form.jpg`, alt: "" },
  { anchorId: "alchemy-of-form", title: "Duplo Series", href: "/project/duplo-series", image: `${imageRoot}/duplo-series.jpg`, alt: "" },
  { anchorId: "a-casa", title: "Lotus", href: "/project/lotus", image: `${imageRoot}/lotus.jpg`, alt: "" },
  { anchorId: "unveiling-layers", title: "MAOU Series", href: "/project/maou-series", image: `${imageRoot}/maou-series.jpg`, alt: "" },
  { anchorId: "lotus", title: "Identity Series", href: "/project/identity-series", image: `${imageRoot}/identity-series.jpg`, alt: "" },
  { anchorId: "maou-series", title: "Unravelling threads", href: "/project/unravelling-threads", image: `${imageRoot}/unravelling-threads.jpg`, alt: "" },
];

/** The first six list wrappers carry a 25px top margin below 1280px. */
export const offsetWrapperCount = 6;
