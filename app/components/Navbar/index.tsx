"use client";
import * as React from "react";
import Link from "next/link";
import NavLinks from "./NavBarLinks";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div className="mx-auto flex w-screen max-w-6xl items-center justify-between px-3 py-5 text-lg">
      <Link href="/">
        <div>LOGO</div>
      </Link>
      <NavigationMenu className="hidden gap-5 font-semibold lg:flex">
        <Link className="px-2 py-1 text-xl" href="/">
          Home
        </Link>
        <Link className="px-2 py-1 text-xl" href="/#about">
          About
        </Link>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <Link className="text-xl" href="/#services">
                Services
              </Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <div>services</div>
              <div>are</div>
              <div>listed</div>
              <div>here</div>
            </NavigationMenuContent>
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
        </NavigationMenuList>
      </NavigationMenu>

      <Button>Contact Us</Button>
    </div>
  );
};

const Button = (children: { children: React.ReactNode }) => {
  return (
    <button className="bg-primary text-primary-foreground hidden rounded-lg px-3 py-2 lg:block">
      Contact Us
    </button>
  );
};

export default NavBar;
