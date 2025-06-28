"use client";

import { About } from "@/components/About";
import { Achievements } from "@/components/Achievements";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Welcome } from "@/components/Welcome";
import { useEffect, useState } from "react";

interface PageProps {}

export default function Home({}: PageProps) {
  const [showContent, setShowContent] = useState<boolean>(false);

  useEffect(() => {
    if (showContent) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [showContent]);

  return (
    <>
      <Welcome onComplete={() => setShowContent(true)} />
      <main className="min-h-screen w-[95vw] md:w-[80vw] lg:w-[72vw] 2xl:w-[60vw] mx-auto">
        <Hero isVisible={showContent} />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Achievements />
      </main>
    </>
  );
}
