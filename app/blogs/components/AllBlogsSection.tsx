import React from "react";
import BlogCard from "./BlogCard";
import { ArrowDownWideNarrow } from "lucide-react";

type Props = {};

const AllBlogsSection = (props: Props) => {
  return (
    <div className="mx-auto max-w-screen-xl px-3 py-7">
      <div className="flex justify-between">
        <p className="font-exo text-2xl">All Blogs</p>
        <div className="flex gap-1">
          <button className="rounded-xl px-3 py-2 hover:bg-foreground hover:text-background">
            <ArrowDownWideNarrow className="inline" size={20} />
            filter
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default AllBlogsSection;
