"use client";

import { SkillsData } from "@/models/skills.data";
import { SectionHeading } from "./SectionHeading";
import { SkillCard } from "./SkillCard";

export const Skills = () => {
  return (
    <section className="flex items-center justify-center py-20">
      <div className="w-[90vw] lg:w-[78vw] max-w-7xl mx-auto">
        <SectionHeading title="Technical Skills" mb={16} />

        {/* <p className="text-gray-400 mb-4">Technologies I work with</p> */}

        {/* Skills Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
          {SkillsData.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              name={skill.name}
              color={skill.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
