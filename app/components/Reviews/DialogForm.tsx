import {
  DialogClose,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import React from "react";
import ReviewForm from "./form";

type Props = {};

const DialogForm = (props: Props) => {
  return (
    <>
      <DialogDescription>
        <ReviewForm />
      </DialogDescription>
      <DialogFooter>
        <DialogClose
          title="cancel"
          className="ml-4 rounded-xl bg-red-500 px-3 py-2 transition-colors duration-150 hover:bg-red-700 hover:text-white"
        >
          Cancel
        </DialogClose>
        <button
          title="submit"
          type="submit"
          className="rounded-xl bg-primary px-3 py-2 transition-colors duration-150 hover:bg-headline hover:text-white"
        >
          Submit
        </button>
      </DialogFooter>
    </>
  );
};

export default DialogForm;
