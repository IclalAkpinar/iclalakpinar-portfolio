"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

export const Welcome = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleComplete = () => {
    setIsVisible(false);
    onComplete();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          <div className="text-center">
            <TypeAnimation
              sequence={["WELCOME TO THE PORTFOLIO OF", () => handleComplete()]}
              wrapper="h1"
              speed={10}
              className="text-xl lg:text-3xl text-white font-light"
              cursor={true}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
