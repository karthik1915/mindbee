import React from "react";
import CourseCard from "./courseCard";
import { CoursesList } from "./courses";
import Link from "next/link";
type Props = {};

function Courses({}: Props) {
  return (
    <section id="courses" role="region" className="py-8">
      <header>
        <h3 className="px-5 text-center font-oxygen text-3xl font-bold text-headline md:text-4xl">
          Lead the Way, Acquire{" "}
          <span className="underline underline-offset-4">Certifications</span>{" "}
          from Top-Tier Programs
        </h3>
        <p className="my-3 px-5 text-center text-lg text-subheadline">
          Globally recognized certification programs as well as{" "}
          <Link
            className="font-bold underline underline-offset-4"
            href="/internships"
          >
            Internship
          </Link>{" "}
          programs available for everyone.
        </p>
      </header>
      <div className="mx-auto my-12 flex w-auto max-w-7xl flex-wrap justify-center px-3">
        {CoursesList.map((course) => (
          <CourseCard key={course.id} props={course} />
        ))}
      </div>
    </section>
  );
}

export default Courses;
