import React from "react";
import HeroSection from "./components/HeroSection";
import Overview from "./components/overview";
import Programs from "./components/programs";
import { Metadata } from "next";
import InternshipContact from "./components/Contact";

type Props = {};

export function generateMetadata({ params }: { params: string }): Metadata {
  return {
    title: `Internships - MindBee`,
    description: "Explore our internship plans with mindbee",
  };
}

function Page({}: Props) {
  return (
    <section className="min-h-screen">
      <HeroSection />
      <Overview />
      <Programs />
      <InternshipContact />
    </section>
  );
}

export default Page;
