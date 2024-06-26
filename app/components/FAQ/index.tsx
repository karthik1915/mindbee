import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordian";
type Props = {};

function FAQSection({}: Props) {
  return (
    <section className="relative mx-auto my-12 flex w-full max-w-6xl flex-col items-center px-4 lg:flex-row">
      <div className="w-full flex-grow px-3 py-10 lg:py-0">
        <p className="text-center font-exo text-4xl font-semibold text-headline lg:text-left">
          Frequently asked questions
        </p>
        <p className="text-center font-oxygen text-xl text-subheadline lg:text-left">
          Got Questions? We&apos;ve Got Answers!
        </p>
        <Accordion type="single" collapsible className="w-full py-3 lg:w-3/4">
          <AccordionItem value="item-1">
            <AccordionTrigger>Why should I learn Salesforce?</AccordionTrigger>
            <AccordionContent>
              Salesforce is a leading customer relationship management (CRM)
              platform that enables businesses to manage their customer data,
              sales processes, and marketing efforts efficiently. Learning
              Salesforce can open up numerous career opportunities in various
              industries, as many organizations rely on it to streamline their
              operations and improve customer engagement.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How Valuable these courses are?</AccordionTrigger>
            <AccordionContent>
              We offer a range of courses tailored to different levels of
              expertise, including Salesforce Administrator, Salesforce
              Developer, Salesforce Consultant, and specialized courses for
              Sales Cloud, Service Cloud, and Marketing Cloud. Each course is
              designed to provide comprehensive knowledge and hands-on
              experience.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Do I need any prior experience for this?
            </AccordionTrigger>
            <AccordionContent>
              No prior experience is required for our introductory courses.
              However, for advanced courses, some basic understanding of
              Salesforce or general IT concepts might be beneficial. We
              recommend starting with our beginner courses if you are new to
              Salesforce.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="">
        <Image
          src="/faq/faq_thinking.jpg"
          alt="thinking image"
          width={350}
          height={450}
        />
      </div>
    </section>
  );
}

export default FAQSection;
