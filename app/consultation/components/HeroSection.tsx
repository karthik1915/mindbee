import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ConsulatationProps } from "../ConsultationContent";
import BreadCrumbs from "@/app/courses/[slug]/components/BreadCrumbs";

type Props = {
  consultation: ConsulatationProps;
  others: ConsulatationProps[];
};

const HeroSection = (props: Props) => {
  const menu = props.others.map(({ title, link }) => ({
    title,
    link,
  }));
  return (
    <header className="flex flex-col flex-wrap py-5 lg:flex-row">
      <div className="flex flex-col justify-center gap-5 px-5 lg:w-1/2">
        <BreadCrumbs
          parent={{
            title: "Consultation",
            link: "/#consultation",
          }}
          menu={menu}
          current={props.consultation.title}
        />
        <div>
          <h1 className="text-center font-oxygen text-4xl lg:text-left">
            {props.consultation.title}
          </h1>
          <h2 className="mt-2 text-balance text-center text-2xl lg:text-left">
            {props.consultation.subtitle}
          </h2>
          <p className="mt-4 text-justify">{props.consultation.description}</p>
        </div>
        <div className="flex justify-center lg:justify-start">
          <Link
            href="/#contact"
            className="inline-block rounded-lg bg-headline p-3 text-background transition-colors duration-150 hover:bg-subheadline"
          >
            Contact us today
          </Link>
        </div>
      </div>
      <div className="flex flex-grow justify-center">
        <Image
          src={`/consultation/${props.consultation.imgUrl}`}
          alt={props.consultation.title}
          width={500}
          height={416}
        />
      </div>
    </header>
  );
};

export default HeroSection;
