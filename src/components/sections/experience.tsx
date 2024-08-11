import { useRef, useState, useEffect } from "react";

import { SquareArrowOutUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { config } from "@/lib/config";

export const Experience = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [length, setLength] = useState(0);
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    const calculate = () => {
      const value =
        window.innerWidth > 775
          ? ref?.current?.scrollHeight || 0
          : ref?.current?.scrollWidth || 0;

      setLength(value);
    };

    calculate();

    window.addEventListener("resize", calculate);

    return () => {
      window.removeEventListener("resize", calculate);
    };
  }, [ref]);

  const { experience } = config;
  const sliderLength = length / experience.length;

  const { title, time_interval, company_link, responsibilities } =
    experience[tabIndex];

  return (
    <section
      id="experience"
      className="container min-h-[800px] flex justify-center items-center"
    >
      <div className="w-full flex flex-col gap-4 md:gap-8 md:w-3/5">
        <h2 className="text-neon text-4xl md:text-5xl">Experience</h2>
        <div className=" flex flex-col md:gap-6 md:flex-row">
          <div
            ref={ref}
            role="tab-buttons-list"
            className="overflow-auto relative flex flex-row md:flex-col"
          >
            {experience.map((item, index) => (
              <button
                key={item + "-button-" + index}
                aria-selected={index === tabIndex}
                onClick={() => setTabIndex(index)}
                role="tab-button"
                className={cn(
                  "p-4 min-w-fit font-roboto-mono text-primary text-lg font-bold text-left transition-colors duration-300 md:text-xl",
                  index === tabIndex && "text-neon"
                )}
              >
                {item.title}
              </button>
            ))}
            <div
              id="desktop slider"
              className="hidden absolute bg-neon transition-all duration-300 left-0 top-0 w-[2px] md:block"
              style={{
                height: `${sliderLength}px`,
                transform: `translateY(${tabIndex * sliderLength}px)`,
              }}
            />
          </div>
          <div
            role="tab"
            key={tabIndex}
            className="p-4  flex-1 flex flex-col gap-4 animate-fade-up md:animate-fade-left animate-duration-700 animate-ease-in-out"
          >
            <div className="w-full flex justify-between items-center">
              <h1 className="text-white font-bold text-2xl font-roboto-mono">
                {title}
              </h1>
              <a href={company_link} target="_blank">
                <SquareArrowOutUpRight className="w-6 h-6 text-neon" />
              </a>
            </div>
            <span className="font-roboto-mono font-bold text-neon">
              {time_interval}
            </span>
            <ul className="pl-6 space-y-2">
              {responsibilities.map((item, index) => (
                <li
                  key={item + "-" + index}
                  className="relative text-lg text-primary before:content-['\2BC8'] before:absolute before:text-neon before:-left-6"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
