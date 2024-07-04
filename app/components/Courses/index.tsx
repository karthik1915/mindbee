import React from "react";
import CourseCard from "./courseCard";
import { CoursesList } from "./courses";
type Props = {};

function Courses({}: Props) {
  return (
    <section id="services">
      <h1 className="px-5 text-center font-oxygen text-2xl font-bold md:text-3xl">
        Lead the Way, Acquire Certifications from Top-Tier Programs
      </h1>
      <h2 className="my-3 px-5 text-center text-lg">
        Globally recognized certification programs available for everyone.
      </h2>
      <div className="mx-auto my-12 flex w-auto max-w-7xl flex-wrap justify-center px-3">
        {CoursesList.map((course) => (
          <CourseCard key={course.id} props={course} />
        ))}
      </div>
    </section>
  );
}

export default Courses;
