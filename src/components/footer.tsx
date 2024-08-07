import { Send, AtSign, Phone, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full">
      <div className="container p-6 flex flex-col gap-6 justify-center items-center">
        <div
          id="socials-desktop-left"
          className="group fixed hidden flex-col justify-end items-center bottom-0 z-10 left-20 lg:flex"
        >
          <ul
            id="socials-mobile"
            className="mb-4 w-full flex flex-col justify-center gap-6"
          >
            <li>
              <a href="" target="_blank" title="">
                <Linkedin className="w-6 h-6 text-primary transition-all duration-500 hover:-translate-y-2 hover:text-neon" />
              </a>
            </li>
            <li>
              <a href="" target="_blank" title="">
                <Send className="w-6 h-6 text-primary transition-all duration-500 hover:-translate-y-2 hover:text-neon" />
              </a>
            </li>
            <li>
              <a href="" target="_blank" title="">
                <AtSign className="w-6 h-6 text-primary transition-all duration-500 hover:-translate-y-2 hover:text-neon" />
              </a>
            </li>
            <li>
              <a href="" target="_blank" title="">
                <Phone className="w-6 h-6 text-primary transition-all duration-500 hover:-translate-y-2 hover:text-neon" />
              </a>
            </li>
          </ul>
          <div className="w-[2px] h-32 bg-primary relative overflow-hidden before:content-[''] before:absolute before:w-full before:h-full before:bg-neon before:translate-y-full before:transition-all before:duration-500 group-hover:before:translate-y-0" />
        </div>

        <div
          id="socials-desktop-right"
          className="group fixed hidden flex-col justify-end items-center bottom-0 z-10 right-20 lg:flex"
        >
          <a
            href=""
            title=""
            aria-label="email link"
            className="pb-4 font-roboto-mono font-semibold text-primary [writing-mode:vertical-lr] transition-all duration-500 hover:text-neon hover:-translate-y-2"
          >
            test email .com
          </a>
          <div className="w-[2px] h-32 bg-primary relative overflow-hidden before:content-[''] before:absolute before:w-full before:h-full before:bg-neon before:translate-y-full before:transition-all before:duration-500 group-hover:before:translate-y-0" />
        </div>

        <ul
          id="socials-mobile"
          className="w-full flex justify-center gap-6 lg:hidden"
        >
          <li>
            <a href="" target="_blank" title="" className="group">
              <Linkedin className="w-6 h-6 text-primary transition-colors duration-500 group-hover:text-neon" />
            </a>
          </li>
          <li>
            <a href="" target="_blank" title="" className="group">
              <Send className="w-6 h-6 text-primary transition-colors duration-500 group-hover:text-neon" />
            </a>
          </li>
          <li>
            <a href="" target="_blank" title="" className="group">
              <AtSign className="w-6 h-6 text-primary transition-colors duration-500 group-hover:text-neon" />
            </a>
          </li>
          <li>
            <a href="" target="_blank" title="" className="group">
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
