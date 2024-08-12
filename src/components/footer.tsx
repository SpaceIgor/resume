import { Send, AtSign, Phone, Linkedin } from "lucide-react";

import { config } from "@/lib/config";

export const Footer = () => {
  const { linkedin_link, telegram_link, email, phone } = config.socials;

  const phone_link = `tel:${phone}`;
  const email_link = `mailto:${email}`;

  return (
    <footer className="w-full p-6">
      <div className="container pb-0 flex flex-col gap-6 justify-center items-center">
        <div
          id="socials-desktop-left"
          className="group fixed hidden flex-col justify-end items-center bottom-0 z-10 left-20 lg:flex"
        >
          <ul
            id="socials-mobile"
            className="mb-4 w-full flex flex-col justify-center gap-6"
          >
            <li>
              <a href={linkedin_link} target="_blank" title="linkedin">
                <Linkedin className="w-6 h-6 text-primary transition-all duration-500 hover:-translate-y-2 hover:text-neon" />
              </a>
            </li>
            <li>
              <a href={telegram_link} target="_blank" title="telegram">
                <Send className="w-6 h-6 text-primary transition-all duration-500 hover:-translate-y-2 hover:text-neon" />
              </a>
            </li>
            <li>
              <a href={email_link} target="_blank" title="email">
                <AtSign className="w-6 h-6 text-primary transition-all duration-500 hover:-translate-y-2 hover:text-neon" />
              </a>
            </li>
            <li>
              <a href={phone_link} target="_blank" title="phone">
                <Phone className="w-6 h-6 text-primary transition-all duration-500 hover:-translate-y-2 hover:text-neon" />
              </a>
            </li>
          </ul>
          <div className="w-[2px] h-32 bg-primary relative overflow-hidden before:content-[''] before:absolute before:w-full before:h-full before:bg-neon before:translate-y-full before:transition-all before:duration-700 group-hover:before:translate-y-0" />
        </div>

        <div
          id="socials-desktop-right"
          className="group fixed hidden flex-col justify-end items-center bottom-0 z-10 right-20 lg:flex"
        >
          <a
            title="email"
            href={email_link}
            className="pb-4 font-roboto-mono font-semibold text-primary [writing-mode:vertical-lr] transition-all duration-500 hover:text-neon hover:-translate-y-2"
          >
            {email}
          </a>
          <div className="w-[2px] h-32 bg-primary relative overflow-hidden before:content-[''] before:absolute before:w-full before:h-full before:bg-neon before:translate-y-full before:transition-all before:duration-700 group-hover:before:translate-y-0" />
        </div>

        <ul
          id="socials-mobile"
          className="w-full flex justify-center gap-6 lg:hidden"
        >
          <li>
            <a
              target="_blank"
              title="linkedin"
              className="group"
              href={linkedin_link}
            >
              <Linkedin className="w-6 h-6 text-primary transition-colors duration-500 group-hover:text-neon" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              title="telegram"
              className="group"
              href={telegram_link}
            >
              <Send className="w-6 h-6 text-primary transition-colors duration-500 group-hover:text-neon" />
            </a>
          </li>
          <li>
            <a
              title="email"
              target="_blank"
              href={email_link}
              className="group"
            >
              <AtSign className="w-6 h-6 text-primary transition-colors duration-500 group-hover:text-neon" />
            </a>
          </li>
          <li>
            <a
              title="phone"
              target="_blank"
              href={phone_link}
              className="group"
            >
              <Phone className="w-6 h-6 text-primary transition-colors duration-500 group-hover:text-neon" />
            </a>
          </li>
        </ul>

        <a
          target="_blank"
          href="https://github.com/cookieMonsterDev"
          className="font-roboto-mono font-bold text-xs md:text-sm text-primary transition-colors duration-500 hover:text-neon"
        >
          Designed & Build by Mykhailo Toporkov
        </a>
      </div>
    </footer>
  );
};
