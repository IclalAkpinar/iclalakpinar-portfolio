"use client";

import PortfolioCard from "@/components/PortfolioCard";
import { portfolioData } from "@/models/portfolio";

export default function PorfolioContainer() {
  return (
    <div className=" space-y-6 overflow-x-hidden ">
      {portfolioData.map((item, index) => (
        <PortfolioCard key={index} data={item} />
      ))}
    </div>
  );
}
