interface ContactLink {
  label: string;
  href: string;
  /** Serif copy shown on hover, where the source site spells it differently. */
  hoverLabel?: string;
}

// Labels mirror the target page, including the misspelt hover copies.
export const navigation: ContactLink[] = [
  { label: "Home", href: "/" },
  { label: "Artwork", href: "/artwork", hoverLabel: "ARTWORK" },
  { label: "EXHIBITIONS", href: "/exhibitions", hoverLabel: "EXHBITIONS" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const social: ContactLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/ptamorimsilva/" },
  { label: "Linkedin", href: "https://www.linkedin.com/in/ptamorim/", hoverLabel: "LINKEDIN" },
];

export const email: ContactLink = {
  label: "patricia.ptasilva@gmail.com",
  href: "mailto:patricia.ptasilva@gmail.com?subject=Portfolio%20website",
  hoverLabel: "PATRICIA.PTASILVA@GMAI.COM",
};
