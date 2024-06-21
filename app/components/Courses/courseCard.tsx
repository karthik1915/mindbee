"use client";
import { courseProps } from "./courses";
import Image from "next/image";
import { motion, useAnimate } from "framer-motion";
import Link from "next/link";

type Props = {
  props: courseProps;
};

function CourseCard({ props }: Props) {
  const [scope, animate] = useAnimate();

  const startAnimation = () => {
    animate(scope.current, { opacity: 1 }, { duration: 0.5 });
  };
  const stopAnimation = () => {
    animate(scope.current, { opacity: 0 }, { duration: 0.5 });
  };

  return (
    <div
      onMouseEnter={startAnimation}
      onMouseLeave={stopAnimation}
      className="relative m-3 flex size-96 flex-col overflow-hidden rounded-xl border bg-background p-5 text-foreground shadow-lg transition-shadow duration-100 hover:shadow-none"
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
        <button className="rounded-2xl py-2 font-oxygen font-semibold ring ring-primary hover:bg-primary">
          Enroll Now
        </button>
      </div>
      <motion.div
        ref={scope}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="absolute left-0 top-0 z-10 flex h-full w-full flex-col justify-between rounded-xl bg-[#d8eefe] p-5 shadow-inner"
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
          <p className="my-4 text-center font-bold">And More</p>
        </div>

        <Link
          href={props.courseLink}
          className="rounded-2xl py-2 text-center font-oxygen font-semibold ring ring-primary hover:bg-primary"
        >
          Enroll Now
        </Link>
      </motion.div>
    </div>
  );
}

export default CourseCard;
