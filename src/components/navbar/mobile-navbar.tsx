import { useState, useEffect } from "react";

import { Menu } from "lucide-react";

import type { NavbarLinkProps } from "./navbar-link";

type MobileNavbarProps = { links: NavbarLinkProps[] };

export const MobileNavbar: React.FC<MobileNavbarProps> = () => {
  const [open] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <div className="container flex items-center justify-between lg:hidden">
      <a className="cursor-pointer" href="/">
        <svg
          id="logo"
          role="img"
          width="48"
          height="48"
          aria-hidden
          version="1.1"
          viewBox="-5 -5 210 210"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <polygon
            stroke-width="10"
            fill="rgb(10, 25, 47)"
            stroke="rgb(14, 227, 181)"
            points="52,16.8615612366939 148,16.8615612366939 196,100 148,183.138438763306 52,183.138438763306 4,100"
          ></polygon>
          <path
            id="letter-i"
            fill="rgb(14, 227, 181)"
            stroke="rgb(14, 227, 181)"
            transform="translate(95, 50) rotate(180 5.85 45.5)"
            d="M 0 91 L 0 72.67 L 11.7 72.67 L 11.7 91 L 0 91 Z M 0 0 L 11.7 0 L 11.7 61.87 L 0 61.87 L 0 0 Z"
          ></path>
        </svg>
      </a>

      <button aria-label="menu button">
        <Menu className="w-12 h-12 text-neon" />
      </button>
    </div>
  );
};
