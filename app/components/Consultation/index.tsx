import React from "react";
import { CloudTech, Industries } from "./constant";

type Props = {};

function Consultation({}: Props) {
  return (
    <>
      <h1
        id="consultation"
        className="px-3 text-center font-exo text-3xl font-semibold md:text-4xl"
      >
        Transform Your Business with Our Expert{" "}
        <span className="underline underline-offset-4">Consultation</span>{" "}
        Services
      </h1>
      <section className="relative mx-auto flex max-w-6xl flex-wrap justify-evenly gap-12 px-4 py-12">
        <div>
          <h2 className="mb-3 px-3 text-center font-oxygen text-xl md:text-2xl">
            Salesforce Cloud Technologies We Support
          </h2>
          <ul className="mx-auto min-h-[400px] w-1/3 min-w-[340px] rounded-xl bg-primary p-2 shadow-xl md:min-w-[440px]">
            {CloudTech.map((point) => {
              return (
                <li
                  key={point}
                  className="border-b px-4 py-3 text-xl text-white"
                >
                  {point}
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h2 className="mb-3 px-3 text-center font-oxygen text-xl md:text-2xl">
            Industries We Empower with Salesforce
          </h2>
          <ul className="mx-auto min-h-[400px] w-1/3 min-w-[340px] rounded-xl bg-primary p-2 shadow-xl md:min-w-[440px]">
            {Industries.map((point) => {
              return (
                <li
                  key={point}
                  className="border-b px-4 py-3 text-xl text-white"
                >
                  {point}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Consultation;
