import React from "react";
import Image from "next/image";
import { OfferProps } from "@/app/consultation/ConsultationContent";

const FinancialServicesOffer: OfferProps[] = [
  {
    image: "/consultation/financial_cloud/dashboard.png",
    title: "Unified view of customer account data",
  },
  {
    image: "/consultation/financial_cloud/risk.png",
    title: "Compliance and risk management",
  },
  {
    image: "/consultation/financial_cloud/investment.png",
    title: "Customized investment portfolio creation",
  },
  {
    image: "/consultation/financial_cloud/goal.png",
    title: "Financial goal tracking",
  },
  {
    image: "/consultation/financial_cloud/wealth.png",
    title: "Comprehensive wealth management",
  },
];

const FinanceCloud = () => {
  return (
    <section className="mx-auto max-w-screen-xl px-3">
      <header className="space-y-3">
        <h2 className="text-center font-exo text-3xl font-semibold text-headline">
          Salesforce for Financial Services & Wealth Manangement
        </h2>
        <h3 className="text-pretty text-center text-xl">
          Salesforce Financial Services Cloud is the ultimate platform for
          financial institutions looking to streamline their operations, enhance
          customer experience, and grow their business. Our certified experts
          are equipped to consult on Financial Services Cloud features and
          tools, helping you stay compliant with industry regulations and data
          privacy laws, so you can operate with confidence and peace of mind.
        </h3>
      </header>
      <div className="flex flex-wrap items-center justify-center gap-y-6 py-12">
        {FinancialServicesOffer.map((offer) => {
          return (
            <div
              key={offer.title}
              className="flex w-full flex-col items-center gap-4 md:w-1/2 lg:w-1/3"
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

export default FinanceCloud;
