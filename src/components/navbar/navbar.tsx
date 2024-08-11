import { useRef, useState, useEffect } from "react";

import { MobileNavbar } from "./mobile-navbar";
import { DesktopNavbar } from "./desktop-navbar";

import { cn, isBrowser } from "@/lib/utils";

const links = [
  {
    text: "About",
    href: "#about",
  },
  {
    text: "Experience",
    href: "#experience",
  },
  {
    text: "Projects",
    href: "#projects",
  },
  {
    text: "Contact",
    href: "#contact",
  },
];

export const Navbar = () => {
  const [show, setShow] = useState(true);
  const prevScrollpos = useRef(isBrowser() ? window.screenY : 0);

  const handleNavBar = () => {
    const currentScrollPos = window.scrollY;
    prevScrollpos.current < currentScrollPos ? setShow(false) : setShow(true);
    prevScrollpos.current = currentScrollPos;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleNavBar);

    return () => {
      window.removeEventListener("scroll", handleNavBar);
    };
  }, []);

  return (
    <header
      className={cn(
        "p-2 fixed flex items-center z-10 top-0 w-full h-16 bg-secondary lg:h-20 transition-all duration-700 shadow-xl",
        !show && "-translate-y-full"
      )}
    >
      <DesktopNavbar links={links} />
      <MobileNavbar links={links} />
    </header>
  );
};
