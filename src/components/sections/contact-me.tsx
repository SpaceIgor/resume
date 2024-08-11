import { config } from "@/lib/config";

export const ContactMe = () => {
  const email_link = `mailto:${config.socials.email}`;
  const text = config.texts.contact;

  return (
    <section
      id="contact"
      className="container h-[600px] flex justify-center items-center md:h-[1000px]"
    >
      <div className="w-full flex flex-col gap-4 md:w-3/5">
        <h2 className="text-neon text-4xl md:text-5xl">Contact me</h2>
        <p className="font-roboto-mono font-semibold text-primary  md:text-xl">
          {text}
        </p>
        <a
          href={email_link}
          className="w-fit mt-4 px-4 py-2 text-lg md:text-xl font-roboto-mono font-bold text-neon border-2 border-neon rounded-sm overflow-hidden relative transition-all duration-700 before:content-[''] before:absolute before:top-0 before:w-[120%] before:h-full before:bg-neon before:translate-x-[-110%] before:skew-x-[-20deg] before:-z-[1] before:transition-all before:duration-700 hover:text-secondary hover:before:translate-x-[-20%] "
        >
          Send message!
        </a>
      </div>
    </section>
  );
};
