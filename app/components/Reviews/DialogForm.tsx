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
      <DialogFooter className="flex gap-2">
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
      </DialogFooter>
    </>
  );
};

export default DialogForm;
