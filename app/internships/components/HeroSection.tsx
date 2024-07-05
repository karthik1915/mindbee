import RetroGrid from "@/components/magicui/retro-grid";
import React from "react";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section className="relative flex h-[50vh] flex-col items-center justify-center pt-28">
      <h1 className="bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-center font-exo text-4xl font-bold text-transparent md:text-5xl lg:text-6xl">
        Explore Our Internship Plans
      </h1>

      <h2 className="mt-4 text-center font-semibold md:text-lg">
        Elevate Your Resume with Meaningful Internship Opportunities with{" "}
        <strong>Mindbee</strong>
      </h2>
      <RetroGrid className="absolute inset-0" />
    </section>
  );
};

export default HeroSection;
