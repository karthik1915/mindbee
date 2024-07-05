import React from "react";
import HeroSection from "./components/HeroSection";
import Overview from "./components/overview";
import Programs from "./components/programs";

type Props = {};

function InternshipsPage({}: Props) {
  return (
    <section className="min-h-screen">
      <HeroSection />
      <Overview />
      <Programs />
    </section>
  );
}

export default InternshipsPage;
