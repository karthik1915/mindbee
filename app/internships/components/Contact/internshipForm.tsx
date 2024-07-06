import React from "react";

type Props = {};

const InternshipForm = (props: Props) => {
  return (
    <form className="mx-auto max-w-xl py-4">
      <div className="flex flex-col gap-4">
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          required
          aria-required="true"
          id="name"
          className="rounded-xl bg-secondary px-4 py-2"
          type="text"
          placeholder="Name"
        />

        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          required
          aria-required="true"
          id="email"
          className="rounded-xl bg-secondary px-4 py-2"
          type="email"
          placeholder="Email"
        />

        <label htmlFor="mobile" className="sr-only">
          Mobile
        </label>
        <input
          required
          aria-required="true"
          id="mobile"
          className="rounded-xl bg-secondary px-4 py-2"
          type="tel"
          placeholder="Mobile"
        />

        <label htmlFor="program" className="sr-only">
          Program
        </label>
        <select
          required
          aria-required="true"
          id="program"
          className="rounded-xl bg-secondary px-4 py-2"
        >
          <option value="" disabled selected>
            Select Program
          </option>
          <option value="salesforce-admin">Salesforce Admin</option>
          <option value="salesforce-app-builder">Salesforce App Builder</option>
          <option value="both">Both</option>
        </select>
      </div>

      <button
        type="submit"
        className="mt-4 w-44 rounded-xl bg-headline py-2 text-center text-white transition-colors duration-200 hover:bg-teal-800"
      >
        Send Request
      </button>
    </form>
  );
};

export default InternshipForm;
