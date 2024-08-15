import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogType } from "../[slug]/components/blogType";

const LatestBlogCard = ({ blog }: { blog: BlogType }) => {
  return (
    <div className="mx-auto flex max-w-screen-lg flex-col items-center justify-center p-8 md:flex-row">
      <div className="">
        <Image
          width={200}
          height={200}
          src={blog.cover_image || "/blog/discussion_image_animated.png"} // Replace with your default image URL
          alt={blog.title}
          className="h-64 w-full rounded-xl"
        />
      </div>

      <div className="flex w-1/2 flex-col items-center gap-3 p-4 md:items-start">
        <h2 className="text-2xl font-bold">{blog.title}</h2>
        <p className="line-clamp-2">{blog.description}</p>
        <div id="latest-blog-badges" className="flex gap-4">
          {blog.tags.map((badge, index) => (
            <span
              key={index}
              className="rounded-full bg-zinc-400 px-4 py-1 text-sm"
            >
              {badge}
            </span>
          ))}
        </div>
        <Link
          href={`/blogs/${blog.slug}`}
          className="rounded-full border border-foreground bg-foreground px-5 py-2 font-exo text-background hover:bg-foreground/80"
        >
          Read this Blog
        </Link>
      </div>
    </div>
  );
};

export default LatestBlogCard;
