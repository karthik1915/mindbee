import React from "react";
import OverViewCard from "./overviewCard";

type Props = {};

function Overview({}: Props) {
  return (
    <section className="z-10 mx-auto my-10 max-w-7xl">
      <h2 className="px-3 pb-16 pt-4 text-center font-exo text-3xl font-semibold text-headline md:text-4xl">
        Why Choose Our Internships?
      </h2>
      <div className="flex flex-wrap items-center justify-evenly gap-x-4 gap-y-7 px-3">
        <OverViewCard
          title="Online Classes"
          paragraph="Engaging and structured online training sessions led by industry experts."
        />
        <OverViewCard
          title="Skills"
          paragraph="Learn and master the most sought-after skills in the industry through practical projects."
        />
        <OverViewCard
          title="Certification"
          paragraph="Receive a certificate upon completion, enhancing your resume and career prospects."
        />
      </div>
    </section>
  );
}

export default Overview;
