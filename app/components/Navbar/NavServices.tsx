import React from "react";
import ScrollLink from "./ScrollLink";
import { ChevronRight } from "lucide-react";

const NavServices = () => {
  return (
    <div className="group relative">
      <ScrollLink
        href="/#services"
        className="flex items-center gap-1 px-2 py-1 text-xl lg:text-2xl"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Services
        <ChevronRight
          size={16}
          className="transition-transform duration-150 group-hover:rotate-90"
        />
      </ScrollLink>
      <div
        className="absolute right-0 top-12 flex w-60 translate-x-1/2 flex-col gap-3 rounded-xl bg-background px-5 py-6 opacity-0 shadow-xl transition-opacity duration-150 group-hover:opacity-100"
        role="menu"
      >
        <ScrollLink
          className="flex items-center justify-between text-xl text-navbar lg:text-2xl"
          href="/#consultation"
          role="menuitem"
        >
          Consultation <ChevronRight />
        </ScrollLink>
        <ScrollLink
          className="flex items-center justify-between text-xl text-navbar lg:text-2xl"
          href="/#courses"
          role="menuitem"
        >
          Courses <ChevronRight />
        </ScrollLink>
        <ScrollLink
          className="flex items-center justify-between text-xl text-navbar lg:text-2xl"
          href="/internships"
          role="menuitem"
        >
          Internships <ChevronRight />
        </ScrollLink>
      </div>
    </div>
  );
};

export default NavServices;
