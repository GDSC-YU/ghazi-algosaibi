"use client";

import { useRef, useEffect } from "react";

import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";

import { Layer1, Layer2, Layer3, Layer4, Layer5, Layer6 } from "./layers";

import { makeParallaxUrl } from "@lib/utils";

const Hero = () => {
  const parallax = useRef<IParallax>(null!);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const offset = params.get("offset");
    const offsetNumber = Number(offset);

    if (!isNaN(offsetNumber)) {
      parallax.current.scrollTo(offsetNumber);
    }
  }, []);

  return (
    <Parallax
      ref={parallax}
      pages={6}
      className="bg-black text-white scrollbar-none"
    >
      {/* background stars */}
      <ParallaxLayer
        offset={0}
        speed={0}
        factor={3}
        style={{
          backgroundImage: makeParallaxUrl("stars.svg", true),
          backgroundSize: "cover",
        }}
      />
      <ParallaxLayer
        offset={3}
        speed={0}
        factor={3}
        style={{
          backgroundImage: makeParallaxUrl("stars.svg", true),
          backgroundSize: "cover",
        }}
      />
      {/* background stars */}

      <Layer1 parallax={parallax} />
      {/* البداية */}
      <Layer2 parallax={parallax} />
      {/* تعليمه */}
      <Layer3 parallax={parallax} />
      {/* مناصبه */}
      <Layer4 parallax={parallax} />
      {/* النهاية */}
      <Layer5 parallax={parallax} />
      {/* صنع بـ */}
      <Layer6 parallax={parallax} />
    </Parallax>
  );
};

export default Hero;
