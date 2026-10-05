import { notFound } from "next/navigation";

import { ProjectPage } from "@/components/sites/www-patriciaamorim-com-6f0fd8c4/shared/project/ProjectPage";
import { projectDetails } from "@/components/sites/www-patriciaamorim-com-6f0fd8c4/shared/project/registry";

export const dynamicParams = false;

export function generateStaticParams() {
  return projectDetails.map((project) => ({ slug: project.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectDetails.find((entry) => entry.slug === slug);
  if (!project) notFound();
  return <ProjectPage project={project} />;
}
