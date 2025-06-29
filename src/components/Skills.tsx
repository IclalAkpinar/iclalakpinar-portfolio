"use client";

import { SkillsData } from "@/models/skills.data";
import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { SkillCard } from "./SkillCard";

export const Skills = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const scrollPosRef = useRef(0);
  const animationRef = useRef<number | null>(null);

  const checkScrollPosition = () => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth;
    const containerWidth = scrollContainer.clientWidth;
    const maxScroll = scrollWidth - containerWidth;
    const halfWidth = scrollWidth / 2;

    if (scrollContainer.scrollLeft >= halfWidth) {
      scrollContainer.scrollLeft = scrollContainer.scrollLeft - halfWidth;
      scrollPosRef.current = scrollContainer.scrollLeft;
    } else if (scrollContainer.scrollLeft <= 0) {
      scrollContainer.scrollLeft = halfWidth;
      scrollPosRef.current = scrollContainer.scrollLeft;
    }
  };

  const scroll = () => {
    if (!scrollRef.current || isPaused || isUserScrolling) {
      animationRef.current = requestAnimationFrame(scroll);
      return;
    }

    scrollPosRef.current += 1;
    scrollRef.current.scrollLeft = scrollPosRef.current;

    checkScrollPosition();

    animationRef.current = requestAnimationFrame(scroll);
  };

  useEffect(() => {
    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, isUserScrolling]);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let userScrollTimeout: NodeJS.Timeout;

    const handleUserScrollStart = () => {
      setIsUserScrolling(true);
      clearTimeout(userScrollTimeout);
    };

    const handleUserScrollEnd = () => {
      clearTimeout(userScrollTimeout);
      userScrollTimeout = setTimeout(() => {
        setIsUserScrolling(false);
        scrollPosRef.current = scrollContainer.scrollLeft;
      }, 150);
    };

    const handleScroll = () => {
      checkScrollPosition();
    };

    const handleWheel = () => {
      handleUserScrollStart();
      clearTimeout(userScrollTimeout);
      userScrollTimeout = setTimeout(() => {
        setIsUserScrolling(false);
        scrollPosRef.current = scrollContainer.scrollLeft;
      }, 300);
    };

    scrollContainer.addEventListener("touchstart", handleUserScrollStart);
    scrollContainer.addEventListener("touchend", handleUserScrollEnd);
    scrollContainer.addEventListener("scroll", handleScroll);

    scrollContainer.addEventListener("mousedown", handleUserScrollStart);
    scrollContainer.addEventListener("mouseup", handleUserScrollEnd);

    scrollContainer.addEventListener("wheel", handleWheel);

    return () => {
      scrollContainer.removeEventListener("touchstart", handleUserScrollStart);
      scrollContainer.removeEventListener("touchend", handleUserScrollEnd);
      scrollContainer.removeEventListener("scroll", handleScroll);
      scrollContainer.removeEventListener("mousedown", handleUserScrollStart);
      scrollContainer.removeEventListener("mouseup", handleUserScrollEnd);
      scrollContainer.removeEventListener("wheel", handleWheel);
      clearTimeout(userScrollTimeout);
    };
  }, []);

  return (
    <section className="flex items-center justify-center pb-12 md:py-20 w-full p-4 md:p-0">
      <div className="w-full mx-auto">
        <SectionHeading title="Technical Skills" />

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-black to-transparent z-10" />

          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide gap-4 md:gap-6 pb-0 md:pb-0 cursor-grab"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{
              touchAction: "pan-x",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {[...SkillsData, ...SkillsData, ...SkillsData].map(
              (skill, index) => (
                <div
                  key={index}
                  className="flex-none w-[100px] md:w-[120px] lg:w-[140px]"
                >
                  <SkillCard
                    icon={skill.icon}
                    name={skill.name}
                    color={skill.color}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
