import { portfolioData } from "@/models/portfolio";
import { notFound } from "next/navigation";
import PortfolioDetailClient from "./PortfolioDetailClient";

interface Props {
  params: { slug: string };
}

export default function PortfolioDetailPage({ params }: Props) {
  const project = portfolioData.find((item) => item.slug === params.slug);

  if (!project) {
    return notFound();
  }

  return <PortfolioDetailClient project={project} />;
}

export function generateStaticParams() {
  return portfolioData.map((project) => ({
    slug: project.slug,
  }));
}
