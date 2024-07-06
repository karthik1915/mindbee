"use client";
import React, { useState, useRef, useEffect } from "react";
import ScrollLink from "./ScrollLink";
import { ChevronDown, ChevronRight } from "lucide-react";

const NavServices = () => {
  const [show, setShow] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setShow(false);
      buttonRef.current?.focus();
    }
  };

  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setShow(false);
    }
  };

  useEffect(() => {
    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [show]);

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        className="flex items-center gap-1 px-2 py-1 text-xl"
        onClick={() => setShow(!show)}
        aria-expanded={show}
        aria-haspopup="true"
      >
        Services{" "}
        <ChevronDown
          size={16}
          className={`${show && "rotate-180"} transition-transform duration-150`}
        />
      </button>
      {show && (
        <div
          ref={menuRef}
          className="absolute right-0 top-12 flex w-60 translate-x-1/2 flex-col gap-3 rounded-xl bg-background px-5 py-6 shadow-xl"
          role="menu"
        >
          <ScrollLink
            className="flex items-center justify-between text-navbar"
            href="/#consultation"
            role="menuitem"
          >
            Consultation <ChevronRight />
          </ScrollLink>
          <ScrollLink
            className="flex items-center justify-between text-navbar"
            href="/#courses"
            role="menuitem"
          >
            Courses <ChevronRight />
          </ScrollLink>
          <ScrollLink
            className="flex items-center justify-between text-navbar"
            href="/internships"
            role="menuitem"
          >
            Internships <ChevronRight />
          </ScrollLink>
        </div>
      )}
    </div>
  );
};

export default NavServices;
