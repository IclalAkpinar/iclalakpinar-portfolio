"use client";

import { IndividualData } from "@/models/individual.data";
import Image from "next/image";
import { SectionHeading } from "./SectionHeading";

export const About = () => {
  return (
    <section id="about" className="flex items-center justify-center">
      <div className="w-[90vw] lg:w-[78vw] max-w-7xl mx-auto mb-8 lg:mb-20">
        <SectionHeading title="About" />

        <div className="grid lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-2 relative w-full aspect-square max-w-[350px] mx-auto lg:mx-0">
            <div
              className="absolute inset-0 w-full h-full overflow-hidden rounded-full shadow-lg border border-white/10
    shadow-black/50 backdrop-blur-sm bg-gradient-to-b from-white/10 to-black/10"
            >
              <div className="relative w-full h-full transition-transform duration-300 hover:scale-110">
                <Image
                  src="/home/about.png"
                  alt="About me image"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                  quality={100}
                  className="object-cover"
                />
                <div className="absolute inset-0 shadow-[inset_0_0_40px_12px_rgba(0,0,0,0.8)] rounded-full" />
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 space-y-6">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-400 font-light ">
              {IndividualData.about.title}
            </p>

            <div className="space-y-8 text-gray-300 text-lg leading-relaxed">
              <div className="space-y-6">
                {IndividualData.about.paragraphs.map((paragraph, index) => (
                  <p key={index}>
                    {paragraph.text.split(" ").map((word, wordIndex) => {
                      const isHighlighted = paragraph.highlights.some(
                        (highlight) =>
                          paragraph.text.indexOf(highlight) ===
                          paragraph.text.indexOf(word)
                      );
                      return (
                        <span key={wordIndex}>
                          {isHighlighted ? (
                            <span className="text-white font-semibold">
                              {word}{" "}
                            </span>
                          ) : (
                            word + " "
                          )}
                        </span>
                      );
                    })}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
