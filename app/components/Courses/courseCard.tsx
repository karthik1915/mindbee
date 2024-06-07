import ShineBorder from "@/components/magicui/shine-border";
import React from "react";
import { courseProps } from "./courses";
import Image from "next/image";

type Props = {
  props: courseProps;
};

function CourseCard({ props }: Props) {
  return (
    <div className="m-7 rounded-[8px] border hover:shadow-lg">
      <ShineBorder duration={10} color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
        <div className="w-76 flex h-96 max-w-96 flex-col items-center justify-between rounded-2xl p-3">
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
          <p className="font-oxygen text-xl font-semibold uppercase">
            {props.title}
          </p>
          <div className="flex gap-4">
            <p>{props.enrollment} Enrollment</p>
            <p>{props.stars} Rating</p>
          </div>
          <button className="w-full rounded-md border border-black bg-white/[0.2] px-4 py-2 text-black backdrop-blur-sm transition duration-200 hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)]">
            Learn More
          </button>
        </div>
      </ShineBorder>
    </div>
  );
}

export default CourseCard;
