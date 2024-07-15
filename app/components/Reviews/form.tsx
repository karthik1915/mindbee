"use client";
import { FormData, postData } from "@/app/actions/postForms";
import { DialogClose } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import React, { FormEvent, useRef } from "react";

type Props = {};

const ReviewForm = (props: Props) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData: FormData = {
      form_type: "main_form",
      form_name: "home_review",
      name: nameRef.current?.value ?? "",
      message: messageRef.current?.value ?? undefined,
      email: "",
      mobile: "",
      get_updates: false,
    };

    const response = await postData(formData);
    if (response.success === true) {
      toast({
        title: "Message sent Successfully",
        description: "Thanks for your message, we will reach you out sonn!",
      });
      if (nameRef.current) nameRef.current.value = "";
      if (messageRef.current) messageRef.current.value = "";
    } else {
      toast({
        title: "Error Sending Message",
        description: "Oops, something went wrong. Please try again later!",
        variant: "destructive",
      });
    }
    // console.log(formData);
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1">
        <label className="py-2 text-lg">Name :</label>
        <input
          required
          aria-required
          className="rounded-xl px-4 py-2 ring"
          type="text"
          placeholder="Name"
        />
      </div>
      <div className="mt-4 flex flex-col">
        <label className="py-3 text-lg">Review :</label>
        <textarea
          required
          aria-required
          rows={3}
          className="rounded-xl px-4 py-2 ring"
          placeholder="Your Review"
        />
      </div>
      <div className="flex items-center justify-end gap-3 pt-4">
        <DialogClose
          title="cancel"
          className="rounded-xl bg-red-500 px-3 py-2 transition-colors duration-150 hover:bg-red-700 hover:text-white"
        >
          Cancel
        </DialogClose>
        <button
          title="submit"
          type="submit"
          className="rounded-xl bg-headline px-3 py-2 text-white transition-colors duration-150 hover:bg-primary hover:text-black"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ReviewForm;
