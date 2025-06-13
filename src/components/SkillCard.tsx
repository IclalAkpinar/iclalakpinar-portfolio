"use client";

import { IconType } from "react-icons";

interface SkillCardProps {
  icon: IconType;
  name: string;
  color: string;
}

export const SkillCard = ({ icon: Icon, name, color }: SkillCardProps) => {
  return (
    <div
      className="group relative bg-black border-2 border-white/10 rounded-xl p-4
       transition-all duration-300 aspect-square hover:shadow-md hover:shadow-white/10"
    >
      <div className="flex flex-col items-center justify-center h-full gap-3">
        <Icon
          className="text-4xl md:text-5xl text-gray-300 transition-colors duration-300 group-hover:text-[var(--icon-color)]"
          style={{ ["--icon-color" as string]: color }}
        />
        <h3 className="text-sm text-gray-300 group-hover:text-white font-medium transition-colors text-center">
          {name}
        </h3>
      </div>
    </div>
  );
};
