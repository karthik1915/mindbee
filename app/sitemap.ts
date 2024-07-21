import { MetadataRoute } from "next";
import { courses } from "./courses/[slug]/CourseData";
import ConsultationContent from "./consultation/ConsultationContent";

const generateCourseSitemap = (): MetadataRoute.Sitemap => {
  return courses.map((course) => ({
    url: `https://mindbeesconsulting.com/courses/${course.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));
};

const generateConsultationSitemap = (): MetadataRoute.Sitemap => {
  return ConsultationContent.map((c) => ({
    url: `https://mindbeesconsulting.com/consultation/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));
};

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  return [
    {
      url: "https://mindbeesconsulting.com/",
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://mindbeesconsulting.com/internships/",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://mindbeesconsulting.com/blogs/",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...generateCourseSitemap(),
    ...generateConsultationSitemap(),
  ];
}
