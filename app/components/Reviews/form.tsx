import React from "react";

type Props = {};

const ReviewForm = (props: Props) => {
  return (
    <form className="">
      <div className="flex flex-col gap-1">
        <label className="py-2 text-lg">Name :</label>
        <input
          className="rounded-xl px-4 py-2 ring"
          type="text"
          placeholder="Name"
        />
      </div>
      <div className="mt-4 flex flex-col">
        <label className="py-3 text-lg">Review :</label>
        <textarea
          rows={3}
          className="rounded-xl px-4 py-2 ring"
          placeholder="Your Review"
        />
      </div>
    </form>
  );
};

export default ReviewForm;
