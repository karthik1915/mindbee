import React from "react";
import Image from "next/image";
import { OfferProps } from "../../ConsultationContent";

const ExperienceOffer: OfferProps[] = [
  {
    title: "Development of a User Account Portal",
    image: "/consultation/experience_cloud/user_account.png",
  },
  {
    title: "Availability of Data from Third Party or Legacy Sources",
    image: "/consultation/experience_cloud/database.png",
  },
  {
    title: "Creation of a Self-Service Portal",
    image: "/consultation/experience_cloud/self_service_portal.png",
  },
  {
    title: "Delivery of Touch-Points across Device Types",
    image: "/consultation/experience_cloud/responsive.png",
  },
];

const ExperienceCloud = () => {
  return (
    <section className="mx-auto max-w-screen-xl px-3">
      <header className="space-y-3">
        <h2 className="text-center font-exo text-3xl font-semibold text-headline">
          What We Offer
        </h2>
        <h3 className="text-pretty text-center text-xl">
          Salesforce&apos;s Experience Cloud allows companies and organizations
          to collaborate directly with customers, partners and employees through
          branded digital destinations. Harnessing the utility of this
          application, marketers can enable a mix of data, apps and experts to
          quickly share information and advance objectives. We can help you
          capitalize on this community-strengthening platform.
        </h3>
      </header>
      <div className="flex flex-wrap items-center justify-center gap-y-8 py-12">
        {ExperienceOffer.map((offer) => {
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

export default ExperienceCloud;
