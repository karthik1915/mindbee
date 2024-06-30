"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { HighlightText } from "./HighlightText";
import OrbitingCircles from "@/components/magicui/orbiting-circles";
import { OrbitingIcons } from "../icons/orbitingIcons";

const HeroSection2 = () => {
  return (
    <div className="relative flex min-h-[80vh] w-full flex-col items-center overflow-hidden bg-background p-10 pt-28 md:min-h-[50vh] lg:p-16 xl:flex-row xl:py-28">
      <div className="z-10 flex items-center whitespace-pre-wrap pt-28 text-center font-oxygen font-medium text-black dark:text-white lg:text-left xl:h-[50vh] xl:pt-0">
        {HighlightText("Consultation")}
      </div>
      <div className="relative right-0 xl:absolute xl:top-1/2 xl:block xl:size-[520px] xl:-translate-y-1/2">
        <div className="relative mx-auto flex size-[400px] max-w-6xl items-center justify-center rounded-lg bg-background xl:h-[600px]">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            Mindbee
          </span>

          {/* Inner Circles */}
          <OrbitingCircles
            className="h-[30px] w-[30px] border-none bg-transparent"
            duration={20}
            delay={20}
            radius={60}
          >
            <OrbitingIcons.github />
          </OrbitingCircles>
          <OrbitingCircles
            className="h-[30px] w-[30px] border-none bg-transparent"
            duration={20}
            delay={10}
            radius={60}
          >
            <OrbitingIcons.heroku />
          </OrbitingCircles>

          {/* Outer Circles (reverse) */}
          <OrbitingCircles
            className="h-[50px] w-[50px] border-none bg-transparent"
            reverse
            radius={150}
            duration={20}
          >
            <OrbitingIcons.salesforce />
          </OrbitingCircles>
          <OrbitingCircles
            className="h-[50px] w-[50px] border-none bg-transparent"
            reverse
            radius={150}
            duration={20}
            delay={20}
          >
            <OrbitingIcons.postman />
          </OrbitingCircles>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default HeroSection2;
