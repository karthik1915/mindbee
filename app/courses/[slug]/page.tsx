import { notFound } from "next/navigation";
import PieChart from "./Charts/piechart";
import HeroSection from "./components/HeroSection";
import OtherCourses from "./components/OtherCourses";
import KeyHighlights from "./components/KeyHighLight";
import CourseRegForm from "./components/CourseForm";
import courses from "./CourseData";

export async function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
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
