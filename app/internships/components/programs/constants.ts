interface InternshipProgramProps {
  id: number;
  title: string;
  courseDescription: string;
  ProgramDescription: string;
  durationInDays: number;
  HoursPerDay: number;
  outcomes: string[];
  outline: Map<string, string[]>;
  pdfLink: string;
}

export const InternshipPrograms: InternshipProgramProps[] = [
  {
    id: 1,
    title: "Salesforce Admin Internship",
    courseDescription:
      "Salesforce Administrator training provides individuals with the necessary skills to manage and customize Salesforce applications. As a Salesforce Administrator, you'll learn to configure and maintain Salesforce, manage security settings, and automate processes.",
    ProgramDescription:
      "In our Salesforce Administrator training, we offer a transformative learning experience for individuals seeking to become skilled Salesforce administrators and for those who a want to enter into the Salesforce ecosystem.",
    durationInDays: 15,
    HoursPerDay: 1.4,
    outcomes: [
      "Customize your application, including page layouts, fields, tabs, and business processes",
      "Create a secure Salesforce environment",
      "Maintain and import clean data",
      "Create high-value reports and dashboards",
      "Set up workflow automation",
    ],
    outline: new Map([
      [
        "Day 1",
        [
          "Could Computing Concepts",
          "Salesforce & CRM Basics",
          "Creating Salesforce Developer Account",
        ],
      ],
      ["Day 2", ["Data Modelling & UI Customization"]],
    ]),
    pdfLink:
      "https://drive.google.com/file/d/1YPqqIKo20yZaX8OtUbIyWbEUIJTSrXqe/view",
  },
  {
    id: 2,
    title: "Salesforce App Builder Internship",
    courseDescription:
      "Master the creation of custom applications using Salesforce's low-code platform to efficiently design intuitive user interfaces and implement automated business processes. Acquire skills to develop and manage comprehensive data models, ensuring effective data organization and smooth integration across various systems",
    ProgramDescription:
      "In our Salesforce Appbuilder training, we offer a transformative learning experience for individuals seeking to become skilled Salesforce developer and for those who want to enter into salesforce ecosystem",
    outcomes: [
      "Customize your application, including page layouts, fields, tabs, and business processes",
      "Create a secure Salesforce environment",
      "Maintain and import clean data",
      "Create high-value reports and dashboards",
      "Set up workflow automation",
      "Develop automated workflows to streamline business operations",
      "Implement approval processes to ensure consistency and compliance",
      "Configure alerts and triggers to automate notifications and tasks",
    ],
    outline: new Map([
      [
        "Day 1,2",
        [
          "Could Computing Concepts",
          "Salesforce & CRM Basic",
          "Creating Salesforce Developer Account",
        ],
      ],
      ["Day-3,4,5", ["Data Modelling & UI Customization"]],
    ]),
    durationInDays: 10,
    HoursPerDay: 1.5,
    pdfLink:
      "https://drive.google.com/file/d/1GxZKyaHtzgIlqRl6j6D1QLEqIT4E9hao/view?usp=drivesdk",
  },
];
