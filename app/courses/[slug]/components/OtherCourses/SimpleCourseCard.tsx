import React from "react";
import Image from "next/image";
import { CourseDetailsProps } from "../../CourseData";
import { Star } from "lucide-react";
import Link from "next/link";
type Props = {
  content: CourseDetailsProps;
};

const SimpleCourseCard = ({ content }: Props) => {
  return (
    <Link
      href={content.link}
      className="mx-8 my-6 min-w-[270px] max-w-[280px] rounded-2xl border border-black shadow-lg"
    >
      <Image
        src={content.imageUrl}
        alt={content.title}
        width={270}
        height={168}
        style={{}}
        className="rounded-t-2xl"
      />
      <div className="px-2 py-4 text-center">
        <p className="text-wrap text-center font-oxygen text-xl">
          {content.title}
        </p>
        <div className="flex justify-center gap-3 py-3">
          <Star color="#ac7d03" fill="#ac7d03" />
          <Star color="#ac7d03" fill="#ac7d03" />
          <Star color="#ac7d03" fill="#ac7d03" />
          <Star color="#ac7d03" fill="#ac7d03" />
          <Star color="#ac7d03" fill="#ac7d03" />
          {content.stars}
        </div>
      </div>
    </Link>
  );
};

export default SimpleCourseCard;
