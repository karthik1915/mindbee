import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import React from "react";
import LatestBlogCard from "./components/LatestBlogCard";
import AllBlogsSection from "./components/AllBlogsSection";
import Footer from "@/app/components/footer";

type Props = {};

function Blogs({}: Props) {
  return (
    <main>
      <section className="relative flex h-[30vh] w-full items-center justify-center overflow-hidden bg-gray-400/30 backdrop-blur-lg lg:h-[50vh]">
        <BackgroundGradientAnimation
          gradientBackgroundStart="#ddd"
          gradientBackgroundEnd="#fff"
          size="60%"
        ></BackgroundGradientAnimation>
        <div className="absolute z-50 select-none">
          <p className="py-4 text-center font-exo text-3xl md:text-left md:text-4xl lg:text-5xl">
            Explore our blogs
          </p>
          <p className="font-oxygen">
            All you need to know about salesforce and mindbee
          </p>
        </div>
      </section>
      <section id="latest-blog">
        <LatestBlogCard />
      </section>
      <section id="all-blog-cards" className="bg-[#ddd]">
        <AllBlogsSection />
      </section>
      <Footer />
    </main>
  );
}

export default Blogs;
