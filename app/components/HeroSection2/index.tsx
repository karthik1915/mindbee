"use client";

import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { HighlightText } from "./HighlightText";

const HerSection2 = () => {
  return (
    <div className="relative flex h-[45vh] w-full items-center overflow-hidden bg-background p-10 md:h-[50vh] lg:h-[75vh] lg:items-center lg:p-20">
      <div className="z-10 whitespace-pre-wrap text-center font-oxygen text-4xl font-medium text-black dark:text-white lg:text-left lg:text-6xl">
        {HighlightText("Consultation")}
      </div>
      {/* <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.6}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(1000px_circle_at_center,black,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      /> */}
      <BackgroundBeams />
    </div>
  );
};

export default HerSection2;
