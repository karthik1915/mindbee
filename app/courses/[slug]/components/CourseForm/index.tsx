import { Switch } from "@/components/ui/switch";
import React from "react";

type Props = {};

function CourseRegForm({}: Props) {
  return (
    <section className="mx-auto my-10 max-w-screen-2xl">
      <h1 className="text-center font-exo text-4xl font-semibold">
        Request a Enquiry
      </h1>
      <p className="px-4 py-3 text-center text-subheadline">
        After Registering with this the below form you will recieve call or
        Email from us, if you have any query feel free to ask it in message.
      </p>
      <form className="grid gap-x-4 gap-y-8 p-4 md:grid-cols-2">
        <div className="col-span-2 flex flex-col justify-between gap-1 space-y-2 md:col-span-1">
          <input
            required
            aria-required
            className="rounded-xl bg-secondary px-4 py-3.5"
            type="text"
            placeholder="Name"
          />
          <input
            required
            aria-required
            className="rounded-xl bg-secondary px-4 py-3.5"
            type="email"
            placeholder="Email"
          />
          <input
            required
            aria-required
            className="rounded-xl bg-secondary px-4 py-3.5"
            type="tel"
            placeholder="Mobile"
          />
        </div>
        <div className="col-span-2 flex flex-col gap-1 md:col-span-1">
          <textarea
            required
            aria-required
            className="h-full min-h-28 w-full rounded-xl bg-secondary px-4 py-2"
            placeholder="Message"
          />
        </div>
        <div className="col-span-2 flex items-center justify-center space-x-2">
          <label htmlFor="receive-future-updates" className="text-lg">
            Recieve Future Updates
          </label>
          <Switch title="switch" className="bg-secondary" id="airplane-mode" />
        </div>
        <button
          className="col-span-2 mx-auto w-44 rounded-xl bg-headline py-2 text-white transition-colors duration-200 hover:bg-teal-800"
          type="submit"
        >
          Request Enquiry
        </button>
      </form>
    </section>
  );
}

export default CourseRegForm;
