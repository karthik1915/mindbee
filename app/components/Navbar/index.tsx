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

type Props = {};

const NavBar = (props: Props) => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 flex w-screen items-center justify-between px-9 py-5 pr-6 text-lg ${
        isScrolled ? "bg-foreground text-background" : "text-foreground"
      }`}
    >
      <Link href="/">
        <div>LOGO</div>
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
        <Sidebar isScrolled={isScrolled} />
      </div>
    </nav>
  );
};

export default NavBar;
