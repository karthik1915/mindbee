import {
  courseDataType,
  SalesForceAdminData,
  SalesforceAIAssociateData,
  SalesForceAppBuilderData,
  SalesforcePlatformDeveloper1Data,
  SalesforcePlatformDeveloper2Data,
} from "./Charts/data";

export interface CourseDetailsProps {
  id: number;
  ogImageLink: string;
  slug: string;
  title: string;
  description: string;
  descriptionPoints: string[];
  imageUrl: string;
  stars: string;
  rating: string;
  link: string;
  badgeUrl: string;
  data: courseDataType[];
  formName: string;
}

export const courses: CourseDetailsProps[] = [
  {
    id: 1,
    slug: "salesforce-admin",
    title: "Salesforce Admin",
    description:
      "A Salesforce Admin manages and customizes the Salesforce CRM platform. They handle user management, security, workflow automation, and data integrity. This course teaches you to configure Salesforce, optimize user performance, and improve business operations, boosting your career prospects.",
    descriptionPoints: [
      "Configuration and Setup",
      "Object Manager and Lightning App Builder",
      "Sales and Marketing Applications",
      "Service and Support Applications",
      "Productivity and Collaboration",
      "Data and Analytics Management",
      "Workflow/Process Automation",
    ],
    imageUrl: "/salesforce_admin_image.jpg",
    rating: "4.6",
    stars: "4.9",
    badgeUrl: "/badges/salesforce_admin_badge.png",
    link: "/courses/salesforce-admin",
    data: SalesForceAdminData,
    formName: "salesforce-admin",
    ogImageLink:
      "https://cz9aqx1sonm5juhb.public.blob.vercel-storage.com/opengraph/salesforce_admin_og-KPpqPc27TQGFeqdZC5woBYVD2vhkmU.png",
  },
  {
    id: 2,
    slug: "salesforce-app-builder",
    title: "Salesforce App Builder",
    description:
      "A Salesforce App Builder specializes in designing, building, and deploying custom applications on the Salesforce platform using declarative features. This course will teach you how to create custom objects, build reports and dashboards, and automate business processes without coding. You will learn to leverage Salesforce’s point-and-click tools to meet unique business requirements, enhancing operational efficiency and user satisfaction.",
    descriptionPoints: [
      "Business Logic and Process Automation",
      "Salesforce Fundamentals",
      "Data Modeling and Management",
      "User Interface",
      "App Deployment",
    ],
    imageUrl: "/salesforce_appbuilder_image.jpg",
    rating: "4.6",
    stars: "4.9",
    link: "/courses/salesforce-app-builder",
    badgeUrl: "/badges/salesforce_app_builder_badge.png",
    data: SalesForceAppBuilderData,
    formName: "salesforce-app-builder",
    ogImageLink:
      "https://cz9aqx1sonm5juhb.public.blob.vercel-storage.com/opengraph/salesforce_app_builder_og-IipYQLo42kv1dfoelXM7i2apSAcq2b.png",
  },
  {
    id: 3,
    slug: "salesforce-ai-associate",
    title: "Salesforce AI Associate",
    description:
      "A Salesforce Associate is an entry-level professional who supports the implementation and management of Salesforce solutions within an organization. This course covers the fundamentals of Salesforce, including navigation, data management, and basic CRM concepts. By completing this course, you will be prepared to assist with user support, data integrity, and simple customizations, providing a solid foundation for a career in Salesforce administration or development.",
    descriptionPoints: [
      "Salesforce Ecosystem",
      "Navigation",
      "Data Model",
      "Reports & Dashboards",
    ],
    imageUrl: "/salesforce_system_architect_image.jpg",
    rating: "4.6",
    stars: "4.9",
    badgeUrl: "/badges/salesforce_ai_associate_badge.png",
    link: "/courses/salesforce-ai-associate",
    data: SalesforceAIAssociateData,
    formName: "salesforce-ai-associate",
    ogImageLink:
      "https://cz9aqx1sonm5juhb.public.blob.vercel-storage.com/opengraph/salesforce_ai_associate_og-eEeK0XRZQDGeNfqsDkz8UA0myrwyF6.png",
  },
  {
    id: 4,
    slug: "salesforce-pd-1",
    title: "Salesforce Platform Developer 1",
    description:
      "A Salesforce Platform Developer 1 specializes in building custom applications on the Salesforce platform using Apex and Visualforce. This course will equip you with the skills to develop custom business logic, create sophisticated user interfaces, and manage Salesforce data models effectively. You will also learn to optimize application performance, ensuring seamless business operations.",
    descriptionPoints: [
      "Process Automation and Logic",
      "User Interface",
      "Developer Fundamentals",
      "Testing, Debugging, and Deployment",
    ],
    imageUrl: "/salesforce_platform_developer_1_image.jpg",
    rating: "4.6",
    stars: "4.9",
    link: "/courses/salesforce-pd-1",
    badgeUrl: "/badges/salesforce_pd_1_badge.png",
    data: SalesforcePlatformDeveloper1Data,
    formName: "salesforce-pd-1",
    ogImageLink:
      "https://cz9aqx1sonm5juhb.public.blob.vercel-storage.com/opengraph/salesforce_pd1_og-lTJJrAIdHiAvVWByBoLbyrskPqJTuR.png",
  },
  {
    id: 5,
    slug: "salesforce-pd-2",
    title: "Salesforce Platform Developer 2",
    description:
      "A Salesforce Platform Developer 2 advances your expertise in complex Apex and Visualforce programming. This course focuses on integrating Salesforce with external systems, implementing advanced coding techniques, and optimizing application performance. You will gain the ability to troubleshoot and enhance Salesforce applications, ensuring they meet high-performance standards and business needs.",
    descriptionPoints: [
      "User Interface",
      "Testing, Debugging, and Deployment",
      "Process Automation, Logic, and Integration",
      "Performance",
      "Advanced Developer Fundamentals",
    ],
    imageUrl: "/salesforce_platform_developer_2_image.jpg",
    rating: "4.6",
    stars: "4.9",
    link: "/courses/salesforce-pd-2",
    badgeUrl: "/badges/salesforce_pd_2_badge.png",
    data: SalesforcePlatformDeveloper2Data,
    formName: "salesforce-pd-2",
    ogImageLink:
      "https://cz9aqx1sonm5juhb.public.blob.vercel-storage.com/opengraph/salesforce_pd2_og-dzrur8eHEWk4c2izvf7IYuZ7GYo1lV.png",
  },
];
export default courses;
