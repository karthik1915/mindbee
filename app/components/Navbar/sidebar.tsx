"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Sidebar = ({ isScrolled }: { isScrolled: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
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

    if (href.startsWith("/#")) {
      const targetId = href.slice(2);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }, 300); // Delay to allow sidebar close animation
      }
    } else {
      setTimeout(() => {
        window.location.href = href;
      }, 300); // Delay to allow sidebar close animation
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
      <button onClick={toggleSidebar} className="pr-3">
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
        className="fixed left-0 top-0 z-50 h-full w-[70vw] bg-gray-800 text-white shadow-lg"
      >
        <h2 className="mb-4 py-5 text-center text-2xl font-semibold">
          Mind Bee
        </h2>
        <div className="flex flex-col items-center gap-5 p-4 text-xl">
          <Link href="/" onClick={(e) => handleLinkClick(e, "/")}>
            Home
          </Link>
          <Link href="#about" onClick={(e) => handleLinkClick(e, "#about")}>
            About
          </Link>
          <Link
            href="/#services"
            onClick={(e) => handleLinkClick(e, "/#services")}
          >
            Courses
          </Link>
          <Link href="/blogs" onClick={(e) => handleLinkClick(e, "/blogs")}>
            Blogs
          </Link>
          <Link
            href="/#contact"
            onClick={(e) => handleLinkClick(e, "/#contact")}
          >
            Contact
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Sidebar;
