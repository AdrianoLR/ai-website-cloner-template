import type { ProjectDetail } from "@/types/patricia-amorim";

export const project: ProjectDetail = {
  slug: "a-hundred-names",
  title: "A Hundred Names",
  contentAnchor: "content-1",
  meta: [{ label: "Category", value: "Photography & Visual Arts" }, { label: "Year", value: "2024" }],
  sections: [
    {
      layout: "stack",
      gallery: [
        {
          src: "/sites/www-patriciaamorim-com-6f0fd8c4/project-a-hundred-names-0282c8fa/images/02-hn-1.jpg",
          alt: "",
          width: 4000,
          height: 2667,
        },
        {
          src: "/sites/www-patriciaamorim-com-6f0fd8c4/project-a-hundred-names-0282c8fa/images/03-hn-2.jpg",
          alt: "",
          width: 4000,
          height: 2667,
        },
        {
          src: "/sites/www-patriciaamorim-com-6f0fd8c4/project-a-hundred-names-0282c8fa/images/04-hn-3.jpg",
          alt: "",
          width: 2048,
          height: 1365,
        },
        {
          src: "/sites/www-patriciaamorim-com-6f0fd8c4/project-a-hundred-names-0282c8fa/images/05-hn-4.jpg",
          alt: "",
          width: 4000,
          height: 2667,
        },
      ],
      body: [
        { tag: "h2", children: ["A Hundred Names", { tag: "br" }, "‍"] },
        { tag: "h4", children: ["2024 - Perth, WA"] },
        { tag: "h4", children: ["Medium: Archival Installation (Hair Samples and Labels)"] },
        { tag: "h4", children: ["Dimensions: 4.30 metres long, 2.60 metres high"] },
        { tag: "h4", children: ["100 Glassine archival envelopes (106mm X 133mm)"] },
        { tag: "h4", children: ["100 Labels (260gsm card, 38 x 76mm)"] },
        { tag: "h4", children: ["‍", { tag: "br" }, "‍"] },
        {
          tag: "p",
          children: [
            "A Hundred Names challenges how bodies— especially women's bodies—are catalogued and contained. This work resists singular definitions, embracing the multiplicity of identity: the hundred names we carry and the hundred ways we exist beyond imposed boundaries.",
          ],
        },
        { tag: "p", children: ["‍"] },
        {
          tag: "p",
          children: [
            "Strands of hair—gathered from women across Brazil and Australia—carry whispers of memory, identity, and loss. Each envelope bears a name: some in remembrance, others imagined, all speaking to lives felt or mourned. In this act of naming, absence becomes presence; the lost and the living held together in quiet defiance.",
          ],
        },
        { tag: "p", children: ["‍"] },
        {
          tag: "p",
          children: [
            "The archive swells beyond order—hair escapes its borders, resists the grid, insists on being seen. What was once a tool of control becomes a site of shared vulnerability, where presence lingers, uncontained, and absence speaks in tangible form.",
          ],
        },
        { tag: "p", children: ["‍"] },
      ],
      cover: {
        src: "/sites/www-patriciaamorim-com-6f0fd8c4/project-a-hundred-names-0282c8fa/images/01-hn-main.jpg",
        alt: "A Hundred Names",
        width: 4000,
        height: 2667,
      },
    },
  ],
};
