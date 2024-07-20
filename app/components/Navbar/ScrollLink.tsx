import React, { MouseEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ScrollLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  role?: string;
}

const ScrollLink = ({ href, children, className, role }: ScrollLinkProps) => {
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const id = href.slice(2);
      const element = document.getElementById(id);
      if (element) {
        // Scroll with an offset to account for the fixed navbar
        const offset = 100; // Height of the fixed navbar
        const top =
          element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      } else {
        router.push(href);
      }
    }
  };

  return (
    <Link role={role} href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default ScrollLink;
