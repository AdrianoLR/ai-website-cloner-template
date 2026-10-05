import type { NavLink, PortfolioProject } from "@/types/patricia-amorim";

export const siteName = "Patricia Amorim";
export const siteCaption = "Photography & Visual Arts";

export const navLinks: NavLink[] = [
  { label: "HOME", href: "/" },
  { label: "ARTWork", href: "/artwork" },
  { label: "Exhibitions", href: "/exhibitions" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks: NavLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/ptamorimsilva/", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ptamorim/", external: true },
];

// Order, titles and anchor ids mirror the target page (the ids there do not
// always match the title they wrap).
const imageRoot = "/sites/www-patriciaamorim-com-6f0fd8c4/root-8a5edab2/images";

export const projects: PortfolioProject[] = [
  { anchorId: "of-thread-and-time", title: "Between Light Traces", href: "/project/between-light-traces-and-the-archive", image: `${imageRoot}/01-between-light-traces.jpg`, alt: "Between Light Traces" },
  { anchorId: "hopscotch-series", title: "Of Thread And Time", href: "/project/of-thread-and-time", image: `${imageRoot}/02-of-thread-and-time.jpg`, alt: "Of Thread And Time" },
  { anchorId: "a-hundred-names", title: "Hopscotch Series", href: "/project/hopscotch-series", image: `${imageRoot}/03-hopscotch-series.jpg`, alt: "Hopscotch Series" },
  { anchorId: "unravelling-threads", title: "A Hundred Names", href: "/project/a-hundred-names", image: `${imageRoot}/04-a-hundred-names.jpg`, alt: "A Hundred Names" },
  { anchorId: "palimpset-series", title: "Presence Series", href: "/project/presence-series", image: `${imageRoot}/05-presence-series.jpg`, alt: "Presence Series" },
  { anchorId: "duplo-series", title: "Palimpsest Series", href: "/project/palimpsest-series", image: `${imageRoot}/06-palimpsest-series.jpg`, alt: "" },
  { anchorId: "paradox", title: "Unveiling Layers", href: "/project/unveiling-layers", image: `${imageRoot}/07-unveiling-layers.jpg`, alt: "" },
  { anchorId: "presence-series", title: "A Casa", href: "/project/a-casa", image: `${imageRoot}/08-a-casa.jpg`, alt: "" },
  { anchorId: "identity-series", title: "Paradox", href: "/project/paradox", image: `${imageRoot}/09-paradox.jpg`, alt: "" },
  { anchorId: "mirage-reveries", title: "Alchemy of Form", href: "/project/alchemy-of-form", image: `${imageRoot}/10-alchemy-of-form.jpg`, alt: "" },
  { anchorId: "alchemy-of-form", title: "Duplo Series", href: "/project/duplo-series", image: `${imageRoot}/11-duplo-series.jpg`, alt: "" },
  { anchorId: "a-casa", title: "Lotus", href: "/project/lotus", image: `${imageRoot}/12-lotus.jpg`, alt: "" },
  { anchorId: "unveiling-layers", title: "MAOU Series", href: "/project/maou-series", image: `${imageRoot}/13-maou-series.jpg`, alt: "" },
  { anchorId: "lotus", title: "Identity Series", href: "/project/identity-series", image: `${imageRoot}/14-identity-series.jpg`, alt: "" },
  { anchorId: "maou-series", title: "Unravelling threads", href: "/project/unravelling-threads", image: `${imageRoot}/15-unravelling-threads.jpg`, alt: "" },
];

/** The first six list wrappers carry a 25px top margin below 1280px. */
export const offsetWrapperCount = 6;
