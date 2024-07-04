import React, { ReactNode } from "react";
import { Certificate, Instructions, Videos } from "./Icons";
import {
  CalendarCheck,
  Rocket,
  Infinity,
  HandHelpingIcon,
  BriefcaseBusiness,
  BookUser,
} from "lucide-react";

const IconColor = "#3da9fc";

const Highlight: {
  point: string;
  icon: ReactNode;
}[] = [
  {
    point: "38 hours Instructor Led Training",
    icon: <BookUser aria-hidden color={IconColor} size={32} />,
  },
  {
    point: "32 Hrs Self-paced Videos",
    icon: <Videos aria-hidden width={32} height={32} fill={IconColor} />,
  },
  {
    point: "40 Hrs Project & Exercises",
    icon: <Rocket aria-hidden size={32} color={IconColor} />,
  },
  {
    point: "Certification",
    icon: <Certificate aria-hidden fill={IconColor} />,
  },
  {
    point: "Job Assistance",
    icon: <BriefcaseBusiness aria-hidden size={32} color={IconColor} />,
  },
  {
    point: "Flexible Schedule",
    icon: <CalendarCheck aria-hidden size={32} color={IconColor} />,
  },
  {
    point: "Lifetime Free Upgrade",
    icon: <Infinity aria-hidden size={32} color={IconColor} />,
  },
  {
    point: "Mentor Support",
    icon: <HandHelpingIcon aria-hidden size={32} color={IconColor} />,
  },
];

type Props = {
  course: string;
};

const KeyHighlights = (props: Props) => {
  return (
    <>
      <h1
        className="text-center font-exo text-4xl font-semibold"
        aria-labelledby={`Key Hightlights of ${props.course}`}
      >
        Key HighLights
      </h1>
      <ul className="mx-auto my-10 grid max-w-screen-2xl gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Highlight.map((point) => {
          return (
            <li
              key={point.point}
              className="flex items-center gap-4 pl-9 text-lg font-semibold"
            >
              {point.icon}
              {point.point}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default KeyHighlights;
