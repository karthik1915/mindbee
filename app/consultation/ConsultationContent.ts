import React from "react";
import SalesCloud from "./[slug]/slug_components/SalesCloud";
import ServiceCloud from "./[slug]/slug_components/ServiceCloud";
import ExperienceCloud from "./[slug]/slug_components/ExperienceCloud";
import HealthCloud from "./[slug]/slug_components/HealthCloud";
import FinanceCloud from "./[slug]/slug_components/FinanceClound";
import EducationCloud from "./[slug]/slug_components/EducationCloud";
import NonProfitCloud from "./[slug]/slug_components/NonProfitCloud";

export interface ConsulatationProps {
  id: number;
  title: string;
  imgUrl: string;
  subtitle: string;
  description: string;
  slug: string;
  link: string;
  Content: () => React.ReactNode;
}

const ConsulatationContent: ConsulatationProps[] = [
  {
    id: 1,
    title: "Salesforce Sales Cloud",
    imgUrl: "salesforce_sales_cloud.jpg",
    subtitle: "Boost Your Sales Performance with Expert Guidance",
    description:
      "Leverage our expertise in Salesforce Sales Cloud to optimize your sales processes, improve lead management, and increase your sales team's productivity. Our tailored consultation services help you get the most out of Salesforce, driving your business growth.",
    slug: "salesforce-sales-cloud",
    link: "/consultation/salesforce-sales-cloud",
    Content: SalesCloud,
  },
  {
    id: 2,
    title: "Salesforce Service Cloud",
    imgUrl: "salesforce_service_cloud.jpg",
    subtitle: "Enhance Customer Support with Advanced Service Solutions",
    description:
      "With Salesforce Service Cloud, transform your customer service operations by providing faster, smarter, and more personalized support. Our consultation helps you leverage advanced features to resolve issues quickly, enhance customer satisfaction, and streamline service workflows.",
    slug: "salesforce-service-cloud",
    link: "/consultation/salesforce-service-cloud",
    Content: ServiceCloud,
  },
  {
    id: 3,
    title: "Salesforce Experience Cloud",
    imgUrl: "salesforce_experience_cloud.jpg",
    subtitle: "Create Engaging Customer Experiences with Community Building",
    description:
      "Salesforce Experience Cloud allows you to build customized communities for customers, partners, and employees. Our expert consultation helps you design and implement interactive and engaging experiences that drive collaboration, increase engagement, and foster a sense of community.",
    slug: "salesforce-experience-cloud",
    link: "/consultation/salesforce-experience-cloud",
    Content: ExperienceCloud,
  },
  {
    id: 4,
    title: "Salesforce Health Cloud",
    imgUrl: "salesforce_health_cloud.jpg",
    subtitle: "Transform Healthcare with Patient-Centric Solutions",
    description:
      "Optimize healthcare delivery and patient management with Salesforce Health Cloud. Our consultation services assist you in implementing patient-centric solutions, improving care coordination, and enhancing patient engagement, ensuring better health outcomes.",
    slug: "salesforce-health-cloud",
    link: "/consultation/salesforce-health-cloud",
    Content: HealthCloud,
  },
  {
    id: 5,
    title: "Salesforce Financial Services Cloud",
    imgUrl: "salesforce_financial_services_cloud.jpg",
    subtitle: "Drive Financial Success with Tailored Cloud Solutions",
    description:
      "Salesforce Financial Services Cloud offers specialized tools for managing customer relationships in the financial sector. Our consultation services help you maximize the platform's capabilities to improve client interactions, streamline financial operations, and drive business growth.",
    slug: "salesforce-financial-services-cloud",
    link: "/consultation/salesforce-financial-services-cloud",
    Content: FinanceCloud,
  },
  {
    id: 6,
    title: "Salesforce Education Cloud",
    imgUrl: "salesforce_education_cloud.jpg",
    subtitle: "Empower Education Institutions with Cloud Technology",
    description:
      "Enhance educational experiences and administration with Salesforce Education Cloud. Our expert consultation helps educational institutions leverage the platform to manage student relationships, streamline admissions, and improve overall operational efficiency.",
    slug: "salesforce-education-cloud",
    link: "/consultation/salesforce-education-cloud",
    Content: EducationCloud,
  },
  {
    id: 7,
    title: "Salesforce Non-Profit Cloud",
    imgUrl: "salesforce_non_profit_cloud.jpg",
    subtitle: "Advance Non-Profit Missions with Integrated Solutions",
    description:
      "Salesforce Non-Profit Cloud provides powerful tools for managing donor relationships, fundraising, and program delivery. Our consultation services help non-profit organizations implement effective solutions to achieve their mission, increase donor engagement, and optimize resource management.",
    slug: "salesforce-non-profit-cloud",
    link: "/consultation/salesforce-non-profit-cloud",
    Content: NonProfitCloud,
  },
];

export default ConsulatationContent;
