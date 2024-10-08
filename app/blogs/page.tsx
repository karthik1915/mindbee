import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import React from "react";
import AllBlogsSection from "./components/AllBlogsSection";
import { Metadata } from "next";
import NavBar from "../components/Navbar";
import LatestBlogCardSkeleton from "./components/LatestBlogCardSkeleton";
import { fetchLatestBlog } from "../actions/fetchLatestBlog";
import { BlogType } from "./[slug]/components/blogType";
import LatestBlogCard from "./components/LatestBlogCard";

type Props = {};

export function generateMetadata({ params }: { params: string }): Metadata {
  return {
    title: "Blogs - MindBee",
    description: "Explore various blogs published by Mindbees",
    openGraph: {
      url: "https://mindbeesconsulting.com/blogs",
      siteName: "MindBee Consulting",
      title: "Blogs - MindBee",
      description: "Explore various blogs published by Mindbees ",
      images: [
        {
          url: "https://cz9aqx1sonm5juhb.public.blob.vercel-storage.com/opengraph/salesforce_blogs_og-I9mNlsQaHRwKZMTWK0Z1EfsKmQU9JU.png", // Update with your actual image URL
          width: 1200,
          height: 630,
          alt: "MindBee Blogs",
        },
      ],
      type: "website",
    },
  };
}

function Blogs({}: Props) {
  const latestBlog = async () => {
    try {
      const blog = await fetchLatestBlog();
      if (blog) {
        return <LatestBlogCard blog={blog} />;
      }
    } catch (err) {
      console.error("Error fetching latest blog:", err);
    }
  };

  return (
    <>
      <NavBar />
      <main>
        <section className="relative flex h-[30vh] min-h-[400px] w-full items-center justify-center overflow-hidden bg-gray-400/30 backdrop-blur-lg lg:h-[50vh]">
          <BackgroundGradientAnimation
            interactive={false}
            gradientBackgroundStart="#ddd"
            gradientBackgroundEnd="#fff"
            size="60%"
          ></BackgroundGradientAnimation>
          <div className="absolute z-50 select-none">
            <p className="py-4 text-center font-exo text-3xl font-bold md:text-4xl lg:text-5xl">
              Explore our blogs
            </p>
            <p className="px-3 text-center font-oxygen">
              All you need to know about salesforce and mindbee
            </p>
          </div>
        </section>
        <section id="latest-blog">{latestBlog()}</section>
        <section id="all-blog-cards" className="bg-[#ddd]">
          <AllBlogsSection />
        </section>
      </main>
    </>
  );
}

export default Blogs;
