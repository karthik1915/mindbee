import Footer from "@/app/components/footer";
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

const slugMap: Record<string, CourseDetailsProps> = {
  "salesforce-admin": SalesforceAdminCourseDetails,
  "salesforce-app-builder": SalesforceAppBuilderCourseDetails,
  "salesforce-pd-1": SalesforcePlatformDeveloper1CourseDetails,
  "salesforce-pd-2": SalesforcePlatformDeveloper2CourseDetails,
  "salesforce-ai-associate": SalesforceAIAssociateCourseDetails,
};

function Courses({ params }: { params: { slug: string } }) {
  const content = slugMap[params.slug];
  const otherContent = Object.keys(slugMap)
    .filter((slug) => slug !== params.slug)
    .map((slug) => slugMap[slug]);

  return (
    <main className="pt-[80px]">
      <section
        id="courses-hero"
        className="mx-auto my-10 flex w-full max-w-screen-2xl flex-col items-center lg:flex-row"
      >
        <HeroSection content={content} />
        <PieChart data={content.data} />
      </section>
      <section id="other-courses" className="w-full bg-secondary">
        <OtherCourses contents={otherContent} />
      </section>
      <Footer />
    </main>
  );
}

export default Courses;
