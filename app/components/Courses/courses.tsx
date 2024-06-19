export interface courseProps {
  id: string;
  title: string;
  enrollment: string;
  stars: number;
  imageUrl: string;
  noOfChapters: number;
  hoursToFinish: number;
  courseLogoUrl: string;
  coursePoints: string[];
  courseLink: string;
}

export const CoursesList: courseProps[] = [
  {
    id: "course-1",
    title: "Salesforce admin",
    enrollment: "12k",
    stars: 4.7,
    imageUrl: "/salesforce_admin_image.jpg",
    courseLogoUrl: "/salesforce_admin_logo_image.png",
    coursePoints: [
      "Salesforce configuration information",
      "Security and automation process",
    ],
    courseLink: "/courses",
    noOfChapters: 12,
    hoursToFinish: 3.5,
  },
  // {
  //   id: "course-2",
  //   title: "Salesforce developer",
  //   enrollment: "8k",
  //   stars: 4.9,
  //   imageUrl: "/salesforce_developer_image.jpg",
  //   courseLogoUrl: "/salesforce_developer_logo_image.png",
  //   coursePoints: [
  //     "Salesforce configuration information",
  //     "Security and automation process",
  //   ],
  //   courseLink: "/courses",
  // },
  {
    id: "course-3",
    title: "Salesforce App Builder",
    enrollment: "10k",
    stars: 4.8,
    imageUrl: "/salesforce_appbuilder_image.jpg",
    courseLogoUrl: "/salesforce_appbuilder_logo_image.png",
    coursePoints: [
      "Salesforce and Data Modelling",
      "Data Security Model",
      "Business Logic and process Automation",
    ],
    courseLink: "/courses",
    noOfChapters: 15,
    hoursToFinish: 4.5,
  },
  {
    id: "course-4",
    title: "Salesforce Platform developer 1",
    enrollment: "10k",
    stars: 4.8,
    imageUrl: "/salesforce_platform_developer_1_image.jpg",
    courseLogoUrl: "/salesforce_appbuilder_logo_image.png",
    coursePoints: [
      "Salesforce and Data Modelling",
      "Data Security Model",
      "Business Logic and process Automation",
    ],
    courseLink: "/courses",
    noOfChapters: 19,
    hoursToFinish: 4.6,
  },
  {
    id: "course-5",
    title: "Salesforce Platform Developer 2",
    enrollment: "10k",
    stars: 4.8,
    imageUrl: "/salesforce_platform_developer_2_image.jpg",
    courseLogoUrl: "/salesforce_appbuilder_logo_image.png",
    coursePoints: [
      "Salesforce and Data Modelling",
      "Data Security Model",
      "Business Logic and process Automation",
    ],
    noOfChapters: 21,
    hoursToFinish: 5,
    courseLink: "/courses",
  },
  {
    id: "course-6",
    title: "Salesforce System Architect",
    enrollment: "10k",
    stars: 4.8,
    imageUrl: "/salesforce_system_architect_image.jpg",
    courseLogoUrl: "/salesforce_appbuilder_logo_image.png",
    coursePoints: [
      "Salesforce and Data Modelling",
      "Data Security Model",
      "Business Logic and process Automation",
    ],
    courseLink: "/courses",
    noOfChapters: 16,
    hoursToFinish: 5.4,
  },
];
