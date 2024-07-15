import { notFound } from "next/navigation";
import PieChart from "./Charts/piechart";
import HeroSection from "./components/HeroSection";
import OtherCourses from "./components/OtherCourses";
import KeyHighlights from "./components/KeyHighLight";
import CourseRegForm from "./components/CourseForm";
import courses from "./CourseData";
import { Metadata } from "next/types";

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
    <section className="pt-[80px]">
      <main
        id="courses-hero"
        className="mx-auto my-10 flex w-full max-w-screen-2xl flex-col items-center lg:flex-row"
      >
        <HeroSection content={courseData} otherCourseData={otherCourseData} />
        <PieChart data={courseData.data} badge={courseData.badgeUrl} />
      </main>
      <KeyHighlights course={courseData.title} />
      <CourseRegForm formName={courseData.formName} />
      <section id="other-courses" className="w-full bg-secondary">
        <OtherCourses contents={otherCourseData} />
      </section>
    </section>
  );
}

export default Page;
