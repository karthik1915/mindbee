"use client";

import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import GradualSpacing from "@/components/magicui/gradual-spacing";

const HerSection2 = () => {
  return (
    <div className="relative flex h-[60vh] w-full items-center overflow-hidden bg-background p-10 lg:items-end lg:p-20">
      <p className="z-10 whitespace-pre-wrap text-center text-4xl font-medium tracking-tighter text-black dark:text-white lg:text-left lg:text-6xl">
        Better Business Starts with
        <br />
        Better Service Consultation
      </p>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.6}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,black,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
    </div>
  );
};

export default HerSection2;
