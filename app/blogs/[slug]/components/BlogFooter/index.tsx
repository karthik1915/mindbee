import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import { BlogType } from "../blogType";
import BlogCard from "@/app/blogs/components/BlogCard";

type Props = {
  otherBlogs: BlogType[] | null;
};

const BlogFooter = (props: Props) => {
  return (
    <div>
      <Carousel className="mx-auto w-3/4">
        <CarouselContent>
          {props.otherBlogs?.map((content) => {
            return <BlogCard key={content.title} blog={content} />;
          })}
        </CarouselContent>
        <CarouselNext className="" />
        <CarouselPrevious />
      </Carousel>
    </div>
  );
};

export default BlogFooter;
