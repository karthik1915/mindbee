import React from "react";
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogTrigger,
  DialogHeader,
} from "@/components/ui/dialog";
import DialogForm from "./DialogForm";
type Props = {};

const reviews = [
  {
    name: "Sathish",
    username: "@sathish3602",
    body: "Salesforce is future, I am Really happy that i learned awesome courses here from Mindbee.",
  },
  {
    name: "Monika",
    username: "@monz",
    body: "I had no Knowledge about salesforce before, Thanks for this Coaching now i got more Idea about my Carrier.",
  },
  {
    name: "Nandhakumar",
    username: "@nandhurock",
    body: "Best Salesforce Coaching so far, Glad that I Kickstart my Learning Journey here",
  },
  {
    name: "Kavipriya",
    username: "@kavi",
    body: "They reached me right after i requested enquiry. Thanks for the Brief Eloboration.",
  },
  {
    name: "Ravichandran",
    username: "@r_ravi",
    body: "Love the Curriculam and teaching technique, They are simply great.",
  },
  {
    name: "Harish",
    username: "@harish_0",
    body: "This site is awesome and courses are very Engaging and Intresting.",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

function Reviews({}: Props) {
  return (
    <section className="relative mx-auto grid w-full max-w-6xl grid-rows-[0.4fr,1fr] items-center justify-center px-4 text-center lg:grid-cols-[0.8fr,1fr] lg:grid-rows-1 lg:items-center lg:justify-start lg:text-left">
      <Dialog>
        <div>
          <h1 className="mb-6 text-5xl font-bold">What People told About us</h1>
          <DialogTrigger asChild>
            <button
              title="Review this site"
              className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-5 py-2 text-lg font-medium text-black backdrop-blur-3xl transition-all duration-200 hover:bg-opacity-65">
                Leave a Review
              </span>
            </button>
          </DialogTrigger>
          <DialogContent className="border-none">
            <DialogTitle className="font-exo text-xl text-headline">
              Give us a Honest Review
            </DialogTitle>
            <DialogHeader className="text-subheadline">
              Your Reviews/Feedbacks Helps us a lot for user improvement and
              Customer Satisfaction
            </DialogHeader>
            <DialogForm />
          </DialogContent>
        </div>
      </Dialog>
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-background py-20">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </section>
  );
}

const ReviewCard = ({
  name,
  username,
  body,
}: {
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-36 w-72 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <figcaption className="text-sm font-bold dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default Reviews;
