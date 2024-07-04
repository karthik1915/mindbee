import React from "react";
import { CourseDetailsProps } from "../CourseData";
import BreadCrumbs from "./BreadCrumbs";

type Props = { content: CourseDetailsProps };

const listIndicatorColors: string[] = [
  "bg-[#e74c3c]", // Red
  "bg-[#2ecc71]", // Green
  "bg-[#f1c40f]", // Yellow
  "bg-[#9b59b6]", // Purple
  "bg-[#e67e22]", // Orange
  "bg-[#1abc9c]", // Teal
  "bg-[#34495e]", // Dark Blue
];

const HeroSection = (props: Props) => {
  return (
    <div className="w-full lg:w-1/2">
      <BreadCrumbs />
      <h1 className="px-4 text-center font-exo text-3xl font-semibold text-headline md:text-4xl lg:text-left">
        {props.content.title}
      </h1>
      <p className="mx-4 my-2 border-l-4 border-primary pl-4 font-sans text-subheadline">
        {props.content.description}
      </p>
      <ul className="my-3 w-full list-inside list-disc space-y-2 pl-12 text-lg font-bold text-headline md:pl-16 lg:pl-20">
        {props.content.descriptionPoints.map((description, index) => {
          return (
            <li className="flex items-center gap-2" key={`point-${index}`}>
              <span
                aria-hidden
                role="presentation"
                className={`inline h-5 w-7 rounded-lg ${listIndicatorColors[index]}`}
              ></span>{" "}
              {description}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HeroSection;
