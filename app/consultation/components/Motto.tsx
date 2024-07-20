import React from "react";

type Props = {};

const Motto = (props: Props) => {
  return (
    <section className="relative mx-auto my-14 max-w-screen-lg">
      <div className="relative z-10 rounded-xl bg-primary px-6 py-12">
        <div className="absolute inset-0 z-[-1] translate-x-2 translate-y-2 rounded-xl bg-primary/60"></div>
        <p className="text-pretty text-center text-lg font-semibold md:text-2xl lg:text-3xl">
          Mindbees Consultation is a one-stop shop for customer relationship
          management (CRM) needs, offering Salesforce Cloud support, training,
          and strategic support. We provide expert, certified CRM services, both
          executional and architectural design.
        </p>
      </div>
    </section>
  );
};

export default Motto;
