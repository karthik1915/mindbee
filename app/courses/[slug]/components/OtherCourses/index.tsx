import React from "react";
import SimpleCourseCard from "./SimpleCourseCard";
import { CourseDetailsProps } from "../../CourseData";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Props = {
  contents: CourseDetailsProps[];
};

function OtherCourses({ contents }: Props) {
  return (
    <div className="mx-auto max-w-screen-2xl py-8">
      <p className="py-6 text-center font-exo text-2xl md:text-3xl lg:text-4xl">
        Explore Our Other Courses
      </p>
      <Carousel className="mx-auto w-3/4">
        <CarouselContent>
          {contents.map((content) => {
            return <SimpleCourseCard key={content.id} content={content} />;
          })}
        </CarouselContent>
        <CarouselNext className="" />
        <CarouselPrevious />
      </Carousel>
      <div className="flex flex-wrap justify-center"></div>
    </div>
  );
}

export default OtherCourses;
