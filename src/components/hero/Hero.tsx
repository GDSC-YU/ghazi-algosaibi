"use client";

import { useRef } from "react";

import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";

import { Layer1, Layer2, Layer3, Layer4 } from "./layers";

import { makeParallaxUrl } from "@lib/utils";

const Hero = () => {
  const parallax = useRef<IParallax>(null!);

  return (
    <Parallax
      ref={parallax}
      pages={4}
      className="bg-black text-white scrollbar-none"
    >
      {/* background stars */}
      <ParallaxLayer
        offset={0}
        speed={0}
        factor={4}
        style={{
          backgroundImage: makeParallaxUrl("stars.svg", true),
          backgroundSize: "cover",
        }}
      />
      {/* background stars */}
      <Layer1 parallax={parallax} />
      {/* نشأته */}
      <Layer2 parallax={parallax} />
      {/* تعليمه */}
      <Layer3 parallax={parallax} />
      {/* مناصبه */}
      <Layer4 parallax={parallax} />
    </Parallax>
  );
};

export default Hero;
