import type { ProjectDetail } from "@/types/patricia-amorim";

export const project: ProjectDetail = {
  slug: "presence-series",
  title: "Presence Series",
  contentAnchor: "content-1",
  meta: [{ label: "Category", value: "Photography & Visual Arts" }, { label: "Year", value: "2021" }],
  sections: [
    {
      layout: "stack",
      gallery: [
        {
          src: "/sites/www-patriciaamorim-com-6f0fd8c4/project-presence-series-0e594cbb/images/02-dsc1587.jpg",
          alt: "",
          width: 1200,
          height: 1500,
        },
        {
          src: "/sites/www-patriciaamorim-com-6f0fd8c4/project-presence-series-0e594cbb/images/03-dsc-8172.jpg",
          alt: "",
          width: 4207,
          height: 2142,
        },
      ],
      body: [
        { tag: "h1", children: ["Presence Series"] },
        { tag: "p", children: ["‍"] },
        { tag: "h4", children: ["2021 - Sao Paulo, Brazil", { tag: "br" }] },
        { tag: "h4", children: ["Digital image (300 dpi)"] },
        { tag: "p", children: ["‍"] },
        {
          tag: "p",
          children: [
            "The \"Presence Series\" builds upon the exploration initiated by the \"Body Series\" and delves deeper into the intricate interplay between the physical body and identity, unfolding amidst the COVID-19 pandemic.",
            { tag: "br" },
            "By projecting images of places laden with affective memories onto unclothed, gendered bodies, the series aims to evoke a profound sense of connection. This continued visual narrative prompts viewers to reflect on their personal experiences, underscoring the substantial impact of physical presence on one's evolving sense of self and identity.",
          ],
        },
      ],
      cover: {
        src: "/sites/www-patriciaamorim-com-6f0fd8c4/project-presence-series-0e594cbb/images/01-dsc4365-1.jpg",
        alt: "Presence Series",
        width: 2048,
        height: 1365,
      },
    },
  ],
};
