import React from "react";
import { CloudTech, Industries } from "./constant";
import { ArrowRight, Cloud, Factory } from "lucide-react";
import Link from "next/link";

type Props = {};

function Consultation({}: Props) {
  return (
    <section id="consultation">
      <h3
        id="consultation"
        className="text-balance px-3 py-4 text-center font-exo text-3xl font-semibold text-headline md:text-4xl"
      >
        Transform Your Business with Our Expert{" "}
        <span className="underline underline-offset-4">Consultation</span>{" "}
        Services
      </h3>
      <div className="relative mx-auto flex max-w-6xl flex-wrap justify-evenly gap-12 px-4 py-6">
        <div aria-labelledby="cloud-consultation">
          <h4
            id="cloud-consultation"
            className="mb-3 px-3 text-center font-oxygen text-xl text-subheadline md:text-2xl"
          >
            Salesforce Cloud Technologies We Support
          </h4>
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
                      <Cloud aria-hidden />
                      {key}
                    </p>
                    <span
                      role="presentation"
                      className="inline -translate-x-4 opacity-0 transition-all duration-100 group-hover:translate-x-0 group-hover:opacity-100"
                    >
                      <ArrowRight />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div aria-labelledby="industries-consultation">
          <h4
            id="industries-consultation"
            className="mb-3 px-3 text-center font-oxygen text-xl text-subheadline md:text-2xl"
          >
            Industries We Empower with Salesforce
          </h4>
          <ul className="mx-auto min-h-[400px] w-1/3 min-w-[340px] rounded-xl bg-primary p-2 shadow-xl md:min-w-[440px]">
            {Industries.map((point) => {
              return (
                <li
                  key={point}
                  className="border-b px-1 py-3 text-xl text-white transition-all duration-100"
                >
                  <p className="flex items-center gap-2">
                    <Factory aria-hidden />
                    {point}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Consultation;
