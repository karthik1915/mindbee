"use client";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { forwardRef, useRef } from "react";

type Props = {};

// eslint-disable-next-line react/display-name
const Circle = forwardRef<
  HTMLDivElement,
  {
    className?: string;
    children?: React.ReactNode;
    title: string;
    description: string;
  }
>(({ className, children, title, description }, ref) => {
  return (
    <div
      ref={ref}
      className="z-10 flex flex-col items-center gap-3 rounded-2xl bg-secondary px-3 py-5"
    >
      <div
        className={cn(
          "z-10 flex size-24 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
          className,
        )}
      >
        {children}
      </div>
      <div className="w-48 space-y-3">
        <h3 className="text-center font-oxygen text-xl">{title}</h3>
        <p className="break-words text-lg">{description}</p>
      </div>
    </div>
  );
});

function StepsSection({}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative mx-auto max-w-7xl px-5 py-12"
    >
      <div className="flex h-full w-full flex-col items-stretch justify-between gap-10">
        <h1 className="text-center font-exo text-3xl font-semibold">
          Steps Involved in All Courses
        </h1>
        <div className="flex flex-row flex-wrap justify-center gap-16 md:gap-24">
          <Circle
            ref={div1Ref}
            title="Enroll the Course"
            description="Enroll Our Salesfoce course by easy enquiry with us"
          >
            <Image
              aria-hidden
              role="presentation"
              src="/steps/enrollment.png"
              alt="Enrollment"
              width={96}
              height={96}
            />
          </Circle>
          <Circle
            ref={div2Ref}
            title="Learn"
            description="Learn your structured, expert-led lessons to master Salesforce skills"
          >
            <Image
              role="presentation"
              aria-hidden
              src="/steps/training.png"
              alt="Enrollment"
              width={96}
              height={96}
            />
          </Circle>
          <Circle
            ref={div3Ref}
            title="Exam"
            description="Validate your knowledge and readiness with rigorous assessments and exams."
          >
            <Image
              role="presentation"
              aria-hidden
              src="/steps/exam.png"
              alt="Enrollment"
              width={96}
              height={96}
            />
          </Circle>
          <Circle
            ref={div4Ref}
            title="Certification"
            description="Earn your official Salesforce certification to showcase your expertise and boost your career."
          >
            <Image
              role="presentation"
              aria-hidden
              src="/steps/certification.png"
              alt="Enrollment"
              width={96}
              height={96}
            />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        aria-hidden
        containerRef={containerRef}
        fromRef={div1Ref}
        duration={3}
        toRef={div2Ref}
      />
      <AnimatedBeam
        aria-hidden
        containerRef={containerRef}
        fromRef={div2Ref}
        duration={3}
        toRef={div3Ref}
      />
      <AnimatedBeam
        aria-hidden
        duration={3}
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
      />
    </section>
  );
}

export default StepsSection;
