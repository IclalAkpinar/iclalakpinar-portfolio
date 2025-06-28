"use client";

import { IndividualData } from "@/models/individual.data";
import { useState } from "react";
import { SectionHeading } from "./SectionHeading";

export const Experience = () => {
  const [activeJob, setActiveJob] = useState(0);

  return (
    <section className="flex items-center justify-center w-full pb-20">
      <div className="w-[90vw] lg:w-[78vw] max-w-7xl mx-auto">
        <SectionHeading title="Experience" />

        <div className="mt-12 grid md:grid-cols-[220px_1fr] lg:grid-cols-[340px_1fr] xl:grid-cols-[350px_1fr] 2xl:grid-cols-[360px_1fr] gap-16 w-[340px_1fr]">
          <div className="flex flex-col space-y-4">
            <div className="inline-flex flex-col space-y-4">
              {IndividualData.experience.jobs.map((job, index) => (
                <button
                  key={index}
                  onClick={() => setActiveJob(index)}
                  className={`px-4 py-4 text-left text-2xl md:text-xl lg:text-2xl font-medium rounded-lg w-[350px] md:w-[220px] lg:w-[340px] xl:w-[350px] 2xl:w-[360px]
                    ${
                      activeJob === index
                        ? "text-white border-2 border-solid border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                        : "text-gray-400 hover:text-white border-2 border-transparent hover:border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.05)]"
                    }`}
                >
                  {job.company}
                </button>
              ))}
            </div>
          </div>

          <div className="min-h-[300px] w-full">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-medium text-white">
                  {IndividualData.experience.jobs[activeJob].position}
                </h3>
                <p className="text-lg text-gray-400">
                  {IndividualData.experience.jobs[activeJob].duration}
                </p>
                <p className="text-base text-primary">
                  {IndividualData.experience.jobs[activeJob].type}
                </p>
              </div>

              <ul className="space-y-4">
                {IndividualData.experience.jobs[activeJob].description.map(
                  (item, index) => (
                    <li key={index} className="text-lg text-gray-300">
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
