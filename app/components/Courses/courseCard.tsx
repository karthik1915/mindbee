"use client";
import { courseProps } from "./courses";
import Image from "next/image";
import { easeInOut, easeOut, motion, useAnimate } from "framer-motion";
import Link from "next/link";
import { Scale, Star } from "lucide-react";
import { OpacityIcon } from "@radix-ui/react-icons";

type Props = {
  props: courseProps;
};

function CourseCard({ props }: Props) {
  const [scope1, animate1] = useAnimate();
  const [scope2, animate2] = useAnimate();

  const startAnimation = () => {
    animate1(scope1.current, { opacity: 1 }, { duration: 0.5 });
    animate2(
      scope2.current,
      { scale: 1, opacity: 1 },
      { duration: 0.5, ease: easeOut },
    );
  };

  const stopAnimation = () => {
    animate1(scope1.current, { opacity: 0 }, { duration: 0.5 });
    animate2(
      scope2.current,
      { scale: 1.1, opacity: 0 },
      { duration: 0.3, ease: easeOut },
    );
  };

  return (
    <div
      onMouseEnter={startAnimation}
      onMouseLeave={stopAnimation}
      className="relative m-3 flex size-96 flex-col rounded-xl border bg-background p-5 text-foreground shadow-lg transition-shadow duration-100 hover:shadow-none"
    >
      <Image
        className="rounded-lg"
        src={props.imageUrl}
        alt={`${props.title} course image`}
        width={360}
        height={200}
        loading="lazy"
      />
      <div className="flex flex-grow flex-col justify-between">
        <h3 className="py-2 text-center font-oxygen text-xl font-semibold">
          {props.title}
        </h3>
        <div className="flex w-full items-end justify-evenly">
          <p>Enrollments : {props.enrollment}</p>
          <div
            className="flex items-center"
            aria-label={`${props.stars} stars`}
          >
            <Star fill="gold" stroke="gold" size={20} aria-hidden />
            <Star fill="gold" stroke="gold" size={20} aria-hidden />
            <Star fill="gold" stroke="gold" size={20} aria-hidden />
            <Star fill="gold" stroke="gold" size={20} aria-hidden />
            <Star fill="gold" stroke="gold" size={20} aria-hidden />
            &nbsp;(
            {props.stars})
          </div>
        </div>
        <Link
          aria-hidden
          href={props.courseLink}
          className="rounded-2xl py-2 text-center font-oxygen font-semibold ring ring-primary hover:bg-primary"
        >
          Enroll Now
        </Link>
      </div>
      <motion.div
        ref={scope1}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="absolute left-0 top-0 z-10 flex h-full w-full flex-col justify-between rounded-xl bg-[#d8eefe] p-5 shadow-inner"
      >
        <div>
          <h3 className="py-3 font-oxygen text-2xl font-semibold">
            {props.title}
          </h3>
          <ul
            aria-label={`${props.title} course contents`}
            className="list-inside list-image-[url(/check.svg)] text-lg"
          >
            {props.coursePoints.map((point, index) => {
              return <li key={index}>{point}</li>;
            })}
          </ul>
          <p className="my-4 text-center font-bold">And More</p>
        </div>

        <Link
          tabIndex={-1}
          aria-label={`Enroll ${props.title} course now`}
          href={props.courseLink}
          className="rounded-2xl py-2 text-center font-oxygen font-semibold ring ring-primary hover:bg-primary"
        >
          Enroll Now
        </Link>
      </motion.div>
      <motion.div
        className="absolute right-0 top-0 z-40"
        initial={{
          scale: 1.4,
          // translateX: "33%",
          // translateY: "-33%",
          opacity: 0,
        }}
        ref={scope2}
      >
        <Image
          src={props.courseLogoUrl}
          alt={`${props.title} Badge`}
          width={100}
          height={100}
          className="h-auto w-auto"
        />
      </motion.div>
    </div>
  );
}

export default CourseCard;
