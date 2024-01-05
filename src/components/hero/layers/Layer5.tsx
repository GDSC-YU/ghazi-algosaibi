import { IParallax, ParallaxLayer } from "@react-spring/parallax";
import { MutableRefObject } from "react";
import Link from "next/link";

const Layer5 = ({ parallax }: { parallax: MutableRefObject<IParallax> }) => {
  return (
    <>
      <ParallaxLayer
        offset={4}
        speed={0.1}
        onClick={() => parallax.current.scrollTo(0)}
        className="flex items-center justify-center"
      >
        <div className="text-center text-4xl font-bold text-white">
          <p>
            صنع من قبل طلاب{" "}
            <a
              className="text-orange-400 transition-transform duration-200 ease-in-out hover:scale-105"
              href="https:/yu.edu.sa"
              target="_blank"
            >
              جامعة اليمامة
            </a>{" "}
            🎓:
          </p>

          <br />

          <div className="flex flex-row items-center justify-center gap-6 text-2xl">
            <a
              className="transition-transform duration-200 ease-in-out hover:scale-105"
              href={`https://khalil.im/`}
              target="_blank"
            >
              <div className="flex flex-col items-center gap-4">
                <img
                  className="h-20 w-20 rounded-full"
                  src="/khalil.jpg"
                  alt="خليل ملحم"
                />

                <p>خليل ملحم</p>
              </div>
            </a>

            <span className="text-6xl">|</span>

            <a
              className="transition-transform duration-200 ease-in-out hover:scale-105"
              href={`https://yazeed.alkhalaf.dev`}
              target="_blank"
            >
              <div className="flex flex-col items-center gap-4">
                <img
                  className="h-20 w-20 rounded-full"
                  src="https://yazeed.alkhalaf.dev/images/me-grey.jpg"
                  alt="يزيد الخلف"
                />

                <p>يزيد الخلف</p>
              </div>
            </a>
          </div>
        </div>
      </ParallaxLayer>
    </>
  );
};

export default Layer5;
