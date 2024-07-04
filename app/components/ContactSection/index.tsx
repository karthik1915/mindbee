import React from "react";
import { LocationIcon, MailIcon, PhoneIcon } from "../icons/icons";
import { Details } from "../footer/details";
import ContactForm from "./form";

type Props = {};

function ContactSection({}: Props) {
  return (
    <section id="contact" className="mx-auto max-w-6xl items-center px-3 py-12">
      <h1 className="text-center font-exo text-4xl font-semibold">
        Don&apos;t Hesitate to ask a question to us
      </h1>
      <h2 className="py-2 text-center">
        Reach us out to clear your doubts regarding salesforce courses we
        provide, we will reach you out sooner.
      </h2>

      <div className="mx-auto w-full">
        <ContactForm />
      </div>
    </section>
  );
}

export default ContactSection;
