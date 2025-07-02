
"use client";

import React, { useState } from "react";
import { IndividualData } from "@/models/individual.data";
import { SectionHeading } from "./SectionHeading";

export const Experience = () => {
  const [activeJob, setActiveJob] = useState(0);
  // Ekran boyutunu kontrol etmek için state
  const [isMobile, setIsMobile] = useState(false);

  // Ekran boyutunu dinle
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md: 768px
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="flex items-center justify-center w-full pb-12">
      <div className="w-[90vw] lg:w-[78vw] max-w-7xl mx-auto">
        <SectionHeading title="Experience" />

        <div className="w-full">
          {IndividualData.experience.jobs.map((job, idx) => (
            <div key={idx} className="mb-12">
              <h2 className="text-4xl font-extrabold text-white mb-2">{job.company}</h2>
              <div className="space-y-2">
                <h3 className="text-xl font-medium text-white">{job.position}</h3>
                <p className="text-lg text-gray-400">{job.duration}</p>
                <p className="text-base text-primary">{job.type}</p>
              </div>
              <ul className="space-y-4 mt-2">
                {job.description.map((item, i) => (
                  <li key={i} className="text-lg text-gray-300">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
