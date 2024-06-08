import {
  NavigationMenuContent,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import ScrollLink from "./ScrollLink";

type NavServiceProps = {
  id: string;
  title: string;
  description: string;
  className?: string;
};

const NavServicesDetails: NavServiceProps[] = [
  {
    id: "1",
    title: "Salesforce admin",
    description:
      "Learn to manage and configure Salesforce, including user setup, security, and automation.",
    className: "row-span-2",
  },
  {
    id: "2",
    title: "Salesforce Developer",
    description:
      "Master the skills to design, build, and deploy custom applications on the Salesforce platform.",
  },
  {
    id: "3",
    title: "Salesforce App Builder",
    description:
      "Discover how to create and customize Salesforce apps using declarative tools and low-code solutions.",
  },
];

const NavServices = () => {
  return (
    <>
      <NavigationMenuTrigger>
        <ScrollLink className="text-xl" href="/#services">
          Services
        </ScrollLink>
      </NavigationMenuTrigger>
      <NavigationMenuContent className="grid gap-3 p-6 lg:w-[500px] lg:grid-cols-[1fr_.75fr]">
        {NavServicesDetails.map((service) => {
          return (
            <NavServicesCard
              id={service.id}
              className={service.className}
              key={service.title}
              title={service.title}
              description={service.description}
            />
          );
        })}
      </NavigationMenuContent>
    </>
  );
};

const NavServicesCard = ({
  title,
  description,
  className,
  id,
}: NavServiceProps) => {
  return (
    <ScrollLink
      href={`/#course-${id}`}
      className={cn(
        "flex min-h-32 cursor-pointer flex-col justify-end rounded-lg border p-2 hover:bg-secondary",
        className,
      )}
    >
      <p className="text-md font-oxygen font-semibold leading-tight">{title}</p>
      <p className="text-sm text-muted-foreground">{description}</p>
    </ScrollLink>
  );
};

export default NavServices;
