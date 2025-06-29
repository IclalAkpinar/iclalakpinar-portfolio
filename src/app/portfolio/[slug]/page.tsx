import { portfolioData } from "@/models/portfolio";
import { notFound } from "next/navigation";
import PortfolioDetailClient from "./PortfolioDetailClient";

interface Params {
  slug: string;
}

interface Props {
  params: Promise<Params>;
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;

  const project = portfolioData.find((item) => item.slug === slug);

  if (!project) {
    return notFound();
  }

  return <PortfolioDetailClient project={project} />;
}

export async function generateStaticParams() {
  return portfolioData.map((project) => ({
    slug: project.slug,
  }));
}
