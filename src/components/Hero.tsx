"use client";

import { IndividualData } from "@/models/individual.data";
import Image from "next/image";

interface HeroProps {
  isVisible: boolean;
}

export const Hero = ({ isVisible }: HeroProps) => {
  return (
    <section className="min-h-0 sm:min-h-screen flex items-center justify-center px-4 md:px-0 py-20 md:py-0">
      <div
        className={`w-full mx-auto grid md:grid-cols-2 gap-12 items-center
        transition-all duration-500`}
      >
        <div className="space-y-6 text-center md:text-left order-2 md:order-1">
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white
            transition-all duration-500 delay-100
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-24 opacity-0"
            }`}
          >
            {IndividualData.name}
          </h1>

          <h2
            className={`text-xl sm:text-2xl md:text-3xl text-gray-200 font-light
            transition-all duration-500 delay-300
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-24 opacity-0"
            }`}
          >
            {IndividualData.title}
          </h2>

          <p
            className={`text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto md:mx-0
            transition-all duration-500 delay-500
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-24 opacity-0"
            }`}
          >
            {IndividualData.description}
          </p>
          <div className="mt-10">
            <a
              href={`mailto:${IndividualData.mail}`}
              className={`px-4 py-2 sm:px-6 sm:py-3 bg-white text-black rounded-full 
  hover:bg-gray-200 transition-all duration-300 text-base sm:text-lg cursor-pointer
  delay-700 ${
    isVisible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"
  }`}
            >
              Get in touch
            </a>
          </div>
        </div>

        <div
          className={`relative aspect-square w-full max-w-[500px] mx-auto order-1 md:order-2
    transition-all duration-500 delay-300
    ${isVisible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"}`}
        >
          <div className="relative h-full w-full overflow-hidden rounded-full">
            <div className="absolute inset-0 transition-transform duration-300 hover:scale-110">
              <Image
                src="/home/hero.png"
                alt="Hero image"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full shadow-image pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};
