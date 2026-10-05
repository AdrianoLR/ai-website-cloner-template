import type { ProjectDetail } from "@/types/patricia-amorim";

export const project: ProjectDetail = {
  slug: "lotus",
  title: "Lotus",
  contentAnchor: "content-1",
  meta: [{ label: "Category", value: "Photography & Visual Arts" }, { label: "Year", value: "2019" }],
  sections: [
    {
      layout: "stack",
      gallery: [
        {
          src: "/sites/www-patriciaamorim-com-6f0fd8c4/project-lotus-9542587b/images/02-nikon-d300-20130322-133743-id-110303.jpg",
          alt: "",
          width: 842,
          height: 610,
        },
        {
          src: "/sites/www-patriciaamorim-com-6f0fd8c4/project-lotus-9542587b/images/03-screen-shot-2022-06-30-at-1-45-37-am.png",
          alt: "",
          width: 872,
          height: 1204,
        },
      ],
      body: [
        { tag: "h1", children: ["Lotus"] },
        { tag: "p", children: ["‍"] },
        { tag: "h4", children: ["2019 - Northampton, UK"] },
        { tag: "h4", children: ["Analogue photograph (120 film format)"] },
        { tag: "h4", children: ["60 X 90 cm"] },
        { tag: "p", children: ["‍"] },
        {
          tag: "p",
          children: [
            "‍",
            { tag: "br" },
            "This work is an exploration of the complex dynamics of women's relationships within contemporary society, delving into the political and social issues that women face today. I used a large-format analogue camera to shoot portions of my body overlaid with photographs from locations associated with my emotional memories.",
          ],
        },
        { tag: "p", children: ["‍"] },
        {
          tag: "p",
          children: [
            "The image serves as a visual representation of the intricate connection between my body and the physical environment, emphasising how these elements contribute to shaping my identity while also highlighting their role in its collective erasure. I navigate the interplay between past and future in constructing a feminine universe entrenched with stereotypes, each layer absorbing the other in a conflicted network. The image reflects a sense of emptiness, a detachment from both the past and future, symbolised by the erasure of my body in time and space.",
          ],
        },
        { tag: "p", children: ["‍"] },
        { tag: "p", children: ["‍"] },
        {
          tag: "p",
          children: [
            "The work explores the suffocating experience of not belonging to either moment, grappling with the contradictions, standards, and unanswered questions that define this feminine universe. It contemplates the loneliness confronted in a world filled with unrealised aspirations and serves as a reflection on the fragility of life. The piece conveys my existential fear of the lack of control over destiny, encapsulating the anxieties surrounding life and death.",
          ],
        },
        { tag: "p", children: ["‍"] },
        { tag: "p", children: ["‍"] },
        {
          tag: "p",
          children: [
            "Through this photograph, I aim to capture the profound anguish and inherent anxiety of a body yearning for acceptance and a meaning in life beyond its immediate grasp. The image captures the self-realization I experienced amidst differences, inequalities, slights, and violence—an embodiment of the anomie the female body endures in society. This body becomes a sanctuary for desires, longings, and disappointments.",
          ],
        },
      ],
      cover: {
        src: "/sites/www-patriciaamorim-com-6f0fd8c4/project-lotus-9542587b/images/01-lotus1.jpg",
        alt: "Lotus",
        width: 2500,
        height: 1927,
      },
    },
  ],
};
