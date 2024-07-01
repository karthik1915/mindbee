import React from "react";

type Props = {};

const ContactForm = (props: Props) => {
  return (
    <form className="grid gap-x-4 gap-y-8 p-4 md:grid-cols-2">
      <div className="col-span-2 flex flex-col justify-between gap-1 space-y-2 md:col-span-1">
        <input
          required
          aria-required
          className="rounded-xl bg-secondary px-4 py-2"
          type="text"
          placeholder="Name"
        />
        <input
          required
          aria-required
          className="rounded-xl bg-secondary px-4 py-2"
          type="email"
          placeholder="Email"
        />
        <input
          required
          aria-required
          className="rounded-xl bg-secondary px-4 py-2"
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

      <button
        className="col-span-2 mx-auto w-44 rounded-xl bg-headline py-2 text-white transition-colors duration-200 hover:bg-teal-800"
        type="submit"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
