import { config } from "@/lib/config";

export const AboutMe = () => {
  const skills = config.skills;
  const text = config.texts.about;

  return (
    <section
      id="about"
      className="container min-h-screen pt-20 flex justify-center items-center pb-80 md:pb-0"
    >
      <div className="w-full flex flex-col  justify-center gap-4 md:gap-8 md:w-3/5">
        <h2 className="text-neon text-4xl md:text-5xl">About me</h2>
        <p className="font-roboto-mono font-semibold text-primary  md:text-xl">
          {text}
        </p>
        <div className="hexagon-grid-wrapper">
          <div className="hexagon-grid-container">
            {skills.map(({ url, title }) => (
              <div className="hexagon-item group" key={url}>
                <span className="absolute w-[100px] text-ellipsis overflow-hidden -top-8 left-1/2 -translate-x-1/2 flex-col items-center hidden text-neon group-hover:flex">
                  {title}
                </span>

                <div className="hexagon-item-content">
                  <img
                    src={url}
                    alt={title}
                    className="w-[70%] h-[70%] transition-all duration-500 hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
