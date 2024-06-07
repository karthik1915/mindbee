import React from "react";
import CourseCard from "./courseCard";
import { CoursesList } from "./courses";
type Props = {};

function Courses({}: Props) {
  return (
    <>
      <p className="px-5 text-center font-oxygen text-4xl font-bold">
        Lead the Way, Acquire Certifications from Top-Tier Programs
      </p>
      <p className="my-3 px-5 text-center text-xl">
        Globally recognized certification programs available for everyone.
      </p>
      <div className="mx-auto my-12 grid w-full max-w-6xl grid-cols-1 grid-rows-2 items-center justify-items-center px-3 lg:grid-cols-2 lg:grid-rows-1">
        {CoursesList.map((course) => (
          <CourseCard key={course.id} props={course} />
        ))}
      </div>
    </>
  );
}

export default Courses;
