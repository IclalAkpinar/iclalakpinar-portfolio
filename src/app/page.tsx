"use client";

import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { SideEmailLink } from "@/components/SideEmailLink";
import { SideSocialLinks } from "@/components/SideSocialLinks";
import { Welcome } from "@/components/Welcome";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface PageProps {}

export default function Home({}: PageProps) {
  const [showContent, setShowContent] = useState<boolean>(false);

  useEffect(() => {
    if (showContent) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [showContent]);

  const sideElementClasses = `
    fixed bottom-0 z-40 
    transition-opacity duration-700 delay-[800ms]
    ${showContent ? "opacity-100" : "opacity-0"}
  `;

  return (
    <>
      <Welcome onComplete={() => setShowContent(true)} />
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={showContent ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative min-h-screen w-full"
      >
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navbar />
        </div>

        <main className="min-h-screen w-full">
          <Hero isVisible={showContent} />
        </main>

        <div className="relative z-30">
          <Footer />
        </div>

        <div className={`${sideElementClasses}`}>
          <SideSocialLinks />
        </div>

        <div className={`${sideElementClasses}`}>
          <SideEmailLink />
        </div>
      </motion.div>
    </>
  );
}
