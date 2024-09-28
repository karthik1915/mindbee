"use client";

import React, { useEffect, useState } from "react";
import { ArrowDownWideNarrow } from "lucide-react";
import BlogCardSkeleton from "./BlogCardSkeleton";
import LatestBlogCard from "./LatestBlogCard"; // Import your LatestBlogCard component
import { fetchOtherBlogs } from "@/app/actions/fetchOtherBlogs"; // Import the fetch function
import { BlogType } from "../[slug]/components/blogType";
import BlogCard from "./BlogCard";

type Props = {};

const AllBlogsSection = (props: Props) => {
  const [blogs, setBlogs] = useState<BlogType[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlogs = async () => {
      const otherBlogs = await fetchOtherBlogs();
      setBlogs(otherBlogs);
      setLoading(false); // Once the data is fetched, stop loading
    };

    loadBlogs();
  }, []);

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
      <div className="flex flex-wrap justify-center gap-4">
        {loading ? (
          // Fallback while loading
          <>
            <BlogCardSkeleton />
            <BlogCardSkeleton />
            <BlogCardSkeleton />
          </>
        ) : (
          blogs?.map((blog) => (
            <>
              <BlogCard key={blog.slug} blog={blog} />
            </>
          ))
        )}
      </div>
    </div>
  );
};

export default AllBlogsSection;
