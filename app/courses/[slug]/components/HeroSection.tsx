import React from "react";
import { CourseDetailsProps } from "../CourseData";
import BreadCrumbs from "./BreadCrumbs";

type Props = { content: CourseDetailsProps };

const HeroSection = (props: Props) => {
  return (
    <div className="w-full lg:w-1/2">
      <BreadCrumbs />

      <p className="px-4 text-center font-exo text-3xl font-semibold text-headline md:text-4xl lg:text-left">
        {props.content.title}
      </p>
      <p className="mx-4 my-2 border-l-4 border-primary pl-4 font-sans text-subheadline">
        {props.content.description}
      </p>
      <ul className="my-3 w-full list-inside list-disc space-y-2 pl-12 text-lg font-bold text-headline md:pl-16 lg:pl-20">
        {props.content.descriptionPoints.map((description, index) => {
          return <li key={`point-${index}`}>{description}</li>;
        })}
      </ul>
    </div>
  );
};

export default HeroSection;
