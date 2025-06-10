"use client";

import { IndividualData } from "@/models/individual.data";
import Image from "next/image";

export const About = () => {
  return (
    <section id="about" className="flex items-center justify-center">
      <div className="w-[90vw] lg:w-[78vw] max-w-7xl mx-auto mb-40">
        {/* Main heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          About
        </h2>

        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Left - Image (2/5 width) */}
          <div className="md:col-span-2 relative w-full aspect-square max-w-[400px] mx-auto md:mx-0">
            <div
              className="relative w-full h-full overflow-hidden rounded-[30px] shadow-lg border border-white/10
              shadow-black/50 backdrop-blur-sm bg-gradient-to-b from-white/10 to-black/10"
            >
              <Image
                src="/home/about.png"
                alt="About me image"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                priority
                quality={100}
                className="object-cover"
              />
              {/* Overlay for shadow effect */}
              <div className="absolute inset-0 shadow-[inset_0_0_30px_12px_rgba(0,0,0,0.6)] rounded-[30px]" />
            </div>
          </div>
          {/* Right - Text Content (3/5 width) */}
          <div className="md:col-span-3 space-y-6">
            {/* Mini heading */}
            <p className="text-sm uppercase tracking-[0.2em] text-gray-400 font-light ">
              {IndividualData.about.title}
            </p>

            {/* Paragraphs with sections */}
            <div className="space-y-8 text-gray-300 text-lg leading-relaxed">
              {/* Introduction */}
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
