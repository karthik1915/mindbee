import { ArrowRight } from "lucide-react";
import React from "react";

type Props = {
  title: string;
  paragraph: string;
};

const OverViewCard = (props: Props) => {
  return (
    <div
      className={`flex h-80 w-80 cursor-pointer flex-col justify-between rounded-xl bg-gradient-to-br from-blue-300 to-violet-200 p-5 py-5 shadow-xl transition-transform duration-200 hover:-translate-y-3`}
    >
      <div className="flex items-center gap-3">
        <span role="presentation" className="h-0.5 w-9 rounded-xl bg-black" />
        <p className="text-center font-semibold">{props.title}</p>
      </div>
      <p className="font-oxygen text-2xl font-semibold">{props.paragraph}</p>
      <div className="flex items-center gap-4">
        Learn More{" "}
        <span className="inline-block">
          <ArrowRight />
        </span>
      </div>
    </div>
  );
};

export default OverViewCard;
