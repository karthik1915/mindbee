import React from "react";
import { InternshipPrograms } from "./constants";
import { CalendarDays, Hourglass, Monitor } from "lucide-react";

type Props = {};

const Programs = (props: Props) => {
  return (
    <section className="mx-auto max-w-7xl py-10">
      <h1 className="text-center font-exo text-4xl font-semibold md:text-4xl">
        Internship Programs
      </h1>
      {InternshipPrograms.map((program) => {
        return (
          <>
            <div
              key={program.id}
              className="flex flex-col gap-4 px-3 pb-10 pt-16"
            >
              <div className="flex items-center justify-center gap-3">
                <span className="h-0.5 w-10 rounded-sm bg-headline" />
                <h3 className="text-center font-exo text-3xl font-bold">
                  {program.title}
                </h3>
                <span className="h-0.5 w-10 rounded-sm bg-headline" />
              </div>
              <div className="flex flex-wrap items-center justify-center gap-5 gap-y-4">
                <SpanCards
                  title="No of days"
                  value={program.durationInDays.toString()}
                  icon={<CalendarDays className="inline" color="#5f6c7b" />}
                />
                <SpanCards
                  title="Hours per Day"
                  value={program.HoursPerDay.toString()}
                  icon={<Hourglass className="inline" color="#5f6c7b" />}
                />
                <SpanCards
                  title="Methodology"
                  value="VILT"
                  icon={<Monitor className="inline" color="#5f6c7b" />}
                />
              </div>
              <div className="flex flex-col gap-x-5 gap-y-4 md:flex-row">
                <div className="space-y-3 rounded-xl border bg-yellow-100 px-4 py-4 shadow-md hover:shadow-inner md:px-8">
                  <h3 className="font-oxygen text-xl font-bold underline underline-offset-2 md:text-2xl">
                    Course Description
                  </h3>
                  <p className="md:text-lg">{program.courseDescription}</p>
                </div>
                <div className="space-y-3 rounded-xl border bg-emerald-100 px-4 py-4 shadow-md hover:shadow-inner md:px-8">
                  <h3 className="font-oxygen text-xl font-bold underline underline-offset-2 md:text-2xl">
                    Program Description
                  </h3>
                  <p className="md:text-lg">{program.ProgramDescription}</p>
                </div>
              </div>
              <div className="flex flex-col gap-x-5 gap-y-4 md:flex-row">
                <div className="flex-grow flex-col items-start justify-center rounded-xl px-3 md:flex md:border md:bg-blue-200 md:p-5 md:shadow-md md:hover:shadow-inner">
                  <h3 className="pb-4 text-center font-oxygen text-2xl font-bold underline underline-offset-2">
                    Course Outcomes
                  </h3>
                  <p className="text-subheadline">
                    By the end of the course, students will have gained
                    proficiency in the following key areas:
                  </p>
                </div>
                <ol className="list-inside list-disc list-image-[url(/check.svg)] space-y-2 rounded-xl px-3 pl-6 text-base md:border md:bg-fuchsia-100 md:py-5 md:text-lg md:shadow-md md:hover:shadow-inner">
                  {program.outcomes.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ol>
              </div>
              <OutlineTable content={program.outline} />
              <div className="mt-4 flex flex-wrap items-center justify-evenly gap-y-6">
                <div className="px-4 text-center">
                  <p>To view the full schedule, download the curriculum:</p>
                  <a
                    href={program.pdfLink}
                    className="text-blue-500 underline hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download Curriculum
                  </a>
                </div>
                <div className="px-4 text-center">
                  <p>To get More Details Regarding this Internship</p>
                  <a
                    href="#internship-contact"
                    className="text-blue-500 underline hover:text-blue-700"
                  >
                    Contact us
                  </a>
                </div>
              </div>
            </div>
            <hr />
          </>
        );
      })}
    </section>
  );
};

const OutlineTable = ({ content }: { content: Map<string, string[]> }) => {
  return (
    <table className="mt-4 w-full border-collapse border border-gray-200">
      <thead>
        <tr className="border-b border-gray-300 bg-gray-100">
          <th className="border-r border-gray-300 p-2">Day</th>
          <th className="p-2">Topics</th>
        </tr>
      </thead>
      <tbody>
        {Array.from(content.entries()).map(([day, topics], index) => (
          <tr key={index} className="border-b border-gray-300">
            <td className="border-r border-gray-300 p-2">{day}</td>
            <td className="p-2">
              <ol className="ml-4 list-disc">
                {topics.map((topic, idx) => (
                  <li key={idx}>{topic}</li>
                ))}
              </ol>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const SpanCards = ({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: JSX.Element;
}) => {
  return (
    <div className="rounded-full border border-subheadline bg-gradient-to-br from-red-200 px-3 py-2 font-semibold shadow-md">
      {icon} {title} : {value}
    </div>
  );
};

export default Programs;
