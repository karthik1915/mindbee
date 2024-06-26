import React from "react";
import { LocationIcon, MailIcon, PhoneIcon } from "../icons/icons";
import { Details } from "../footer/details";
import ContactForm from "./form";

type Props = {};

function ContactSection({}: Props) {
  return (
    <section
      id="contact"
      className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-2 items-center px-3 py-12 lg:grid-cols-2 lg:grid-rows-1"
    >
      <div className="mx-auto max-w-[500px] px-3">
        <h1 className="text-center font-exo text-4xl font-semibold">
          Don&apos;t Hesitate to ask a question to us
        </h1>
        <h3 className="py-2 text-center">
          Reach us out to clear your doubts regarding salesforce courses we
          provide, we will reach you out sooner.
        </h3>
        <div className="mx-auto my-5 w-3/4 space-y-5">
          <div className="flex items-center">
            <LocationIcon fill="#011133" />
            <span className="ml-1">{Details.address}</span>
          </div>
          <div className="flex items-center">
            <PhoneIcon fill="#011133" />
            <span className="ml-1">{Details.number}</span>
          </div>
          <div className="flex items-center">
            <MailIcon fill="#011133" />
            <span className="ml-1">{Details.address}</span>
          </div>
        </div>
      </div>
      <div className="p-3">
        <div className="mx-auto min-h-96 w-full max-w-[500px] rounded-xl bg-secondary shadow-lg">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
