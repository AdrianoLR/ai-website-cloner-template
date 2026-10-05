import type { ProjectSummary } from "@/types/patricia-amorim";

/** Every project, in the order the project pages list them. */
export const projectIndex: ProjectSummary[] = [
  {
    slug: "between-light-traces-and-the-archive",
    title: "Between Light Traces",
    thumbnail: "/sites/www-patriciaamorim-com-6f0fd8c4/shared/images/thumbs/between-light-traces-and-the-archive.jpg",
  },
  {
    slug: "of-thread-and-time",
    title: "Of Thread And Time",
    thumbnail: "/sites/www-patriciaamorim-com-6f0fd8c4/shared/images/thumbs/of-thread-and-time.jpg",
  },
  {
    slug: "hopscotch-series",
    title: "Hopscotch Series",
    thumbnail: "/sites/www-patriciaamorim-com-6f0fd8c4/shared/images/thumbs/hopscotch-series.jpg",
  },
  {
    slug: "a-hundred-names",
    title: "A Hundred Names",
    thumbnail: "/sites/www-patriciaamorim-com-6f0fd8c4/shared/images/thumbs/a-hundred-names.jpg",
  },
  {
    slug: "unravelling-threads",
    title: "Unravelling threads",
    thumbnail: "/sites/www-patriciaamorim-com-6f0fd8c4/shared/images/thumbs/unravelling-threads.jpg",
  },
  {
    slug: "maou-series",
    title: "MAOU Series",
    thumbnail: "/sites/www-patriciaamorim-com-6f0fd8c4/shared/images/thumbs/maou-series.jpg",
  },
  {
    slug: "unveiling-layers",
    title: "Unveiling Layers",
    thumbnail: "/sites/www-patriciaamorim-com-6f0fd8c4/shared/images/thumbs/unveiling-layers.jpg",
  },
  {
    slug: "paradox",
    title: "Paradox",
    thumbnail: "/sites/www-patriciaamorim-com-6f0fd8c4/shared/images/thumbs/paradox.jpg",
  },
  {
    slug: "identity-series",
    title: "Identity Series",
    thumbnail: "/sites/www-patriciaamorim-com-6f0fd8c4/shared/images/thumbs/identity-series.jpg",
  },
  {
    slug: "lotus",
    title: "Lotus",
    thumbnail: "/sites/www-patriciaamorim-com-6f0fd8c4/shared/images/thumbs/lotus.jpg",
  },
  {
    slug: "a-casa",
    title: "A Casa",
    thumbnail: "/sites/www-patriciaamorim-com-6f0fd8c4/shared/images/thumbs/a-casa.jpg",
  },
  {
    slug: "presence-series",
    title: "Presence Series",
    thumbnail: "/sites/www-patriciaamorim-com-6f0fd8c4/shared/images/thumbs/presence-series.jpg",
  },
  {
    slug: "palimpsest-series",
    title: "Palimpsest Series",
    thumbnail: "/sites/www-patriciaamorim-com-6f0fd8c4/shared/images/thumbs/palimpsest-series.jpg",
  },
  {
    slug: "duplo-series",
    title: "Duplo Series",
    thumbnail: "/sites/www-patriciaamorim-com-6f0fd8c4/shared/images/thumbs/duplo-series.jpg",
  },
  {
    slug: "alchemy-of-form",
    title: "Alchemy of Form",
    thumbnail: "/sites/www-patriciaamorim-com-6f0fd8c4/shared/images/thumbs/alchemy-of-form.jpg",
  },
  {
    slug: "mirage-reveries",
    title: "Body Series",
    thumbnail: "/sites/www-patriciaamorim-com-6f0fd8c4/shared/images/thumbs/mirage-reveries.jpg",
  },
];

export function projectBySlug(slug: string): ProjectSummary {
  const project = projectIndex.find((entry) => entry.slug === slug);
  if (!project) throw new Error(`Unknown project: ${slug}`);
  return project;
}
