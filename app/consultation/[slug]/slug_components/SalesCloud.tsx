import Image from "next/image";
import React from "react";
import { OfferProps } from "@/app/consultation/ConsultationContent";

const SalesCloudOffer: OfferProps[] = [
  {
    title: "By the Hour Salesforce CRM Support",
    subtitle:
      "Our certified SFDC admins can assist you in getting the most out of your CRM, including:",
    points: [
      "On-call support for unexpected issues",
      "Expert services to improve and troubleshoot",
      "On-demand consulting",
    ],
    image: "/consultation/sales_cloud/crm.png",
  },
  {
    title: "Salesforce Training",
    subtitle:
      "We can create custom-tailored education plans for the internal training of:",
    points: ["Your power users", "Your sales team", "Your marketing team"],
    image: "/consultation/sales_cloud/training.png",
  },
  {
    title: "Salesforce Strategic Support",
    subtitle: "We can help you develop a strategic framework for:",
    points: [
      "Your lead management",
      "Optimizing your lead funnel",
      "Optimizing your analytics\n or development of new reports",
      "Understanding pipeline influence",
    ],
    image: "/consultation/sales_cloud/rocket.png",
  },
];
const SalesCloud = (): React.ReactNode => {
  return (
    <section className="mx-auto max-w-screen-xl px-3 py-8">
      <header className="space-y-3">
        <h2 className="text-center font-exo text-3xl font-semibold text-headline">
          What We Offer
        </h2>
        <h3 className="text-pretty text-center text-xl">
          Work with our certified Salesforce experts to get insights on industry
          best practices and strategic direction to deliver tailored and
          scalable solutions to help achieve your business goals.
        </h3>
      </header>
      <div className="space-y-8 py-12">
        {SalesCloudOffer.map((offer) => {
          return <Card key={offer.title} {...offer} />;
        })}
      </div>
    </section>
  );
};

const Card = ({ title, subtitle, points, image }: OfferProps) => {
  return (
    <div className="flex flex-col items-center gap-5 px-4 md:flex-row lg:pl-8">
      <Image src={image} alt={title} width={200} height={200} />
      {/* <div className="gapx size-[200px] flex-shrink-0 rounded-full bg-secondary"></div> */}
      <div className="flex flex-col items-center md:items-start">
        <h3 className="text-center font-oxygen text-3xl text-headline">
          {title}
        </h3>
        <h4 className="text-pretty break-words pt-1 text-center text-xl text-subheadline md:text-left">
          {subtitle}
        </h4>
        <ul className="list-inside list-disc pt-2 text-lg">
          {points?.map((point, index) => <li key={index}>{point}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default SalesCloud;
