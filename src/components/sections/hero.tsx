import { RubberBandText } from "../rubber-band-text";

export const HeroSection = () => {
  const welcome = "Hi,".split("");
  const name = "I’m Ihor,".split("");
  const position = "Python developer".split("");
  const welcomeLength = welcome.length - 1;
  const nameLength = name.length - 1;

  return (
    <section className="container p h-screen flex justify-center items-center">
      <div>
        <h1 aria-label="Hi, I’m  Mykhailo, JavaScript engineer">
          {welcome.map((e, i) => (
            <RubberBandText
              key={i}
              text={e}
              duration={500}
              delay={50 * i}
              className="text-4xl md:text-5xl tracking-widest"
            />
          ))}
          <br />
          {name.map((e, i) =>
            e !== " " ? (
              <RubberBandText
                key={i}
                text={e}
                duration={500}
                className="text-4xl md:text-5xl tracking-widest"
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
                className="text-4xl md:text-5xl tracking-widest"
                delay={50 * i + (500 + nameLength * 50)}
              />
            ) : (
              <span aria-hidden key={i} className="tracking-[16px]">
                &nbsp;
              </span>
            )
          )}
        </h1>
      </div>
    </section>
  );
};
