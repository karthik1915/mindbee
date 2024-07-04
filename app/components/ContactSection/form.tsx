import React from "react";

const ContactForm = () => {
  return (
    <form className="grid gap-4 p-4 md:grid-cols-2">
      <div className="col-span-2 flex flex-col gap-2 md:col-span-1">
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
      </div>

      <div className="col-span-2 flex flex-col gap-2 md:col-span-1">
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          required
          aria-required="true"
          id="message"
          className="h-full max-h-40 min-h-28 w-full rounded-xl bg-secondary px-4 py-2"
          placeholder="Message"
        />
      </div>

      <button
        type="submit"
        className="col-span-2 mx-auto w-44 rounded-xl bg-headline py-2 text-white transition-colors duration-200 hover:bg-teal-800"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
