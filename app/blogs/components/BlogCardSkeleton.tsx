import React from "react";
import {
  BadgeFallback,
  DescriptionFallback1,
  DescriptionFallback2,
  TitleFallback,
} from "./LatestBlogCardSkeleton";

type Props = {
  //   title: string;
  //   link: string;
  //   image: string;
  //   description: string;
  //   date: string;
};

const BlogCardSkeleton = (props: Props) => {
  return (
    <div className="m-4 w-80 rounded-2xl bg-background p-2 font-oxygen">
      <BlogFallbackImage />
      <div className="my-4 flex flex-col gap-3">
        <DescriptionFallback1 />
        <DescriptionFallback2 />
        <div className="flex items-center justify-evenly">
          <BadgeFallback />
          <BadgeFallback />
        </div>
        <div
          id="divider"
          className="h-px w-full rounded-full bg-zinc-400 px-3"
        />

        <button className="my-px rounded-lg border border-zinc-500 py-1 transition-all duration-200 hover:bg-zinc-200 hover:shadow-md">
          Read this Blog
        </button>
      </div>
    </div>
  );
};

const BlogFallbackImage = () => {
  return (
    <div className="h-44 w-full animate-pulse rounded-xl bg-gray-500">
      Image
    </div>
  );
};

export default BlogCardSkeleton;
