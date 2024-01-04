"use client";

import Link from "next/link";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Hero = () => {
  return (
    <Parallax pages={1} style={{ top: "0", left: "0" }}>
      <ParallaxLayer offset={0} speed={0.5}>
        <div className="flex h-screen w-screen flex-col items-center justify-center bg-primary">
          <h1 className="p-14 text-5xl font-bold text-white">غازي القصيبي</h1>
          <Link href="/discover-writings">
            <p className="rounded-2xl bg-black px-4 py-2 text-white transition-all hover:scale-105">
              استكشف المؤلّفات
            </p>
          </Link>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
};

export default Hero;
