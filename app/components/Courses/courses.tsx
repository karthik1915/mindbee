export interface courseProps {
  id: number;
  title: string;
  enrollment: string;
  stars: number;
  imageUrl: string;
  courseLogoUrl: string;
  coursePoints: string[];
  courseLink: string;
}

export const CoursesList: courseProps[] = [
  {
    id: 1,
    title: "Salesforce admin",
    enrollment: "12k",
    stars: 4,
    imageUrl: "/salesforce_admin_image.jpg",
    courseLogoUrl: "/salesforce_admin_logo_image.png",
    coursePoints: [
      "Salesforce configuration information",
      "Security and automation process",
    ],
    courseLink: "/courses",
  },
  {
    id: 2,
    title: "Salesforce developer",
    enrollment: "8k",
    stars: 4,
    imageUrl: "/salesforce_developer_image.jpg",
    courseLogoUrl: "/salesforce_developer_logo_image.png",
    coursePoints: [
      "Salesforce configuration information",
      "Security and automation process",
    ],
    courseLink: "/courses",
  },
];
