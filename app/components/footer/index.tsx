import React, { SVGProps } from "react";
import Image from "next/image";
import {
  FaceBookIcon,
  InstagramIcon,
  LinkedInIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
  TwitterXIcon,
  YoutubeIcon,
} from "@/app/components/icons/icons";
import { Details } from "./details";
import Link from "next/link";
import ScrollLink from "../Navbar/ScrollLink";

type Props = {};

const primaryColor = "rgb(13 148 136)";

function Footer() {
  return (
    <footer className="bg-navbar h-auto w-full px-5 pb-4 pt-10 text-background">
      <div className="mb-8 grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-0 lg:grid-cols-4">
        <div className="col-span-3 pl-8 md:col-span-1">
          <Image
            src="/mindbee_logo_square.png"
            alt="mindbee_logo_svg"
            width={200}
            height={100}
          />
          <p className="my-3">
            Mindbee consulting - a salesforce coaching company
          </p>
        </div>
        <div>
          <p className="text-center font-oxygen text-lg font-semibold">
            Company
          </p>
          <div className="text-center">
            <Link className="my-2 block" href="/">
              Home
            </Link>
            <Link className="my-2 block" href="/">
              About
            </Link>
            <Link className="my-2 block" href="/courses/salesforce-admin">
              Courses
            </Link>
            <Link className="my-2 block" href="/blogs">
              Blogs
            </Link>
          </div>
        </div>
        <div>
          <p className="text-center font-oxygen text-lg font-semibold">
            Support
          </p>
          <div className="text-center">
            <Link className="my-2 block" href="/">
              Rules & privacy
            </Link>

            <Link className="my-2 block" href="/">
              Refund Policy
            </Link>
            <Link className="my-2 block" href="/">
              Contact Us
            </Link>
            <Link className="my-2 block" href="/">
              Programs
            </Link>
          </div>
        </div>
        <div className="col-span-3 pl-8 lg:col-span-1">
          <p className="mb-4 font-oxygen text-2xl font-bold lg:ml-4">
            Get in touch
          </p>
          <div className="mx-auto space-y-5">
            <div className="flex items-center">
              <LocationIcon fill={primaryColor} />
              <span className="ml-1">{Details.address}</span>
            </div>
            <div className="flex items-center">
              <PhoneIcon fill={primaryColor} />
              <span className="ml-1">{Details.number}</span>
            </div>
            <div className="flex items-center">
              <MailIcon fill={primaryColor} />
              <span className="ml-1">{Details.address}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-6 border-b border-gray-200/20"></div>
      <div className="my-4 px-8 text-center">
        &copy;&nbsp;2024 all rights reserved
      </div>
    </footer>
  );
}

function Footer1({}: Props) {
  return (
    <div className="text-primary-foreground mt-8 grid h-auto w-full grid-cols-2 grid-rows-2 bg-primary p-4 lg:grid-cols-4 lg:grid-rows-1">
      <div className="p-2 lg:p-4">
        <p className="mb-4 ml-4 font-oxygen text-2xl font-bold">
          Logo and Small paragraph
        </p>
      </div>
      <div className="p-2 lg:p-4">
        <p className="mb-4 font-oxygen text-2xl font-bold lg:ml-4">
          Get in touch
        </p>
        <div className="mx-auto space-y-5">
          <div className="flex items-center">
            <LocationIcon fill={primaryColor} />
            <span className="ml-1">{Details.address}</span>
          </div>
          <div className="flex items-center">
            <PhoneIcon fill={primaryColor} />
            <span className="ml-1">{Details.number}</span>
          </div>
          <div className="flex items-center">
            <MailIcon fill={primaryColor} />
            <span className="ml-1">{Details.address}</span>
          </div>
          <div className="flex flex-wrap items-center justify-start gap-2">
            <FooterLinkButton Icon={FaceBookIcon} />
            <FooterLinkButton Icon={TwitterXIcon} />
            <FooterLinkButton Icon={YoutubeIcon} />
            <FooterLinkButton Icon={LinkedInIcon} />
            <FooterLinkButton Icon={InstagramIcon} />
          </div>
        </div>
      </div>
      <div className="p-2 lg:p-4">
        <p className="mb-4 font-oxygen text-2xl font-bold lg:ml-4">Company</p>
        <div className="mx-auto space-y-3">
          <LinkWithBar href="/">Home</LinkWithBar>
          <LinkWithBar href="/#about">About</LinkWithBar>
          <LinkWithBar href="/#services">Services</LinkWithBar>
          <LinkWithBar href="/blogs">Blogs</LinkWithBar>
          <LinkWithBar href="/#contact">Contact</LinkWithBar>
        </div>
      </div>
      <div className="p-2 lg:p-4">
        <p className="mb-4 font-oxygen text-2xl font-bold lg:ml-4">
          Information
        </p>
        <div className="mx-auto space-y-3">
          <LinkWithBar href="">Client Support</LinkWithBar>
          <LinkWithBar href="">Privacy Policy</LinkWithBar>
          <LinkWithBar href="">Terms of use</LinkWithBar>
          <LinkWithBar href="">Service Policies</LinkWithBar>
          <LinkWithBar href="">Cases</LinkWithBar>
        </div>
      </div>
    </div>
  );
}

type LinkWithBarProps = {
  href: string;
  children: React.ReactNode;
};

const LinkWithBar = ({ href, children }: LinkWithBarProps) => {
  return (
    <div className="flex items-center gap-4 lg:text-lg">
      <div className="h-1 w-4 rounded-sm bg-teal-500"></div>
      <Link href={href}>{children}</Link>
    </div>
  );
};

type FooterLinkButtonProps = {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
};
const FooterLinkButton = ({ Icon }: FooterLinkButtonProps) => {
  return (
    <div className="rounded-full bg-teal-500 p-1 transition-all duration-200 ease-linear hover:bg-teal-800 lg:p-2">
      <Icon width={24} height={24} fill="white" />
    </div>
  );
};

export default Footer;
