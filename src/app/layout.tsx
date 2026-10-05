import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  variable: "--font-inter",
  src: [{ path: "../../public/sites/www-patriciaamorim-com-6f0fd8c4/shared/fonts/inter-var.woff2", weight: "100 900", style: "normal" }],
  display: "swap",
});

const humane = localFont({
  variable: "--font-humane",
  src: [
    { path: "../../public/sites/www-patriciaamorim-com-6f0fd8c4/shared/fonts/Humane-Medium.otf", weight: "500", style: "normal" },
    { path: "../../public/sites/www-patriciaamorim-com-6f0fd8c4/shared/fonts/Humane-SemiBold.otf", weight: "600", style: "normal" },
    { path: "../../public/sites/www-patriciaamorim-com-6f0fd8c4/shared/fonts/Humane-Bold.otf", weight: "700", style: "normal" },
  ],
  display: "swap",
});

const shockaSerif = localFont({
  variable: "--font-shocka-serif",
  src: [{ path: "../../public/sites/www-patriciaamorim-com-6f0fd8c4/shared/fonts/ShockaSerif-Light.otf", weight: "400", style: "normal" }],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const description =
  "Contemporary artist and researcher interested in exploring how identity can be perceived through gendered bodies from a feminist standpoint.";

export const metadata: Metadata = {
  title: "Patricia Amorim - Photography and Visual Arts",
  description,
  openGraph: {
    title: "Patricia Amorim - Photography and Visual Arts",
    description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Patricia Amorim - Photography and Visual Arts",
    description,
  },
  icons: {
    icon: "/sites/www-patriciaamorim-com-6f0fd8c4/shared/seo/favicon-32.png",
    apple: "/sites/www-patriciaamorim-com-6f0fd8c4/shared/seo/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${humane.variable} ${shockaSerif.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="font-wght-420 min-h-full bg-canvas text-[1rem] leading-[1.4] tracking-[-0.01em] text-white min-[1280px]:text-[1vw]">
        {children}
      </body>
    </html>
  );
}
