import Head from "next/head";
import type { Metadata } from "next";
import PieChart from "./Charts/piechart";
import HeroSection from "./components/HeroSection";
import OtherCourses from "./components/OtherCourses";
import {
  CourseDetailsProps,
  SalesforceAdminCourseDetails,
  SalesforceAppBuilderCourseDetails,
  SalesforceAIAssociateCourseDetails,
  SalesforcePlatformDeveloper1CourseDetails,
  SalesforcePlatformDeveloper2CourseDetails,
} from "./CourseData";
import KeyHighlights from "./components/KeyHighLight";
import CourseRegForm from "./components/CourseForm";

const slugMap: Record<string, CourseDetailsProps> = {
  "salesforce-admin": SalesforceAdminCourseDetails,
  "salesforce-app-builder": SalesforceAppBuilderCourseDetails,
  "salesforce-pd-1": SalesforcePlatformDeveloper1CourseDetails,
  "salesforce-pd-2": SalesforcePlatformDeveloper2CourseDetails,
  "salesforce-ai-associate": SalesforceAIAssociateCourseDetails,
};

type CoursesProps = {
  params: { slug: string };
};

export function generateMetadata({ params }: CoursesProps): Metadata {
  const course = slugMap[params.slug];
  return {
    title: `${course.title} - MindBee`,
    description: course.description,
  };
}
function Courses({ params }: { params: { slug: string } }) {
  const content = slugMap[params.slug];
  const otherContent = Object.keys(slugMap)
    .filter((slug) => slug !== params.slug)
    .map((slug) => slugMap[slug]);

  return (
    <section className="pt-[80px]">
      <main
        id="courses-hero"
        className="mx-auto my-10 flex w-full max-w-screen-2xl flex-col items-center lg:flex-row"
      >
        <HeroSection content={content} />
        <PieChart data={content.data} badge={content.badgeUrl} />
      </main>
      <KeyHighlights course={content.title} />
      <CourseRegForm />
      <section id="other-courses" className="w-full bg-secondary">
        <OtherCourses contents={otherContent} />
      </section>
    </section>
  );
}

export default Courses;
