// app/components/ContactForm.tsx
"use client";

import React, { useRef, useState, FormEvent } from "react";
import { postData, FormData } from "@/app/actions/postForms";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/components/ui/use-toast";
import { Check, CircleX, Loader2Icon } from "lucide-react";

const ContactForm = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const mobileRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [getUpdates, setGetUpdates] = useState(false);
  //
  const [loading, setLoading] = useState<boolean>(false);
  //
  const [success, setSuccess] = useState<boolean | null>(null);
  //
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData: FormData = {
      form_type: "main_form",
      form_name: "home_contact",
      name: nameRef.current?.value ?? "",
      email: emailRef.current?.value ?? "",
      mobile: mobileRef.current?.value ?? "",
      message: messageRef.current?.value ?? undefined,
      get_updates: getUpdates,
    };
    setLoading(true);
    const response = await postData(formData);
    if (response.success === true) {
      setLoading(false);
      setSuccess(true);
      toast({
        title: "Message sent Successfully",
        description: "Thanks for your message, we will reach you out sonn!",
      });
      if (nameRef.current) nameRef.current.value = "";
      if (emailRef.current) emailRef.current.value = "";
      if (mobileRef.current) mobileRef.current.value = "";
      if (messageRef.current) messageRef.current.value = "";
      setGetUpdates(false); // Reset the switch
    } else {
      setLoading(false);
      setSuccess(false);
      toast({
        title: "Error Sending Message",
        description: "Oops, something went wrong. Please try again later!",
        variant: "destructive",
      });
    }
    // console.log(formData);
  };

  return (
    <form className="grid gap-4 p-4 md:grid-cols-2" onSubmit={handleSubmit}>
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
          ref={messageRef}
        />
      </div>

      <div className="col-span-2 flex flex-wrap items-center justify-center gap-3 space-x-2">
        <label htmlFor="receive-future-updates" className="text-lg">
          Recieve Future Updates
        </label>
        <Switch
          title="switch"
          className="bg-secondary"
          id="get_updates"
          checked={getUpdates}
          onCheckedChange={(checked: boolean) => setGetUpdates(checked)}
        />
        <button
          type="submit"
          className="flex w-44 items-center justify-center gap-3 rounded-xl bg-headline px-3 py-2 text-white transition-colors duration-200 hover:bg-teal-800"
        >
          {loading && <Loader2Icon className="animate-spin" />}
          {success === true && <Check />}
          {success === false && <CircleX />}
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
