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
    <nav className="bg-navbar fixed top-0 z-50 flex w-screen items-center justify-between px-9 py-4 pr-6 text-lg text-background">
      <Link href="/">
        <Image
          src="/mindbee_logo_square.png"
          alt="mindbee_logo_svg"
          width={200}
          height={100}
        />
      </Link>
      <NavigationMenu className="hidden gap-5 font-semibold lg:flex">
        <Link className="px-2 py-1 text-xl" href="/">
          Home
        </Link>
        <ScrollLink href="/#about" className="px-2 py-1 text-xl">
          About
        </ScrollLink>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavServices />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <Link className="text-xl" href="/blogs">
                Blogs
              </Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <div>Recent / Custom</div>
              <div>set blogs</div>
              <div>are recommended</div>
              <div>here</div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <Link className="px-2 py-1 text-xl" href="/#about">
            Contact
          </Link>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="lg:hidden">
        <Sidebar isScrolled={true} />
      </div>
    </nav>
  );
};

export default NavBar;
