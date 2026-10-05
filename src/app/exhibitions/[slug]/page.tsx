import { notFound } from "next/navigation";

import { ExhibitionPage } from "@/components/sites/www-patriciaamorim-com-6f0fd8c4/shared/exhibition/ExhibitionPage";
import { exhibitionDetails } from "@/components/sites/www-patriciaamorim-com-6f0fd8c4/shared/exhibition/registry";

export const dynamicParams = false;

export function generateStaticParams() {
  return exhibitionDetails.map((exhibition) => ({ slug: exhibition.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const exhibition = exhibitionDetails.find((entry) => entry.slug === slug);
  if (!exhibition) notFound();
  return <ExhibitionPage exhibition={exhibition} />;
}
