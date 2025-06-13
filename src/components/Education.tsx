"use client";

import { IndividualData } from "@/models/individual.data";
import { SectionHeading } from "./SectionHeading";

export const Education = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="w-[90vw] lg:w-[78vw] max-w-7xl mx-auto">
        <SectionHeading title="Education" />

        <div className="space-y-12">
          {" "}
          {/* Increased spacing between schools */}
          {IndividualData.education.schools.map((school, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col gap-4">
                {" "}
                {/* Increased gap for better hierarchy */}
                <h3 className="text-2xl md:text-4xl font-bold text-white">
                  {school.name}
                </h3>
                <div className="space-y-2">
                  {" "}
                  {/* Container for secondary information */}
                  <p className="text-lg text-gray-300 font-medium">
                    {school.degree}
                  </p>
                  <p className="text-gray-400">{school.duration}</p>
                  <ul className="list-disc list-inside text-gray-400 mt-2">
                    {school.GPA && (
                      <li className="text-base">
                        <strong>GPA:</strong> {school.GPA}
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
