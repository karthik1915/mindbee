import { notFound } from "next/navigation";
import PieChart from "./Charts/piechart";
import HeroSection from "./components/HeroSection";
import OtherCourses from "./components/OtherCourses";
import KeyHighlights from "./components/KeyHighLight";
import CourseRegForm from "./components/CourseForm";
import courses from "./CourseData";
import { Metadata } from "next/types";
import NavBar from "@/app/components/Navbar";

export async function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const course = courses.find((c) => c.slug === params.slug);
  return {
    title: `${course?.title} - MindBee`,
    description: `Explore ${course?.title} Course provided by Mindbees`,
    openGraph: {
      url: `https://mindbeesconsulting.com/courses/${course?.slug}`,
      siteName: "Mindbee Consulting",
      title: `${course?.title} - MindBee`,
      description: `Explore ${course?.title} Course provided by Mindbees`,
      images: [
        {
          url: course?.ogImageLink!,
          width: 1200,
          height: 630,
          alt: `${course?.title} - MindBee`,
        },
      ],
      type: "website",
    },
  };
}

function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const courseData = courses.find((c) => c.slug === slug);
  const otherCourseData = courses.filter((c) => c.slug !== slug);

  if (!courseData) {
    notFound();
  }

  return (
    <>
      <header>
        <NavBar />
        <div className="mx-auto my-10 flex w-full max-w-screen-2xl flex-col items-center pt-[80px] lg:flex-row">
          <HeroSection content={courseData} otherCourseData={otherCourseData} />
          <PieChart data={courseData.data} badge={courseData.badgeUrl} />
        </div>
      </header>
      <main id="courses-hero">
        <KeyHighlights course={courseData.title} />
        <CourseRegForm formName={courseData.formName} />
        <section
          role="region"
          id="other-courses"
          className="w-full bg-secondary"
        >
          <OtherCourses contents={otherCourseData} />
        </section>
      </main>
    </>
  );
}

export default Page;
