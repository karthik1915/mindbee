import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Props = {
  otherCoursesTitlesAndLinks: { title: string; link: string }[];
};

const BreadCrumbs = (props: Props) => {
  return (
    <nav role="breadcrumbs" className="flex items-center px-5 pb-4">
      <Link href="/">Home</Link>
      <ChevronRight className="inline" size={20} />
      <Link href="/#courses" className="inline">
        courses
      </Link>
      <ChevronRight className="inline" size={20} />
      <DropdownNavMenu
        otherCoursesTitlesAndLinks={props.otherCoursesTitlesAndLinks}
      />
    </nav>
  );
};

const DropdownNavMenu = ({ otherCoursesTitlesAndLinks }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1">
        Courses
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="bg-white">
        {otherCoursesTitlesAndLinks.map(({ title, link }) => (
          <DropdownMenuItem key={link}>
            <Link href={link} className="capitalize lg:text-lg">
              {title}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default BreadCrumbs;
