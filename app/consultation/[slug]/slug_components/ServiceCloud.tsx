import React from "react";
import Image from "next/image";
import { OfferProps } from "../../ConsultationContent";

const ServiceCloudOffer: OfferProps[] = [
  {
    image: "/consultation/service_cloud/messaging.png",
    title: "Connectivity to messaging applications",
  },
  {
    image: "/consultation/service_cloud/analysis.png",
    title: "Customer situation analysis through analytics",
  },
  {
    image: "/consultation/service_cloud/connection.png",
    title: "Communication through social networks",
  },
  {
    image: "/consultation/service_cloud/interface.png",
    title: "Interface with self-services portals",
  },
  {
    image: "/consultation/service_cloud/call.png",
    title: "Telephony Integration",
  },
];

const ServiceCloud = () => {
  return (
    <section className="mx-auto max-w-screen-xl px-3">
      <header className="space-y-3">
        <h2 className="text-center font-exo text-3xl font-semibold text-headline">
          What We Offer
        </h2>
        <h3 className="text-pretty text-center text-xl">
          Deliver the ultimate in responsive service by connecting support
          agents with customers on their terms - anywhere any time, across
          multiple channels: phone, email, messaging, chat, self-service portals
          and social networks. We can put you in perfect step with customers by
          integrating your service program with the reach and insights afforded
          by the Service Cloud platform.
        </h3>
      </header>
      <div className="flex flex-wrap items-center justify-center gap-y-6 py-12">
        {ServiceCloudOffer.map((offer) => {
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

export default ServiceCloud;
