import React from "react";
import { OfferProps } from "../../ConsultationContent";

const ExperienceOffer: OfferProps[] = [
  {
    title: "Development of a User Account Portal",
    image: "",
  },
  {
    title: "Availability of Data from Third Party or Legacy Sources",
    image: "",
  },
  {
    title: "Creation of a Self-Service Portal",
    image: "",
  },
  {
    title: "Delivery of Touch-Points across Device Types",
    image: "",
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
      <div className="flex flex-wrap items-center justify-center gap-y-6 py-12">
        {ExperienceOffer.map((offer) => {
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

export default ExperienceCloud;
