import {
  DialogClose,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import React from "react";

type Props = {};

const DialogForm = (props: Props) => {
  return (
    <>
      <DialogDescription>form</DialogDescription>
      <DialogFooter>
        <DialogClose>Cancel</DialogClose>
        <button>Submit</button>
      </DialogFooter>
    </>
  );
};

export default DialogForm;
