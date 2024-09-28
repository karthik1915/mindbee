"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BlogType } from "../[slug]/components/blogType";
import { AnimatePresence, motion } from "framer-motion";
import { formatDateToIST } from "@/lib/datetimeparser";

type Props = {
  blog: BlogType;
};

const BlogCard = (props: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleShowMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="m-4 w-80 overflow-hidden rounded-2xl bg-background p-2 font-oxygen">
      <BlogImage img={props.blog.cover_image} title={props.blog.title} />
      <div className="flex flex-col gap-3">
        <AnimatePresence>
          {isExpanded ? (
            <motion.div
              className="my-2 flex flex-col gap-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-center text-xl">{props.blog.title}</h4>
              <h5 className="line-clamp-2 text-center text-gray-500">
                {props.blog.description}
              </h5>
              <div className="flex items-center justify-evenly">
                {props.blog.tags.slice(0, 3).map((tag, i) => {
                  return (
                    <span
                      key={i}
                      className="rounded-lg bg-neutral-400 px-2 py-1"
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ) : (
            <motion.div
              className="my-2 flex flex-col gap-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-sm text-gray-700">
                Author: Mindbees Consulting
              </h4>
              <h5 className="text-sm text-gray-600">
                Category: {props.blog.category}
              </h5>
              <p className="text-sm text-gray-500">
                Created At: {formatDateToIST(props.blog.created_at)}
              </p>
              <p className="text-sm text-gray-500">
                Updated At: {formatDateToIST(props.blog.updated_at)}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        <div
          id="divider"
          className="h-px w-full rounded-full bg-zinc-400 px-3"
        />
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={handleShowMore}
            className="my-px w-full rounded-lg border border-zinc-500 bg-neutral-300 py-1 text-center transition-all duration-200 hover:bg-zinc-200 hover:shadow-md"
          >
            {!isExpanded ? "Less" : "More"}
          </button>
          <a
            href={`/blogs/${props.blog.slug}`}
            className="my-px w-full rounded-lg border border-zinc-500 py-1 text-center transition-all duration-200 hover:bg-zinc-200 hover:shadow-md"
          >
            Read
          </a>
        </div>
      </div>
    </div>
  );
};

type imgProps = {
  img: string;
  title: string;
};

function BlogImage({ img, title }: imgProps) {
  return (
    <div className="h-44 w-full overflow-hidden rounded-xl">
      {img ? (
        <Image
          src={img}
          alt={title}
          width={320}
          height={176}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="h-full w-full animate-pulse rounded-xl bg-gray-500"></div>
      )}
    </div>
  );
}

export default BlogCard;
