import { RubberBandText } from "../rubber-band-text";

export const HeroSection = () => {
  const welcome = "Hi,".split("");
  const name = "I’m Ihor,".split("");
  const position = "Python developer".split("");
  const welcomeLength = welcome.length - 1;
  const nameLength = name.length - 1;

  return (
    <section
      id="hero"
      className="container min-h-screen flex justify-center items-center"
    >
      <div className="w-full flex flex-col gap-4 md:w-3/5">
        <h1 aria-label="Hi, I’m  Ihor, Python developer">
          {welcome.map((e, i) => (
            <RubberBandText
              key={i}
              text={e}
              duration={500}
              delay={50 * i}
              className="text-4xl md:text-5xl tracking-wider"
            />
          ))}
          <br />
          {name.map((e, i) =>
            e !== " " ? (
              <RubberBandText
                key={i}
                text={e}
                duration={500}
                className="text-4xl md:text-5xl tracking-wider"
                delay={50 * i + (500 + welcomeLength * 50)}
              />
            ) : (
              <span aria-hidden key={i} className="tracking-[16px]">
                &nbsp;
              </span>
            )
          )}
          <br />
          {position.map((e, i) =>
            e !== " " ? (
              <RubberBandText
                key={i}
                text={e}
                duration={500}
                className="text-4xl md:text-5xl tracking-wider"
                delay={50 * i + (500 + nameLength * 50)}
              />
            ) : (
              <span aria-hidden key={i} className="tracking-[16px]">
                &nbsp;
              </span>
            )
          )}
        </h1>
        <p className="font-roboto-mono font-semibold text-primary  md:text-xl">
          Back-End Python developer / Web Python developer
        </p>
        <a
          href="#about"
          className="w-fit mt-4 px-4 py-2 text-lg md:text-xl font-roboto-mono font-bold text-neon border-2 border-neon rounded-sm transition-colors duration-500 hover:bg-neon-light"
        >
          About me
        </a>
      </div>
    </section>
  );
};
