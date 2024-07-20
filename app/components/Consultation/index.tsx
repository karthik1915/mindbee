import React from "react";
import { CloudTech, Industries } from "./constant";
import { ArrowRight, Cloud, Factory } from "lucide-react";
import Link from "next/link";

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
              const [key, link] = Object.entries(point)[0];
              return (
                <li key={key}>
                  <Link
                    className="group flex items-center justify-between border-b px-1 py-3 text-xl text-white transition-all duration-100 hover:cursor-pointer hover:tracking-wider"
                    href={`/consultation/${link}`}
                  >
                    <p className="flex items-center gap-4 underline-offset-4 hover:underline">
                      <Cloud />
                      {key}
                    </p>
                    <p className="-translate-x-4 opacity-0 transition-all duration-100 group-hover:translate-x-0 group-hover:opacity-100">
                      <ArrowRight />
                    </p>
                  </Link>
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
                  className="flex items-center justify-between border-b px-1 py-3 text-xl text-white transition-all duration-100"
                >
                  <p className="flex items-center gap-2">
                    <Factory />
                    {point}
                  </p>
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
