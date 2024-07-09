"use client";
import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Sidebar from "./sidebar";
import NavServices from "./NavServices";
import ScrollLink from "./ScrollLink";
import Image from "next/image";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav
      role="navigation"
      aria-label="Main navigation menu"
      className="fixed top-0 z-50 flex w-screen items-center justify-between bg-navbar px-4 py-4 pr-6 text-lg text-background md:px-6 lg:px-8"
    >
      <Link href="/">
        <Image
          src="/mindbee_logo_square.png"
          alt="mindbee_logo_svg"
          width={210}
          height={66}
        />
      </Link>
      <div className="hidden gap-3 md:flex">
        <Link className="px-2 py-1 text-xl" href="/">
          Home
        </Link>
        <ScrollLink
          aria-label="About us"
          href="/#about"
          className="px-2 py-1 text-xl"
        >
          About
        </ScrollLink>
        <NavServices />
        <Link
          aria-label="Our Blogs"
          className="px-2 py-1 text-xl"
          href="/blogs"
        >
          Blogs
        </Link>

        <ScrollLink
          aria-label="Contact us"
          className="px-2 py-1 text-xl"
          href="/#contact"
        >
          Contact
        </ScrollLink>
      </div>
      <div className="md:hidden">
        <Sidebar isScrolled={true} />
      </div>
    </nav>
  );
};

export default NavBar;
