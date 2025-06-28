"use client";

import { IndividualData } from "@/models/individual.data";
import { useState } from "react";
import { SectionHeading } from "./SectionHeading";

export const Education = () => {
  const [activeSchool, setActiveSchool] = useState(0);

  return (
    <section className="flex items-center justify-center pb-28 w-full">
      <div className="w-[90vw] lg:w-[78vw] max-w-7xl mx-auto">
        <SectionHeading title="Education" />

        <div className="mt-12 grid md:grid-cols-[280px_1fr] lg:grid-cols-[300px_1fr] xl:grid-cols-[320px_1fr] 2xl:grid-cols-[340px_1fr] gap-16 w-full">
          {/* Sidebar - School List */}
          <div className="flex flex-col space-y-4">
            <div className="inline-flex flex-col space-y-4">
              {IndividualData.education.schools.map((school, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSchool(index)}
                  className={`px-8 py-5 text-left md:text-xl lg:text-2xl font-medium rounded-lg
                    w-[280px] md:w-[280px] lg:w-[300px] xl:w-[320px] 2xl:w-[340px]
                    ${
                      activeSchool === index
                        ? "text-white border-2 border-solid border-white/40 shadow-sm shadow-white/10 rounded-lg"
                        : "text-gray-400 hover:text-white border-2 border-transparent hover:border-white/50 shadow-[0_0_10px_rgba(255,255,255,0.05)]"
                    }`}
                >
                  {school.name}
                </button>
              ))}
            </div>
          </div>

          {/* School Details */}
          <div className="min-h-[20px] w-full">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-medium text-white">
                  {IndividualData.education.schools[activeSchool].degree}
                </h3>
                <p className="text-lg text-gray-400">
                  {IndividualData.education.schools[activeSchool].duration}
                </p>
                <p className="text-base text-primary">
                  GPA: {IndividualData.education.schools[activeSchool].GPA}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
