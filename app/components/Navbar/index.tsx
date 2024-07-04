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
    <section
      role="navigation"
      aria-label="Main navigation menu"
      className="fixed top-0 z-50 flex w-screen items-center justify-between bg-navbar px-9 py-4 pr-6 text-lg text-background"
    >
      <Link href="/">
        <Image
          src="/mindbee_logo_square.png"
          alt="mindbee_logo_svg"
          width={200}
          height={56}
        />
      </Link>
      <NavigationMenu
        aria-label="navigation links"
        className="hidden gap-5 font-semibold lg:flex"
      >
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
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavServices />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger tabIndex={-1}>
              <Link aria-label="Our Blogs" className="text-xl" href="/blogs">
                Blogs
              </Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent
              aria-hidden
              className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]"
            >
              <div>Recent / Custom</div>
              <div>set blogs</div>
              <div>are recommended</div>
              <div>here</div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <ScrollLink
            aria-label="Contact us"
            className="px-2 py-1 text-xl"
            href="/#contact"
          >
            Contact
          </ScrollLink>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="lg:hidden">
        <Sidebar isScrolled={true} />
      </div>
    </section>
  );
};

export default NavBar;
