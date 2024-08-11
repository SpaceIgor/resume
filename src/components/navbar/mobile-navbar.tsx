import { useState, useEffect } from "react";

import { X, Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { config } from "@/lib/config";

import type { NavbarLinkProps } from "./navbar-link";
import { createPortal } from "react-dom";

type MobileNavbarProps = { links: NavbarLinkProps[] };

export const MobileNavbar: React.FC<MobileNavbarProps> = ({ links }) => {
  const [open, setOpen] = useState(false);

  const onClose = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    window.addEventListener("resize", onClose);

    return () => {
      window.removeEventListener("resize", onClose);
    };
  }, [open]);

  return (
    <>
      <div className="container flex items-center justify-between lg:hidden">
        <a href="#hero" onClick={onClose} className="cursor-pointer z-50">
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
              strokeWidth="10"
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

        <button
          aria-label="menu button"
          onClick={() => setOpen((prev) => !prev)}
        >
          <Menu className="w-12 h-12 text-neon" />
        </button>

        {createPortal(
          <div
            className={cn(
              "w-screen h-screen fixed z-10 inset-0 flex transition-all duration-700 translate-x-full ",
              open && "translate-x-0"
            )}
          >
            <div className="flex-[2]" onClick={onClose} />
            <div className="flex-[4] bg-white/10 backdrop-blur-lg p-2 pl-8 flex flex-col">
              <button
                className=" self-end"
                aria-label="close menu button"
                onClick={onClose}
              >
                <X className="w-12 h-12 text-neon" />
              </button>
              <nav className="mt-8 flex flex-col gap-6">
                {links.map((item) => (
                  <a
                    href={item.href}
                    onClick={onClose}
                    className="text-xl font-roboto-mono font-bold text-neon"
                  >
                    {item.text}
                  </a>
                ))}
                <a
                  download
                  rel="noreferrer"
                  onClick={onClose}
                  aria-label="download resume"
                  href={config.socials.resume_link}
                  className="px-4 py-2 w-fit text-xl font-roboto-mono font-bold text-neon border-2 border-neon rounded-sm transition-colors duration-500 hover:bg-neon-light uppercase"
                >
                  Resume
                </a>
              </nav>
            </div>
          </div>,
          document.body
        )}
      </div>
    </>
  );
};
