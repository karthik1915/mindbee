import React from "react";
import Image from "next/image";
import { OfferProps } from "../../ConsultationContent";

const EducationCloudOffer: OfferProps[] = [
  {
    title: "Recruitment and admissions experiences",
    image: "/consultation/education_cloud/recruitment.png",
  },
  {
    title: "Higher education marketing",
    image: "/consultation/education_cloud/education.png",
  },
  {
    title: "Advanced alumni and engagement",
    image: "/consultation/service_cloud/connection.png",
  },
  {
    title: "Educational Data Architecture (EDA)",
    image: "/consultation/health_cloud/flowchart.png",
  },
];

const EducationCloud = () => {
  return (
    <section className="mx-auto max-w-screen-xl px-3">
      <header className="space-y-3">
        <h2 className="text-center font-exo text-3xl font-semibold text-headline">
          What We Offer
        </h2>
        <h3 className="text-pretty text-center text-xl">
          Working with universities and colleges, CRM Forge Solutions delivers
          the power of Salesforce&apos;s Educational Cloud platform to
          institutions in need of scalable strategies for recruitment and
          learning services. We respond to the evolving needs of the campus
          community by integrating students, educators and administrators
          through the latest Salesforce technology.
        </h3>
      </header>
      <div className="flex flex-wrap items-center justify-center gap-y-6 py-12">
        {EducationCloudOffer.map((offer) => {
          return (
            <div
              key={offer.title}
              className="flex w-full flex-col items-center gap-4 md:w-1/2"
            >
              <Image
                src={offer.image}
                alt={offer.title}
                width={200}
                height={200}
              />
              {/* <div className="size-[200px] rounded-full bg-secondary"></div> */}
              <div>
                <h3 className="text-pretty px-3 text-center font-oxygen text-xl text-headline">
                  {offer.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default EducationCloud;
