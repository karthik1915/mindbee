"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Image from "next/image";
import { ChevronsRight, CornerDownRight } from "lucide-react";

const Sidebar = ({ isScrolled }: { isScrolled: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const navbarHeight = 110; // Adjust this value to match your navbar height

  const toggleSidebar = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string,
  ) => {
    event.preventDefault();
    setIsOpen(false);

    const isSamePageLink = href.startsWith("/#");
    const isDifferentPageLink = href.includes("#") && !href.startsWith("/#");

    if (isSamePageLink) {
      const targetId = href.slice(2);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        setTimeout(() => {
          const elementPosition =
            targetElement.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }, 300); // Delay to allow sidebar close animation
      }
    } else if (isDifferentPageLink) {
      const [path, hash] = href.split("#");
      window.location.href = href; // Navigate using window.location.href
    } else {
      window.location.href = href; // Navigate using window.location.href
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <button
        onClick={toggleSidebar}
        title="menubar"
        type="button"
        role="button"
        className="pr-3"
      >
        <HamburgerMenuIcon
          width={24}
          height={24}
          color={isScrolled ? "white" : "black"}
        />
      </button>

      <motion.div
        ref={sidebarRef}
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed left-0 top-0 z-10 h-full w-[70vw] bg-navbar text-white shadow-lg"
      >
        <div>
          <Image
            className="mx-auto py-4"
            src="/mindbee_logo_square.png"
            alt="mindbee_logo_svg"
            width={200}
            height={56}
          />
        </div>
        <hr className="h-0" />
        <div className="flex flex-col gap-8 p-6 font-exo text-2xl">
          <Link href="/" onClick={(e) => handleLinkClick(e, "/")}>
            <ChevronsRight className="mr-2 inline" />
            Home
          </Link>
          <Link href="/#about" onClick={(e) => handleLinkClick(e, "/#about")}>
            <ChevronsRight className="mr-2 inline" />
            About
          </Link>
          <Link
            href="/#consultation"
            onClick={(e) => handleLinkClick(e, "/#consultation")}
          >
            <ChevronsRight className="mr-2 inline" />
            Services
          </Link>
          <div className="flex flex-col gap-4 pl-5">
            <Link
              href="/#consultation"
              onClick={(e) => handleLinkClick(e, "/#consultation")}
            >
              <CornerDownRight className="inline" /> Consultation
            </Link>
            <Link
              href="/#courses"
              onClick={(e) => handleLinkClick(e, "/#courses")}
            >
              <CornerDownRight className="inline" /> Courses
            </Link>
            <Link
              href="/internships"
              onClick={(e) => handleLinkClick(e, "/internships")}
            >
              <CornerDownRight className="inline" /> Internships
            </Link>
          </div>
          <Link href="/blogs" onClick={(e) => handleLinkClick(e, "/blogs")}>
            <ChevronsRight className="mr-2 inline" />
            Blogs
          </Link>
          <Link
            href="/#contact"
            onClick={(e) => handleLinkClick(e, "/#contact")}
          >
            <ChevronsRight className="mr-2 inline" />
            Contact
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Sidebar;
