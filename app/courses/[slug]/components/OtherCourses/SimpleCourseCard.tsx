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
    <div className="mx-8 my-6 rounded-2xl border border-black p-2">
      <Image
        src={content.imageUrl}
        alt={content.title}
        width={320}
        height={300}
        style={{}}
        className="rounded-xl"
      />
      <div className="px-2 py-4 text-center">
        <p className="text-center font-oxygen text-lg">{content.title}</p>
        <div className="flex justify-center gap-3 py-3">
          <Star color="#ac7d03" fill="#ac7d03" />
          <Star color="#ac7d03" fill="#ac7d03" />
          <Star color="#ac7d03" fill="#ac7d03" />
          <Star color="#ac7d03" fill="#ac7d03" />
          <Star color="#ac7d03" fill="#ac7d03" />
          {content.stars}
        </div>
        <Link
          href={content.link}
          className="w-full border py-2 underline hover:font-bold hover:underline-offset-2"
        >
          Know More
        </Link>
      </div>
    </div>
  );
};

export default SimpleCourseCard;
