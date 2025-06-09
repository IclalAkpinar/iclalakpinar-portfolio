"use client";

import { IndividualData } from "@/models/individual.data";

interface HeroProps {
  isVisible: boolean;
}

export const Hero = ({ isVisible }: HeroProps) => {
  return (
    <section className="h-screen flex items-center justify-center">
      <div className={`text-center space-y-8 transition-all duration-500
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white">
          {IndividualData.name}
        </h1>

        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          {IndividualData.description}
        </p>

        <button className="px-8 py-3 bg-white text-black rounded-full 
          hover:bg-gray-200 transition-all duration-300">
          Get in touch
        </button>
      </div>
    </section>
  );
};