import React from "react";
import { CloudTech, Industries } from "./constant";

type Props = {};

function WhatWeDoSection({}: Props) {
  return (
    <section className="relative mx-auto flex max-w-6xl flex-wrap justify-evenly gap-12 px-4 py-12">
      <div>
        <h1 className="mb-3 text-center font-exo text-3xl font-semibold">
          Salesforce Cloud Technologies <br /> We Support
        </h1>
        <ul className="mx-auto min-h-[400px] w-1/3 min-w-[340px] rounded-xl bg-primary p-2 shadow-xl md:min-w-[440px]">
          {CloudTech.map((point) => {
            return (
              <li key={point} className="border-b px-4 py-3 text-xl text-white">
                {point}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h1 className="mb-3 text-center font-exo text-3xl font-semibold">
          Industries We Empower
          <br /> with Salesforce
        </h1>
        <ul className="mx-auto min-h-[400px] w-1/3 min-w-[340px] rounded-xl bg-primary p-2 shadow-xl md:min-w-[440px]">
          {Industries.map((point) => {
            return (
              <li key={point} className="border-b px-4 py-3 text-xl text-white">
                {point}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default WhatWeDoSection;
