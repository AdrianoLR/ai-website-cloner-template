import type { ProjectDetail } from "@/types/patricia-amorim";

export const exhibition: ProjectDetail = {
  slug: "here-now",
  title: "Here|Now",
  contentAnchor: "content",
  meta: [{ label: "Category", value: "Exhibitions" }, { label: "Year", value: "2022" }],
  sections: [
    {
      layout: "rows",
      cover: {
        src: "/sites/www-patriciaamorim-com-6f0fd8c4/exhibitions-here-now-78ec3cf0/images/01-6539113f05ef6e4da50e3156-20010702-dsc277.jpeg",
        alt: "",
        width: 4000,
        height: 2667,
      },
      gallery: [
        {
          src: "/sites/www-patriciaamorim-com-6f0fd8c4/exhibitions-here-now-78ec3cf0/images/02-65391147ca705a4e6f86c142-20010702-dsc277.jpeg",
          alt: "",
          width: 4000,
          height: 2667,
        },
        {
          src: "/sites/www-patriciaamorim-com-6f0fd8c4/exhibitions-here-now-78ec3cf0/images/03-6539114765ea724c1388279f-20010702-dsc277.jpeg",
          alt: "",
          width: 4000,
          height: 2667,
        },
        {
          src: "/sites/www-patriciaamorim-com-6f0fd8c4/exhibitions-here-now-78ec3cf0/images/04-65391147b1424f088b7ebe16-herenow23-spect.jpeg",
          alt: "",
          width: 1250,
          height: 1250,
        },
      ],
      body: [
        { tag: "h1", children: ["Artist’s statement"] },
        { tag: "h4", children: ["‍"] },
        { tag: "h4", children: ["2022"] },
        { tag: "p", children: ["‍"] },
        {
          tag: "p",
          children: [
            "The project DUPLO Series uses digitally manipulated photography to investigate emerging possibilities for identity formation as perceived through the social construction of gendered bodies. This project considers how my cultural identity and status as a feminist and a Brazilian artist influence my artistic output and how I perceive gendered bodies in a cross-cultural setting. My studio practice is predominantly based on digital photography, partnered with Adobe Photoshop, with a feminist focus on the gendered body. In addition, I project photographs selected from my digital photographic collection of affective memory, which I have been continually developing since 2008, onto clothed gendered bodies. ",
          ],
        },
        { tag: "p", children: ["‍"] },
        {
          tag: "p",
          children: [
            "These bodies are re-signified by being re-inscribed by these images. My artistic practice is intimately related to new materialism feminism. I use an intersectional feminist theory and practice approach in my photography production process in terms of the political agency of my work, which respects the different views and experiences of gendered bodies. The relationship between materiality and feminism challenges my perception of gendered bodies through my photographic process, in order to consider the embodied subjectivity and cultural aspects within the context of the power relations explicit in gendered bodies.",
          ],
        },
        { tag: "p", children: ["‍"] },
      ],
    },
  ],
};
