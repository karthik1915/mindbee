import React from "react";
import { Metadata } from "next";
import ConsulatationContent from "../ConsultationContent";
import { notFound } from "next/navigation";
import Motto from "../components/Motto";
import WhatSetUsApart from "../components/WhatSetUsApart";
import HeroSection from "../components/HeroSection";

export async function generateStaticParams() {
  return ConsulatationContent.map((consultation) => ({
    slug: consultation.slug,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const consultation = ConsulatationContent.find((c) => c.slug === params.slug);
  return {
    title: `${consultation?.title} - Mindbees Consultation`,
  };
}

function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const consultation = ConsulatationContent.find((c) => c.slug === slug);

  const othersConsultations = ConsulatationContent.filter(
    (c) => c.slug !== params.slug,
  );

  if (!consultation) {
    return notFound();
  }

  return (
    <main className="min-h-screen pt-[100px]">
      <HeroSection consultation={consultation} others={othersConsultations} />
      <consultation.Content />
      <Motto />
      <WhatSetUsApart />
    </main>
  );
}

export default Page;
