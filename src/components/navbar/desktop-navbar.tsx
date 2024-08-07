import { NavbarLink } from "./navbar-link";

import type { NavbarLinkProps } from "./navbar-link";

type DesktopNavbarProps = { links: NavbarLinkProps[] };

export const DesktopNavbar: React.FC<DesktopNavbarProps> = ({ links }) => {
  return (
    <div className="container hidden items-center justify-between lg:flex">
      <a
        href="#hero"
        className="cursor-pointer group transition-colors duration-300"
      >
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
            className="stroke-neon fill-secondary group-hover:fill-neon-light transition-colors duration-500"
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
      <nav className="flex gap-6 items-center">
        {links.map((item) => (
          <NavbarLink {...item} key={item.href} />
        ))}
        <a
          href=""
          download
          rel="noreferrer"
          aria-label="download resume"
          className="px-4 py-2 text-xl font-roboto-mono font-bold text-neon border-2 border-neon rounded-sm transition-colors duration-500 hover:bg-neon-light uppercase"
        >
          Resume
        </a>
      </nav>
    </div>
  );
};
