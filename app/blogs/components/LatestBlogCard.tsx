import Link from "next/link";
import React from "react";

type Props = {};

const LatestBlogCard = (props: Props) => {
  return (
    <div className="mx-auto flex max-w-screen-lg flex-col items-center p-8 md:flex-row">
      <div className="w-full p-4 sm:w-3/4 md:w-1/2">
        <BlogImageFallback />
      </div>

      <div className="flex w-1/2 flex-col items-center gap-3 md:items-start">
        <div id="latest-blog-badges" className="flex gap-4">
          <BadgeFallback />
          <BadgeFallback />
        </div>
        <TitleFallback />
        <DescriptionFallback1 />
        <DescriptionFallback2 />
        <Link
          href="/blogs/test-blog-no1"
          className="rounded-full border border-foreground bg-foreground px-5 py-2 font-exo text-background hover:bg-foreground/80"
        >
          Read this Blog
        </Link>
      </div>
    </div>
  );
};

const BlogImageFallback = () => {
  return (
    <div className="h-64 w-full animate-pulse rounded-xl bg-gray-400"></div>
  );
};

export const BadgeFallback = () => {
  return <div className="h-7 w-20 animate-pulse rounded-lg bg-gray-400"></div>;
};

export const TitleFallback = () => {
  return <div className="h-5 w-1/2 animate-pulse rounded-lg bg-gray-400"></div>;
};

export const DescriptionFallback1 = () => {
  return (
    <div className={`h-4 w-full animate-pulse rounded-lg bg-gray-400`}></div>
  );
};
export const DescriptionFallback2 = () => {
  return (
    <div className={`h-4 w-3/4 animate-pulse rounded-lg bg-gray-400`}></div>
  );
};

export default LatestBlogCard;
