"use client";

import ShineBorder from "@/components/magicui/shine-border";
import React, { useState } from "react";
import { courseProps } from "./courses";
import Image from "next/image";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  props: courseProps;
};

function CourseCard({ props }: Props) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div id={props.id} className="perspective-1000 m-7">
      <ShineBorder duration={10} color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
        <motion.div
          className="w-76 relative h-96 max-w-96"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.8 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.div
            className="backface-hidden absolute inset-0 h-full w-full"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="flex h-full flex-col items-center justify-between rounded-2xl p-3">
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
              <p className="px- text-center font-oxygen text-xl font-semibold uppercase">
                {props.title}
              </p>
              <div className="flex justify-center gap-4">
                <AnimatedShinyText className="pointer-events-none inline-flex items-center justify-center bg-neutral-400 px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                  {props.enrollment} Enrollment
                </AnimatedShinyText>
                <AnimatedShinyText className="pointer-events-none inline-flex items-center justify-center bg-neutral-400 px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                  {props.stars} Rating
                </AnimatedShinyText>
              </div>
              <button
                onClick={handleFlip}
                className="w-full rounded-md border border-black bg-white/[0.2] px-4 py-2 text-black backdrop-blur-sm transition duration-200 hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)]"
              >
                Know More
              </button>
            </div>
          </motion.div>
          <motion.div
            onClick={handleFlip}
            className="backface-hidden absolute inset-0 flex h-full w-full flex-col items-center justify-between rounded-2xl bg-white p-3"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <p className="text-xl font-semibold">{props.coursePoints}</p>
            <Link
              href="/courses"
              className="w-full rounded-md border border-black bg-white/[0.2] px-4 py-2 text-center text-black backdrop-blur-sm transition duration-200 hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)]"
            >
              Enroll Now
            </Link>
          </motion.div>
        </motion.div>
      </ShineBorder>
    </div>
  );
}

export default CourseCard;
