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

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div className="flex w-screen items-center justify-between px-9 py-5 pr-6 text-lg">
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
        <Sidebar />
      </div>
    </div>
  );
};

export default NavBar;
