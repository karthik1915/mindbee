import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  LocationIcon,
  MailIcon,
  PhoneIcon,
} from "@/app/components/icons/icons";
import { Details } from "./details";

const primaryColor = "rgb(13 148 136)";

function Footer() {
  return (
    <footer className="h-auto w-full bg-navbar px-5 pb-4 pt-10 text-background">
      <div className="mb-8 grid grid-cols-2 gap-y-8 md:grid-cols-3 lg:grid-cols-4">
        {/* Company Information Section */}
        <div className="col-span-3 pl-8 lg:col-span-1">
          <Image
            src="/mindbee_logo_square.png"
            alt="mindbee_logo_svg"
            width={200}
            height={100}
          />
          <p className="my-3">
            Mindbee consulting - A Salesforce Consulting Company
          </p>
        </div>

        {/* Company Links Section */}
        <div>
          <p className="text-center font-oxygen text-xl font-semibold">
            Company
          </p>
          <nav className="space-y-2 text-center">
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/#about">About</FooterLink>
            <FooterLink href="/courses/salesforce-admin">Courses</FooterLink>
            <FooterLink href="/blogs">Blogs</FooterLink>
          </nav>
        </div>

        {/* Support Links Section */}
        <div>
          <p className="text-center font-oxygen text-xl font-semibold">
            Support
          </p>
          <nav className="space-y-2 text-center">
            <FooterLink href="/">Rules & privacy</FooterLink>
            <FooterLink href="/">Refund Policy</FooterLink>
            <FooterLink href="/">Contact Us</FooterLink>
            <FooterLink href="/">Internships</FooterLink>
          </nav>
        </div>

        {/* Get in Touch Section */}
        <div className="col-span-2 pl-8 md:col-span-1">
          <p className="mb-4 font-oxygen text-2xl font-bold lg:ml-4">
            Get in touch
          </p>
          <div className="mx-auto space-y-3">
            <ContactInfo icon={LocationIcon} text={Details.address} />
            <ContactInfo icon={PhoneIcon} text={Details.number} />
            <ContactInfo icon={MailIcon} text={Details.mail} />
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <hr className="mx-6 border-b border-gray-200/20" />

      {/* Copyright Section */}
      <div className="my-4 px-8 text-center">
        &copy;&nbsp;2024 all rights reserved
      </div>
    </footer>
  );
}

type FooterLinkProps = {
  href: string;
  children: React.ReactNode;
};

const FooterLink = ({ href, children }: FooterLinkProps) => {
  return (
    <Link href={href} className="my-2 block underline underline-offset-4">
      {children}
    </Link>
  );
};

type ContactInfoProps = {
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  text: string;
};

const ContactInfo = ({ icon: Icon, text }: ContactInfoProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Icon fill={primaryColor} width={20} height={20} />
      <span>{text}</span>
    </div>
  );
};

export default Footer;
