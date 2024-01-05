"use client";

import { useRef } from "react";

import Link from "next/link";

import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";

import { makeParallaxUrl, makeGhaziUrl } from "@lib/utils";

import ButtonStyles from "./styles/Button.module.css";

const Hero = () => {
  const parallax = useRef<IParallax>(null!);

  return (
    <Parallax
      ref={parallax}
      pages={3}
      className="scrollbar-none bg-primary text-white"
    >
      <ParallaxLayer
        offset={1}
        speed={1}
        style={{ backgroundColor: "#805E73" }}
      />
      <ParallaxLayer
        offset={2}
        speed={1}
        style={{ backgroundColor: "#87BCDE" }}
      />
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
        offset={1.3}
        speed={-0.3}
        style={{ pointerEvents: "none" }}
      >
        <img
          src={makeGhaziUrl("ghaz-old-bw-cut.jpg", false)}
          className="m-5 w-1/6 rounded-xl border-4 border-white"
        />
      </ParallaxLayer>

      <ParallaxLayer
        offset={2.5}
        speed={-0.4}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <img
          src={makeParallaxUrl("earth.svg", false)}
          style={{ width: "60%" }}
        />
      </ParallaxLayer>

      <ParallaxLayer
        offset={2}
        speed={-0.3}
        style={{
          backgroundSize: "80%",
          backgroundPosition: "center",
          backgroundImage: makeParallaxUrl("clients.svg", true),
        }}
      />

      <ParallaxLayer
        offset={0}
        speed={0.1}
        onClick={() => parallax.current.scrollTo(1)}
        className="flex flex-col items-center justify-center gap-y-7"
      >
        <img
          src={makeGhaziUrl("ghazi.png", false)}
          alt="Ghazi Algosaibi Image"
          className="w-52 md:w-72"
        />
        <h1 className="text-3xl font-bold md:text-4xl">من هو غازي؟</h1>
        <div className="flex gap-x-2">
          <button
            onClick={() => parallax.current.scrollTo(1)}
            className={ButtonStyles.heroButton}
          >
            اقرأ القصّة
          </button>
          <Link
            href="/discover-writings"
            onClick={(e) => {
              e.stopPropagation();
            }}
            className={ButtonStyles.heroButton}
          >
            اكتشف المؤلّفات
          </Link>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}
        speed={0.1}
        onClick={() => parallax.current.scrollTo(2)}
        className="flex flex-col items-center justify-center gap-y-7"
      >
        <h1 className="text-center text-3xl font-bold md:text-4xl">
          غازي بن عبد الرحمن بن حسن بن عبدالله القصيبي، <br />
          شاعر وأديب وكاتب وسفير دبلوماسي ووزير سعودي.
        </h1>
      </ParallaxLayer>

      <ParallaxLayer
        offset={2}
        speed={-0}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={() => parallax.current.scrollTo(0)}
      >
        <img
          src={makeParallaxUrl("clients-main.svg", false)}
          style={{ width: "40%" }}
        />
      </ParallaxLayer>
    </Parallax>
  );
};

export default Hero;
