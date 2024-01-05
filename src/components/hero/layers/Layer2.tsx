import { MutableRefObject } from "react";

import { ParallaxLayer, IParallax } from "@react-spring/parallax";

import { makeGhaziUrl } from "@lib/utils";

const Layer2 = ({ parallax }: { parallax: MutableRefObject<IParallax> }) => {
  return (
    <>
      {/* right side image */}
      <ParallaxLayer offset={1.3} speed={-0.3} className="pointer-events-none">
        <img
          src={makeGhaziUrl("ghaz-old-bw-cut.jpg", false)}
          className="m-5 w-1/6 rounded-xl border-4 border-white"
        />
      </ParallaxLayer>
      {/* right side image */}

      {/* main text */}
      <ParallaxLayer
        offset={1}
        speed={0.1}
        onClick={() => parallax.current.scrollTo(2)}
        className="flex flex-col items-center justify-center gap-y-7"
      >
        <h1 className="text-center text-3xl font-bold md:text-4xl">
          غازي بن عبد الرحمن بن حسن بن عبدالله القصيبي، <br />
          شاعر وأديب وكاتب وسفير دبلوماسي ووزير سعودي 🇸🇦
        </h1>
      </ParallaxLayer>
      {/* main text */}
    </>
  );
};

export default Layer2;
