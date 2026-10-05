import type { ProjectDetail } from "@/types/patricia-amorim";

export const exhibition: ProjectDetail = {
  slug: "nexus",
  title: "Nexus",
  contentAnchor: "content",
  meta: [{ label: "Category", value: "Exhibitions" }, { label: "Year", value: "2023" }],
  sections: [
    {
      layout: "rows",
      cover: {
        src: "/sites/www-patriciaamorim-com-6f0fd8c4/exhibitions-nexus-8a514a53/images/01-6520331421cb916d6d9710ea-ecu-galleries-n.jpeg",
        alt: "",
        width: 1772,
        height: 1749,
      },
      gallery: [
        {
          src: "/sites/www-patriciaamorim-com-6f0fd8c4/exhibitions-nexus-8a514a53/images/02-65203320b1acf2663251d925-img-4238.jpeg",
          alt: "",
          width: 4032,
          height: 3024,
        },
        {
          src: "/sites/www-patriciaamorim-com-6f0fd8c4/exhibitions-nexus-8a514a53/images/03-652032de82114a41b5eb201d-thumbnail.jpeg",
          alt: "",
          width: 1200,
          height: 1365,
        },
        {
          src: "/sites/www-patriciaamorim-com-6f0fd8c4/exhibitions-nexus-8a514a53/images/04-652032d576c2b6b0785edbcd-untitled-057.jpeg",
          alt: "",
          width: 4000,
          height: 2667,
        },
        {
          src: "/sites/www-patriciaamorim-com-6f0fd8c4/exhibitions-nexus-8a514a53/images/05-652033206bb79d13ad952ea0-untitled-058.jpeg",
          alt: "",
          width: 4000,
          height: 2667,
        },
        {
          src: "/sites/www-patriciaamorim-com-6f0fd8c4/exhibitions-nexus-8a514a53/images/06-652033202ae82b97e40f45ba-untitled-062.jpeg",
          alt: "",
          width: 4000,
          height: 2667,
        },
        {
          src: "/sites/www-patriciaamorim-com-6f0fd8c4/exhibitions-nexus-8a514a53/images/07-65203320f7112a38f3ac2ab2-untitled-064.jpeg",
          alt: "",
          width: 4000,
          height: 2667,
        },
      ],
      body: [
        { tag: "h1", children: [{ tag: "strong", children: ["Artist Statement"] }] },
        { tag: "p", children: ["‍"] },
        { tag: "h4", children: ["2023"] },
        { tag: "p", children: ["‍"] },
        {
          tag: "p",
          children: [
            {
              tag: "a",
              href: "/project/palimpsest-series",
              children: [
                "Through a feminist perspective, my self-portraiture photographs explore the influence of my cultural identity, and experiences as a Brazilian artist living in Western Australia.",
              ],
            },
          ],
        },
        { tag: "p", children: ["‍"] },
        {
          tag: "p",
          children: [
            "These photographs use colour, contour, form, and gesture to investigate cultural aspects inherent to both Brazil and Australia as I negotiate how I perceive my identity in a cross-cultural setting. My self-portraits capture how these cultural aspects impact my identity, as enacted through my body. In this way, I approach my body as a palimpsest to explore how I am perceived as a Latin American woman based in the territory I inhabit. A palimpsest is described as an object where text or images can be removed or reinterpreted. My body is re-inscribed by the images and text that I project on me. As I shift between territories, I identify with the space between cultural boundaries; this puts my identity in transit. In this space, my body becomes a territory where I legitimise my complex mix of positionalities. Further, my self-portraiture is influenced by the feminist art of Cuban artist, Ana Mendieta, who embeds her body into the territories of orthand South America as she explores her identity as a woman living on the boundaries of these two continents.",
          ],
        },
        { tag: "p", children: ["‍"] },
        {
          tag: "p",
          children: [
            "My series of self-portraits emerge from my experiences as a Brazilian woman who negotiates social expectations in Western Australia. Specifically, my photographs focus on the intersection between my gender and cultural identity, which has been recontextualised in Western Australia. The recontextualisation of my identity delve into the cultural differences and similarities between the two divergent territories. Using my own body in my practice enforces the complexities of subjectivity which locates my personal narrative.",
          ],
        },
        { tag: "p", children: ["‍"] },
        { tag: "h1", children: [{ tag: "strong", children: ["AI Project"] }] },
        { tag: "p", children: [{ tag: "em", children: ["Patricia AMORIM  + Brad NISBET"] }] },
        { tag: "p", children: ["‍"] },
        {
          tag: "p",
          children: [
            "Using two different sets of prompt keywords (one Brazilian and one Australian) I generated several hundred images for each. Many of these images were macabre, but with the use of ControlNet and the original piece I was able to refine much better imagery. The final piece on the wall however is a midpoint from this process to demonstrate closer to a raw AI output rather than a refined artist-led output.",
            { tag: "br" },
            "‍",
          ],
        },
        { tag: "p", children: ["‍"] },
        { tag: "p", children: ["Thanks to Brad NISBET for the AI generated image"] },
        { tag: "p", children: ["‍"] },
      ],
    },
  ],
};
