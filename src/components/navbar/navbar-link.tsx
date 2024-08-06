export type NavbarLinkProps = { href: string; text: string };

export const NavbarLink: React.FC<NavbarLinkProps> = ({ href, text }) => {
  return (
    <a
      href={href}
      className="relative overflow-hidden text-xl font-roboto-mono font-bold text-primary uppercase transition-all ease-in-out duration-300 before:content-[''] before:absolute before:-bottom-0 before:h-[2px] before:w-full before:bg-neon before:-translate-x-full before:transition-all before:duration-300 hover:text-neon hover:before:translate-x-0"
    >
      {text}
    </a>
  );
};
