import React from "react";
import CourseCard from "./courseCard";
import { CoursesList } from "./courses";
type Props = {};

function Courses({}: Props) {
  return (
    <>
      <p
        id="services"
        className="px-5 text-center font-oxygen text-2xl font-bold md:text-3xl"
      >
        Lead the Way, Acquire Certifications from Top-Tier Programs
      </p>
      <p className="my-3 px-5 text-center text-lg">
        Globally recognized certification programs available for everyone.
      </p>
      <div className="mx-auto my-12 flex w-auto max-w-7xl flex-wrap justify-center px-3">
        {CoursesList.map((course) => (
          <CourseCard key={course.id} props={course} />
        ))}
      </div>
    </>
  );
}

export default Courses;
