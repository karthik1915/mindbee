import React from "react";

type Props = {};

const ContactForm = (props: Props) => {
  return (
    <form className="flex h-full flex-grow flex-col gap-6 p-4">
      <div className="flex flex-col gap-1">
        <label>Name :</label>
        <input
          className="rounded-xl px-4 py-2"
          type="text"
          placeholder="Name"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label>Email :</label>
        <input
          className="rounded-xl px-4 py-2"
          type="email"
          placeholder="Email"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label>Mobile Number :</label>
        <input
          className="rounded-xl px-4 py-2"
          type="number"
          placeholder="Mobile"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label>Message :</label>
        <textarea className="rounded-xl px-4 py-2" placeholder="Message" />
      </div>
      <button
        className="w-full rounded-xl bg-headline py-3 text-white transition-colors duration-200 hover:bg-teal-800"
        type="submit"
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
