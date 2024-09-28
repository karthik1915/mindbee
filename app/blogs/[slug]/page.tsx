import React from "react";
import { Metadata } from "next/types";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import fetchBlog from "@/app/actions/fetchBlog";
import NavBar from "@/app/components/Navbar";
import BlogFooter from "./components/BlogFooter";
import { fetchOtherBlogsExcept } from "@/app/actions/fetchOtherBlogsExcept";

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  return {
    title: `${params.slug} | Mindbees`,
  };
}

async function Page({ params }: { params: { slug: string } }) {
  const blogData = await fetchBlog(params.slug);
  const otherBlogs = await fetchOtherBlogsExcept(params.slug);

  if (!blogData) {
    notFound();
  }

  return (
    <>
      <NavBar />
      <main className={styles.blogContainer}>
        <h1
          className={styles.blogTitle}
          dangerouslySetInnerHTML={{ __html: blogData?.title }}
        ></h1>
        <p className="my-2 text-center text-gray-400">{blogData.description}</p>
        <div
          className={styles.blogContent}
          dangerouslySetInnerHTML={{ __html: blogData.content }}
        />
      </main>
      <div className={styles.blogFooter}>
        <BlogFooter otherBlogs={otherBlogs} />
      </div>
    </>
  );
}

export default Page;
