import React from "react";
import { CloudTech, Industries } from "./constant";

type Props = {};

function WhatWeDoSection({}: Props) {
  return (
    <section className="relative mx-auto flex max-w-6xl flex-wrap justify-evenly gap-12 px-4 py-12">
      <div>
        <h1 className="mb-3 text-center font-exo text-3xl font-semibold">
          Salesforce Cloud
          <br />
          Technologies We Support
        </h1>
        <div className="mx-auto min-h-[400px] w-1/3 min-w-[340px] rounded-xl bg-primary p-2 md:min-w-[440px]">
          {CloudTech.map((point) => {
            return (
              <div key={point} className="border-b px-4 py-3 text-white">
                <p className="text-xl">{point}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h1 className="mb-3 text-center font-exo text-3xl font-semibold">
          Industries We
          <br />
          Empower with Salesforce
        </h1>
        <div className="mx-auto min-h-[400px] w-1/3 min-w-[340px] rounded-xl bg-primary p-2 md:min-w-[440px]">
          {Industries.map((point) => {
            return (
              <div key={point} className="border-b px-4 py-3 text-white">
                <p className="text-xl">{point}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhatWeDoSection;
