"use client";
import React, { useRef, useState, FormEvent } from "react";
import { Switch } from "@/components/ui/switch";
import { postData, FormData } from "@/app/actions/postForms";
import { useToast } from "@/components/ui/use-toast";

type Props = {};
export type InternshipFormNameType =
  | "salesforce-admin-internship"
  | "salesforce-app-builder-internship"
  | "both";

const InternshipForm = (props: Props) => {
  const [getUpdates, setGetUpdates] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const mobileRef = useRef<HTMLInputElement>(null);
  const programRef = useRef<HTMLSelectElement>(null);
  //
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData: FormData = {
      form_type: "internship_form",
      form_name: (programRef.current?.value as InternshipFormNameType) ?? "",
      name: nameRef.current?.value ?? "",
      email: emailRef.current?.value ?? "",
      mobile: mobileRef.current?.value ?? "",
      get_updates: getUpdates,
    };

    const response = await postData(formData);
    // console.log(formData);
    if (response.success) {
      toast({
        title: "Request sent Successfully",
        description: "Thanks for your request, we will reach out to you soon!",
      });

      // Clear the form fields
      if (nameRef.current) nameRef.current.value = "";
      if (emailRef.current) emailRef.current.value = "";
      if (mobileRef.current) mobileRef.current.value = "";
      if (programRef.current) programRef.current.value = "";
      setGetUpdates(false); // Reset the switch
    } else {
      toast({
        title: "Error Sending Request",
        description: "Oops, something went wrong. Please try again later!",
        variant: "destructive",
      });
    }
  };

  return (
    <form
      id="internship-form"
      className="mx-auto max-w-xl py-4"
      onSubmit={handleSubmit}
    >
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
          ref={nameRef}
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
          ref={emailRef}
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
          ref={mobileRef}
        />

        <label htmlFor="program" className="sr-only">
          Program
        </label>
        <select
          required
          defaultValue="salesforce-admin-internship"
          aria-required="true"
          id="program"
          className="rounded-xl bg-secondary px-4 py-2"
          ref={programRef}
        >
          <option value="salesforce-admin-internship">Salesforce Admin</option>
          <option value="salesforce-app-builder-internship">
            Salesforce App Builder
          </option>
          <option value="both">Both</option>
        </select>
      </div>

      <div className="mt-4 flex items-center justify-center space-x-2">
        <label htmlFor="receive-future-updates" className="text-lg">
          Receive Future Updates
        </label>
        <Switch
          title="switch"
          className="bg-secondary"
          id="receive-future-updates"
          checked={getUpdates}
          onCheckedChange={(checked: boolean) => setGetUpdates(checked)}
        />
        <button
          type="submit"
          className="w-44 rounded-xl bg-headline py-2 text-center text-white transition-colors duration-200 hover:bg-teal-800"
        >
          Send Request
        </button>
      </div>
    </form>
  );
};

export default InternshipForm;
