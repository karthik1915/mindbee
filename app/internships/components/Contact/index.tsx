import React from "react";
import InternshipForm from "./internshipForm";

type Props = {};

function InternshipContact({}: Props) {
  return (
    <section id="internship-contact" className="mx-auto max-w-7xl px-3 pb-12">
      <h3 className="py-3 text-center font-exo text-3xl font-semibold text-headline md:text-4xl">
        Request a Enquiry
      </h3>
      <InternshipForm />
    </section>
  );
}

export default InternshipContact;
