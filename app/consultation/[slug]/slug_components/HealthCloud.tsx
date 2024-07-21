import React from "react";
import { OfferProps } from "../../ConsultationContent";

const HealthCloudOffer: OfferProps[] = [
  {
    title: "Manage patient data and track health journeys.",
    image: "",
  },
  {
    title:
      "Collaborate across departments, clinics, and providers for better outcomes.",
    image: "",
  },
  {
    title: "Secure data sharing for privacy and coordination.",
    image: "",
  },
  {
    title: "Telehealth capabilities for virtual visits.",
    image: "",
  },
];

const HealthCloud = () => {
  return (
    <section className="mx-auto max-w-screen-xl px-3">
      <header className="space-y-3">
        <h2 className="text-center font-exo text-3xl font-semibold text-headline">
          Salesforce for Healthcare & Life Sciences
        </h2>
        <h3 className="text-pretty text-center text-xl">
          Struggling to provide personalized experiences for patients,
          providers, and care teams? Try our Salesforce Health Cloud consulting
          services. Our consultants improve outcomes, efficiency, and growth
          with Health Cloud. Don&apos;t let outdated systems hold you back.
          Transform your organization today.
        </h3>
      </header>
      <div className="flex flex-wrap items-center justify-center gap-y-6 py-12">
        {HealthCloudOffer.map((offer) => {
          return (
            <div
              key={offer.title}
              className="flex w-full flex-col items-center gap-2 md:w-1/2"
            >
              {/* <Image
                      src={offer.image}
                      alt={offer.title}
                      width={200}
                      height={200}
                    /> */}
              <div className="size-[200px] rounded-full bg-secondary"></div>
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

export default HealthCloud;
