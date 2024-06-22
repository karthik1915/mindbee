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
    courseLogoUrl: "/badges/salesforce_admin_badge.png",
    coursePoints: [
      "Configuration and Setup",
      "Object Manager and Lightning App Builder",
      "Sales and Marketing Applications",
      "Service and Support Applications",
    ],
    courseLink: "/courses/salesforce-admin",
    noOfChapters: 12,
    hoursToFinish: 3.5,
  },
  {
    id: "course-3",
    title: "Salesforce App Builder",
    enrollment: "10k",
    stars: 4.8,
    imageUrl: "/salesforce_appbuilder_image.jpg",
    courseLogoUrl: "/badges/salesforce_app_builder_badge.png",
    coursePoints: [
      "Business Logic and Process Automation",
      "Salesforce Fundamentals",
      "Data Modeling and Management",
      "User Interface",
    ],
    courseLink: "/courses/salesforce-app-builder",
    noOfChapters: 15,
    hoursToFinish: 4.5,
  },
  {
    id: "course-4",
    title: "Salesforce Platform developer 1",
    enrollment: "10k",
    stars: 4.8,
    imageUrl: "/salesforce_platform_developer_1_image.jpg",
    courseLogoUrl: "/badges/salesforce_pd_1_badge.png",
    coursePoints: [
      "Process Automation and Logic",
      "User Interface",
      "Developer Fundamentals",
    ],
    courseLink: "/courses/salesforce-pd-1",
    noOfChapters: 19,
    hoursToFinish: 4.6,
  },
  {
    id: "course-5",
    title: "Salesforce Platform Developer 2",
    enrollment: "10k",
    stars: 4.8,
    imageUrl: "/salesforce_platform_developer_2_image.jpg",
    courseLogoUrl: "/badges/salesforce_pd_2_badge.png",
    coursePoints: [
      "User Interface",
      "Testing, Debugging, and Deployment",
      "Process Automation, Logic, and Integration",
    ],
    noOfChapters: 21,
    hoursToFinish: 5,
    courseLink: "/courses/salesforce-pd-2",
  },
  {
    id: "course-6",
    title: "Salesforce AI Associate",
    enrollment: "10k",
    stars: 4.8,
    imageUrl: "/salesforce_system_architect_image.jpg",
    courseLogoUrl: "/badges/salesforce_ai_associate_badge.png",
    coursePoints: [
      "Salesforce Ecosystem",
      "Navigation",
      "Data Model",
      "Reports & Dashboards",
    ],
    courseLink: "/courses/salesforce-ai-associate",
    noOfChapters: 16,
    hoursToFinish: 5.4,
  },
];
