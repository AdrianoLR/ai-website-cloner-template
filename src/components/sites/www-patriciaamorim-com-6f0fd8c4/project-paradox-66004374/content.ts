import type { ProjectDetail } from "@/types/patricia-amorim";

export const project: ProjectDetail = {
  slug: "paradox",
  title: "Paradox",
  contentAnchor: "content-1",
  meta: [{ label: "Category", value: "Photography & Visual Arts" }, { label: "Year", value: "2017" }],
  sections: [
    {
      layout: "stack",
      gallery: [
        {
          src: "/sites/www-patriciaamorim-com-6f0fd8c4/project-paradox-66004374/images/02-nikon-d300-20130322-135101.jpg",
          alt: "",
          width: 2072,
          height: 3129,
        },
      ],
      body: [
        { tag: "h1", children: ["Paradox"] },
        { tag: "p", children: ["‍"] },
        { tag: "h4", children: ["2017 - Northampton, UK"] },
        { tag: "h4", children: ["Analogue photograph (120 film format)"] },
        { tag: "h4", children: ["30 X 45 cm "] },
        { tag: "p", children: ["‍"] },
        {
          tag: "p",
          children: [
            "Violence manifests as a lack of love—for life, for others, and for oneself—a forfeiture of one's identity in favour of external judgments. Constant surveillance and the scrutinising gaze of others serve as judges, condemning our every action. Nudity, rather than a celebration of the body, becomes a reflection of violence, fueled by the fear of exposure and the revelation of hidden secrets, afflictions, and anxieties. In essence, concealing the body becomes an externalisation of our morality and decency, enclosing our stories, marks, tears, and joys within a protective shell. Every organism carries its own unique narrative, and this diversity contributes to the profound fascination with human forms.",
          ],
        },
        { tag: "p", children: ["‍"] },
        {
          tag: "p",
          children: [
            "This photograph is part of a series that was embedded in a video called Bodies in Between, which delves into an exploration of the female body, capturing it from unconventional perspectives— from the bottom up and the top down— to present a fresh visual narrative. The inspiration for this investigation arose from the fact that art history has predominantly focused on the female body from a male gaze. The female body, burdened with societal expectations of carnal pleasure and idealistic aesthetics, becomes a central concern in our patriarchal society.",
          ],
        },
      ],
      cover: {
        src: "/sites/www-patriciaamorim-com-6f0fd8c4/project-paradox-66004374/images/01-mas-tem-uma-coisa-que-se-chama-amor.jpg",
        alt: "Paradox",
        width: 2500,
        height: 3287,
      },
      coverVideo: {
        poster: "/sites/www-patriciaamorim-com-6f0fd8c4/project-paradox-66004374/videos/01-bodies-in-between-poster-00001.jpg",
        sources: [
          {
            src: "/sites/www-patriciaamorim-com-6f0fd8c4/project-paradox-66004374/videos/02-bodies-in-between-transcode.mp4",
            type: "video/mp4",
          },
          {
            src: "/sites/www-patriciaamorim-com-6f0fd8c4/project-paradox-66004374/videos/03-bodies-in-between-transcode.webm",
            type: "video/webm",
          },
        ],
      },
    },
  ],
};
