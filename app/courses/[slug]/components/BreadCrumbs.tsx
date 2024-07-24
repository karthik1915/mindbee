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
  parent: { title: string; link: string };
  current: string;
  menu: { title: string; link: string }[];
};

const BreadCrumbs = (props: Props) => {
  return (
    <nav role="navigation" className="flex flex-wrap items-center">
      <Link href="/">Home</Link>
      <ChevronRight className="inline" size={20} />
      <Link href={props.parent.link} className="inline">
        {props.parent.title}
      </Link>
      <ChevronRight className="inline" size={20} />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <p className="flex cursor-pointer items-center gap-1">
            {props.current}
          </p>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="bg-white">
          {props.menu.map(({ title, link }) => (
            <DropdownMenuItem key={link}>
              <Link href={link} className="capitalize lg:text-lg">
                {title}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};

export default BreadCrumbs;
