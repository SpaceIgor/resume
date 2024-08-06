import { useState, useEffect } from "react";

import { loadFull } from "tsparticles";
import Particles, { initParticlesEngine } from "@tsparticles/react";

import type { ISourceOptions } from "@tsparticles/engine";

const options: ISourceOptions = {
  background: {
    color: {
      value: "#0a192f",
    },
  },
  fpsLimit: 120,
  particles: {
    color: {
      value: "#0ee3b5",
    },
    links: {
      color: "#0ee3b5",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 0.3,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        // area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};

export const Wallpaper = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (init)
    return (
      <Particles
        id="tsparticles"
        className=" fixed w-screen h-screen inset-0 -z-10"
        options={options}
      />
    );

  return null;
};
