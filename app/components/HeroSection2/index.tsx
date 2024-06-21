"use client";

import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { HighlightText } from "./HighlightText";

const HerSection2 = () => {
  return (
    <div className="relative flex h-[45vh] w-full items-center overflow-hidden bg-background p-10 md:h-[50vh] lg:h-[75vh] lg:items-center lg:p-16">
      <div className="z-10 whitespace-pre-wrap text-center font-oxygen text-4xl font-medium text-black dark:text-white lg:text-left lg:text-6xl">
        {HighlightText("Consultation")}
      </div>

      <BackgroundBeams />
    </div>
  );
};

export default HerSection2;
