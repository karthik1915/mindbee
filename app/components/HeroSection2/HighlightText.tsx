"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-hightlight";

export function HighlightText(text: string) {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="z-10 text-4xl font-bold leading-10 text-neutral-700 md:text-5xl lg:text-6xl lg:leading-snug"
      >
        Better Business Starts with
        <br />
        Better Service{" "}
        <Highlight className="text-black dark:text-white">{text}</Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
