"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { slugMap } from "../page";

type Props = {};

const BreadCrumbs = (props: Props) => {
  return (
    <div className="flex items-center px-5 pb-4">
      <Link href="/">Home</Link>
      <ChevronRight className="inline" size={20} />
      <Link href="/#courses" className="inline">
        courses
      </Link>
      <ChevronRight className="inline" size={20} />
      <DropdownNavMenu />
    </div>
  );
};

const DropdownNavMenu = () => {
  const pathname = usePathname();
  const path = pathname.split("/")[2];
  const slugs = Object.keys(slugMap);
  const MenuSlugs = slugs.filter((slug) => slug !== path);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1">
        {path.replace(/-/g, " ")}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="bg-white">
        {MenuSlugs.map((slug) => (
          <DropdownMenuItem key={slug}>
            <Link href={`/courses/${slug}`} className="capitalize lg:text-lg">
              {slug.replace(/-/g, " ")}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default BreadCrumbs;
