"use client";

import { SkillsData } from "@/models/skills.data";
import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { SkillCard } from "./SkillCard";

export const Skills = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollPosRef = useRef(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth;

    const scroll = () => {
      if (!scrollContainer || isPaused) return;

      scrollPosRef.current += 3;
      if (scrollPosRef.current >= scrollWidth / 2) {
        scrollPosRef.current = 0;
      }

      scrollContainer.scrollLeft = scrollPosRef.current;
    };

    const intervalId = setInterval(scroll, 30);

    return () => clearInterval(intervalId);
  }, [isPaused]);

  return (
    <section className="flex items-center justify-center py-0 md:py-20 w-full p-4 md:p-0">
      <div className="w-full mx-auto ">
        <SectionHeading title="Technical Skills" />

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-black to-transparent z-10" />

          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide gap-4 md:gap-6 pb-0 md:pb-0 cursor-grab"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {[...SkillsData, ...SkillsData].map((skill, index) => (
              <div
                key={index}
                className="flex-none w-[90px] md:w-[120px] lg:w-[140px]"
              >
                <SkillCard
                  icon={skill.icon}
                  name={skill.name}
                  color={skill.color}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
