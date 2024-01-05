"use client";

import { useRef } from "react";

import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";

import { Layer1, Layer2 } from "./layers";

import { makeParallaxUrl } from "@lib/utils";

const Hero = () => {
  const parallax = useRef<IParallax>(null!);

  return (
    <Parallax
      ref={parallax}
      pages={2}
      className="scrollbar-none bg-black text-white"
    >
      {/* background stars */}
      <ParallaxLayer
        offset={0}
        speed={0}
        factor={2}
        style={{
          backgroundImage: makeParallaxUrl("stars.svg", true),
          backgroundSize: "cover",
        }}
      />
      {/* background stars */}
      <Layer1 parallax={parallax} />
      <Layer2 parallax={parallax} />
    </Parallax>
  );
};

export default Hero;
