import { MutableRefObject } from "react";

import Link from "next/link";

import { ParallaxLayer, IParallax } from "@react-spring/parallax";

import { makeGhaziUrl } from "@lib/utils";

import styles from "../styles/Layer1.module.css";

const Layer1 = ({ parallax }: { parallax: MutableRefObject<IParallax> }) => {
  return (
    <>
      {/* main text */}
      <ParallaxLayer
        offset={0}
        speed={0.1}
        onClick={() => parallax.current.scrollTo(1)}
        className="flex flex-col items-center justify-center gap-y-7"
      >
        {/* middle image */}
        <img
          src={makeGhaziUrl("ghazi.png", false)}
          alt="Ghazi Algosaibi Image"
          className="w-52 md:w-72"
        />
        {/* middle image */}

        {/* middle text */}
        <h1 className="text-center text-lg font-bold md:text-2xl">
          «وتشاء أنت من البشائر قطرةً ويشاء ربُك أن يُغيثك بالمطر»
        </h1>
        {/* middle text */}

        {/* action buttons */}
        <div className="flex gap-x-2">
          <button
            onClick={() => parallax.current.scrollTo(1)}
            className={styles.heroButton}
          >
            من هو غازي؟
          </button>
          <Link
            href="/discover-writings"
            onClick={(e) => {
              e.stopPropagation();
            }}
            className={styles.heroButton}
          >
            تصفح مؤلّفاته
          </Link>
        </div>
        {/* action buttons */}
      </ParallaxLayer>
      {/* main text */}
    </>
  );
};

export default Layer1;
