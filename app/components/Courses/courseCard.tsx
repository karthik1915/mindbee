"use client";
import { courseProps } from "./courses";
import Image from "next/image";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import Link from "next/link";
import { Check } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

type Props = {
  props: courseProps;
};

function CourseCard({ props }: Props) {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!hovered);
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      // onTouchEnd={() => setHovered(false)}
      // onTouchStart={() => setHovered(false)}
      className="relative m-3 flex size-96 flex-col overflow-hidden rounded-xl border bg-background p-5 text-foreground"
    >
      <div className="">
        <Image
          className="rounded-lg"
          src={props.imageUrl}
          alt={props.title}
          width={360}
          height={200}
          objectFit="cover"
          layout="responsive"
        />
      </div>
      <div className="flex flex-grow flex-col justify-between">
        <p className="py-2 text-center font-oxygen text-xl font-semibold">
          {props.title}
        </p>
        <div className="flex w-full items-center justify-evenly">
          <p>Enrollments : {props.enrollment}</p>
          <p>{props.stars} Stars</p>
        </div>
        {/* <div className="flex items-center justify-around rounded-xl bg-primary/40 py-4">
          <p>{props.noOfChapters} Chapters</p>
          <p>{props.hoursToFinish} hrs</p>
        </div> */}
        <button className="rounded-2xl py-2 ring ring-primary hover:bg-primary">
          Enroll Now
        </button>
      </div>
      {hovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute left-0 top-0 flex h-full w-full flex-col justify-between rounded-xl bg-[#d8eefe] p-5"
        >
          <div>
            <p className="py-3 font-oxygen text-2xl font-semibold">
              {props.title}
            </p>
            <ul className="list-inside list-image-[url(/check.svg)] text-lg">
              {props.coursePoints.map((point, index) => {
                return <li key={index}>{point}</li>;
              })}
            </ul>
          </div>
          <button className="rounded-2xl py-2 ring ring-primary hover:bg-primary">
            Enroll Now
          </button>
        </motion.div>
      )}
    </div>
  );
}

export default CourseCard;
