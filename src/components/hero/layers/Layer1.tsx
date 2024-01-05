import { MutableRefObject } from "react";

import Link from "next/link";

import { ParallaxLayer, IParallax } from "@react-spring/parallax";

import { makeParallaxUrl, makeGhaziUrl } from "@lib/utils";

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
        <h1 className="text-3xl font-bold md:text-4xl">من هو غازي؟</h1>
        {/* middle text */}

        {/* action buttons */}
        <div className="flex gap-x-2">
          <button
            onClick={() => parallax.current.scrollTo(1)}
            className={styles.heroButton}
          >
            تصفح القصّة
          </button>
          <Link
            href="/discover-writings"
            onClick={(e) => {
              e.stopPropagation();
            }}
            className={styles.heroButton}
          >
            اكتشف المؤلّفات
          </Link>
        </div>
        {/* action buttons */}
      </ParallaxLayer>
      {/* main text */}
    </>
  );
};

export default Layer1;
