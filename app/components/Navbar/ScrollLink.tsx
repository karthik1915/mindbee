import React, { MouseEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ScrollLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const ScrollLink = ({ href, children, className }: ScrollLinkProps) => {
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const id = href.slice(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push(href);
      }
    }
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default ScrollLink;
