"use client";
import { FormData, postData } from "@/app/actions/postForms";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/components/ui/use-toast";
import React, { FormEvent, useRef, useState } from "react";

type Props = {
  formName: string;
};

const CourseForm = ({ formName }: Props) => {
  const [getUpdates, setGetUpdates] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const mobileRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  //
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData: FormData = {
      form_type: "course_form",
      form_name: formName,
      name: nameRef.current?.value ?? "",
      email: emailRef.current?.value ?? "",
      mobile: mobileRef.current?.value ?? "",
      message: messageRef.current?.value ?? undefined,
      get_updates: getUpdates,
    };

    const response = await postData(formData);

    if (response.success) {
      toast({
        title: "Message sent Successfully",
        description: "Thanks for your message, we will reach you out soon!",
      });

      // Clear the form fields
      if (nameRef.current) nameRef.current.value = "";
      if (emailRef.current) emailRef.current.value = "";
      if (mobileRef.current) mobileRef.current.value = "";
      if (messageRef.current) messageRef.current.value = "";
      setGetUpdates(false); // Reset the switch
    } else {
      toast({
        title: "Error Sending Message",
        description: "Oops, something went wrong. Please try again later!",
        variant: "destructive",
      });
    }
  };

  return (
    <form
      className="grid gap-x-4 gap-y-8 p-4 md:grid-cols-2"
      onSubmit={handleSubmit}
    >
      <div className="col-span-2 flex flex-col justify-between gap-1 space-y-2 md:col-span-1">
        <input
          ref={nameRef}
          required
          aria-required
          className="rounded-xl bg-secondary px-4 py-3.5"
          type="text"
          placeholder="Name"
        />
        <input
          required
          ref={emailRef}
          aria-required
          className="rounded-xl bg-secondary px-4 py-3.5"
          type="email"
          placeholder="Email"
        />
        <input
          required
          ref={mobileRef}
          aria-required
          className="rounded-xl bg-secondary px-4 py-3.5"
          type="tel"
          placeholder="Mobile"
        />
      </div>
      <div className="col-span-2 flex flex-col gap-1 md:col-span-1">
        <textarea
          required
          ref={messageRef}
          aria-required
          className="h-full min-h-28 w-full rounded-xl bg-secondary px-4 py-2"
          placeholder="Message"
        />
      </div>
      <div className="col-span-2 flex items-center justify-center space-x-2">
        <label htmlFor="receive-future-updates" className="text-lg">
          Recieve Future Updates
        </label>
        <Switch
          checked={getUpdates}
          onCheckedChange={(checked: boolean) => setGetUpdates(checked)}
          title="switch"
          className="bg-secondary"
          id="airplane-mode"
        />
      </div>
      <button
        className="col-span-2 mx-auto w-44 rounded-xl bg-headline py-2 text-white transition-colors duration-200 hover:bg-teal-800"
        type="submit"
      >
        Request Enquiry
      </button>
    </form>
  );
};

export default CourseForm;
