"use client";

import { IndividualData } from "@/models/individual.data";
import { useState } from "react";
import { SectionHeading } from "./SectionHeading";


export const Education = () => {
  return (
    <section className="flex items-center justify-center pb-12 w-full">
      <div className="w-[90vw] lg:w-[78vw] max-w-7xl mx-auto">
        <SectionHeading title="Education" />
        <div className="w-full">
          {IndividualData.education.schools.map((school, idx) => (
            <div key={idx} className="mb-12">
              {school.link ? (
                <a
                  href={school.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl md:text-4xl font-extrabold text-white mb-2 inline-block hover:underline"
                >
                  {school.name}
                </a>
              ) : (
                <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-2">
                  {school.name}
                </h2>
              )}
              <div className="space-y-2">
                <h3 className="text-xl font-medium text-white">{school.degree}</h3>
                <p className="text-lg text-gray-400">{school.duration}</p>
                <p className="text-base text-primary">GPA: {school.GPA}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
