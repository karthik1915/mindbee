import ShineBorder from "@/components/magicui/shine-border";
import React from "react";
import { courseProps } from "./courses";
import Image from "next/image";

type Props = {
  props: courseProps;
};

function CourseCard({ props }: Props) {
  return (
    <ShineBorder color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
      <div className="flex size-96 max-w-96 flex-col items-center justify-between rounded-2xl p-4">
        <div className="h-auto w-full">
          <Image
            src={props.imageUrl}
            alt={props.title}
            width={1000}
            height={150}
            objectFit="cover"
            loading="lazy"
          />
        </div>
        <div className="flex w-full flex-grow flex-col items-center justify-between">
          <p className="font-oxygen text-2xl font-semibold">{props.title}</p>
          <a className="relative p-[3px]" href={props.courseLink}>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#A07CFE] via-[#FE8FB5] to-[#FFBE7B]" />
            <div className="group relative rounded-[6px] bg-background px-8 py-2 text-xl font-semibold text-black transition duration-200 hover:bg-transparent">
              Learn More
            </div>
          </a>
        </div>
      </div>
    </ShineBorder>
  );
}

export default CourseCard;
