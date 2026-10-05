import type { ProjectDetail } from "@/types/patricia-amorim";

export const exhibition: ProjectDetail = {
  slug: "collective",
  title: "Collective",
  contentAnchor: "content",
  meta: [{ label: "Category", value: "Exhibitions" }, { label: "Year", value: "2022" }],
  sections: [
    {
      layout: "rows",
      cover: {
        src: "/sites/www-patriciaamorim-com-6f0fd8c4/exhibitions-collective-39e1a92e/images/01-collective-2022.jpg",
        alt: "",
        width: 805,
        height: 448,
      },
      gallery: [
        {
          src: "/sites/www-patriciaamorim-com-6f0fd8c4/exhibitions-collective-39e1a92e/images/02-duplo-i.jpg",
          alt: "",
          width: 4000,
          height: 2667,
        },
        {
          src: "/sites/www-patriciaamorim-com-6f0fd8c4/exhibitions-collective-39e1a92e/images/03-img-2440.jpg",
          alt: "",
          width: 2000,
          height: 2667,
        },
        {
          src: "/sites/www-patriciaamorim-com-6f0fd8c4/exhibitions-collective-39e1a92e/images/04-img-2441.jpg",
          alt: "",
          width: 2000,
          height: 2667,
        },
        {
          src: "/sites/www-patriciaamorim-com-6f0fd8c4/exhibitions-collective-39e1a92e/images/05-img-2443.jpg",
          alt: "",
          width: 2000,
          height: 2667,
        },
        {
          src: "/sites/www-patriciaamorim-com-6f0fd8c4/exhibitions-collective-39e1a92e/images/06-collective.jpg",
          alt: "",
          width: 1200,
          height: 675,
        },
      ],
      body: [
        { tag: "h1", children: ["Collective Exhibition"] },
        { tag: "p", children: ["‍"] },
        { tag: "h4", children: ["2022"] },
        { tag: "h4", children: ["PCP - Perth Centre for Photography - Western Australia"] },
        { tag: "p", children: ["‍"] },
        {
          tag: "p",
          children: [
            "‍",
            { tag: "br" },
            "Collective is Western Australia’s largest open-themed photographic art event, held in celebration of our diverse and talented photographic community. For over a decade, Collective’s platform has presented the work of photographic artists, generating a connection between emerging artists and established artists. The result is an eclecticand compelling exhibition, turning the spotlight on some of our most talented members. ",
          ],
        },
        { tag: "p", children: ["‍"] },
        {
          tag: "p",
          children: [
            "In 2022 Collective will showcase the work of over 130 photographic artists, including an additional selection of new work by past PCP exhibitor",
          ],
        },
        { tag: "p", children: ["‍"] },
        { tag: "p", children: ["‍"] },
      ],
    },
  ],
};
