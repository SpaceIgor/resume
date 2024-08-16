import { config } from "@/lib/config";

export const Education = () => {
  const education = config.education;

  return (
    <section
      id="education"
      className="container min-h-screen flex justify-center items-center pt-40 sm:pt-20 md:pt-0"
    >
      <div className="w-full flex flex-col gap-4 md:gap-8 md:w-3/5">
        <h2 className="text-neon text-4xl md:text-5xl">Education</h2>
        <div className="relative ">
          <ul className="relative space-y-10">
            {education.map((item) => (
              <li className="p-1 flex flex-col gap-2 ">
                <h1 className="text-white font-roboto-mono font-bold text-2xl">
                  {item.title}
                </h1>
                <span className="text-neon text-xl">
                  {item.degree}: {item.time_interval}
                </span>
                <p className=" text-primary text-xl bg-neon-light bg-clip-text">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
