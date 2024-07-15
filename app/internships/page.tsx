import React from "react";
import HeroSection from "./components/HeroSection";
import Overview from "./components/overview";
import Programs from "./components/programs";
import { Metadata } from "next";
import InternshipContact from "./components/Contact";

type Props = {};

export function generateMetadata({ params }: { params: string }): Metadata {
  return {
    title: "Internships - MindBee",
    description:
      "Explore various Salesforce Internships by MindBee's Internship programs",
    openGraph: {
      url: "https://mindbeesconsulting.com/internships",
      siteName: "MindBee Consulting",
      title: "Internships - MindBee",
      description:
        "Explore various Salesforce Internships by MindBee's Internship programs",
      images: [
        {
          url: "https://cz9aqx1sonm5juhb.public.blob.vercel-storage.com/opengraph/salesforce_internship_og-iqAAkjjbnLA5lQizyrlgHm2M8iqZ68.png", // Update with your actual image URL
          width: 1200,
          height: 630,
          alt: "MindBee Internships",
        },
      ],
      type: "website",
    },
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
