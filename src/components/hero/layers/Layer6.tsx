import { MutableRefObject } from "react";

import { IParallax, ParallaxLayer } from "@react-spring/parallax";

import styles from "../styles/Layer6.module.css";
import Link from "next/link";

const Layer6 = ({ parallax }: { parallax: MutableRefObject<IParallax> }) => {
  return (
    <>
      <ParallaxLayer
        offset={5}
        speed={0.1}
        onClick={() => parallax.current.scrollTo(0)}
        className="flex items-center justify-center"
      >
        <div className="flex flex-col gap-y-16 text-center text-3xl font-bold md:text-4xl lg:text-5xl">
          <p>
            صنع من قبل طلاب{" "}
            <a
              className={`${styles.animation} text-orange-400 md:inline-block`}
              href="https:/yu.edu.sa"
              target="_blank"
            >
              <br className="md:hidden" />
              جامعة اليمامة
            </a>{" "}
            🎓
          </p>

          {/* <div className="flex flex-col items-center justify-center gap-10 text-xl md:flex-row md:text-2xl lg:text-3xl">
            <a
              className={styles.animation}
              href={`https://khalil.im/`}
              target="_blank"
            >
              <div className={styles.imageContainer}>
                <img
                  className={styles.image}
                  src="https://khalil.im/me.jpg"
                  alt="خليل ملحم"
                />
                <p>خليل ملحم</p>
              </div>
            </a>
            <a
              className={styles.animation}
              href={`https://yazeed.alkhalaf.dev/`}
              target="_blank"
            >
              <div className={styles.imageContainer}>
                <img
                  className={styles.image}
                  src="https://yazeed.alkhalaf.dev/images/me-grey.jpg"
                  alt="يزيد الخلف"
                />
                <p>يزيد الخلف</p>
              </div>
            </a>
          </div> */}
        </div>
      </ParallaxLayer>
    </>
  );
};

export default Layer6;
