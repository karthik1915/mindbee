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
    </>
  );
};

export default DialogForm;
