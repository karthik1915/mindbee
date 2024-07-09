import React from "react";
import CourseForm from "./courseform";

type Props = {
  formName: string;
};

function CourseRegForm({ formName }: Props) {
  return (
    <section className="mx-auto my-10 max-w-screen-2xl">
      <h1 className="text-center font-exo text-4xl font-semibold">
        Request a Enquiry
      </h1>
      <p className="px-4 py-3 text-center text-subheadline">
        After Registering with this the below form you will recieve call or
        Email from us, if you have any query feel free to ask it in message.
      </p>
      <CourseForm formName={formName} />
    </section>
  );
}

export default CourseRegForm;
