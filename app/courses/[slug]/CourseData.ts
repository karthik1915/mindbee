import {
  courseDataType,
  SalesForceAdminData,
  SalesForceAppBuilderData,
  SalesforcePlatformDeveloper1,
  SalesforcePlatformDeveloper2,
} from "./Charts/data";

export interface CourseDetailsProps {
  id: number;
  title: string;
  description: string;
  descriptionPoints: string[];
  imageUrl: string;
  stars: string;
  rating: string;
  link: string;
  data: courseDataType[];
}

export const SalesforceAdminCourseDetails: CourseDetailsProps = {
  id: 1,
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

  link: "/courses/salesforce-admin",
  data: SalesForceAdminData,
};

export const SalesforceAppBuilderCourseDetails: CourseDetailsProps = {
  id: 2,
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
  data: SalesForceAppBuilderData,
};

export const SalesforceAssociate: CourseDetailsProps = {
  id: 3,
  title: "Salesforce Associate",
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
  link: "/courses/salesforce-associate",
  data: SalesForceAppBuilderData,
};

export const SalesforcePlatformDeveloper1CourseDetails: CourseDetailsProps = {
  id: 4,
  title: "Salesforce Platform Developer 1",
  description:
    "A Salesforce Platform Developer 1 specializes in building custom applications on the Salesforce platform using Apex and Visualforce. This course will equip you with the skills to develop custom business logic, create sophisticated user interfaces, and manage Salesforce data models effectively. You will also learn to optimize application performance, ensuring seamless business operations.",
  descriptionPoints: [
    "Business Logic and Process Automation",
    "Salesforce Fundamentals",
    "Data Modeling and Management",
    "User Interface",
    "App Deployment",
  ],
  imageUrl: "/salesforce_platform_developer_1_image.jpg",
  rating: "4.6",
  stars: "4.9",
  link: "/courses/salesforce-pd-1",
  data: SalesforcePlatformDeveloper1,
};

export const SalesforcePlatformDeveloper2CourseDetails: CourseDetailsProps = {
  id: 5,
  title: "Salesforce Platform Developer 2",
  description:
    "A Salesforce Platform Developer 2 advances your expertise in complex Apex and Visualforce programming. This course focuses on integrating Salesforce with external systems, implementing advanced coding techniques, and optimizing application performance. You will gain the ability to troubleshoot and enhance Salesforce applications, ensuring they meet high-performance standards and business needs.",
  descriptionPoints: [
    "Process Automation and Logic",
    "User Interface",
    "Developer Fundamentals",
    "Testing, Debugging, and Deployment",
  ],
  imageUrl: "/salesforce_platform_developer_2_image.jpg",
  rating: "4.6",
  stars: "4.9",
  link: "/courses/salesforce-pd-2",
  data: SalesforcePlatformDeveloper2,
};
