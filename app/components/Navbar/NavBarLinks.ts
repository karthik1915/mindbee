interface NavLinksProps {
  link: string;
  name: string;
}

const NavLinks: NavLinksProps[] = [
  {
    link: "/",
    name: "Home",
  },
  {
    link: "#about",
    name: "About",
  },
  {
    link: "/blogs",
    name: "Blogs",
  },
  {
    link: "#services",
    name: "Services",
  },
];

export default NavLinks;
