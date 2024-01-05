import { MutableRefObject } from "react";

import { IParallax, ParallaxLayer } from "@react-spring/parallax";

import TextBox from "../parts/TextBox";

import { makeGhaziUrl } from "@lib/utils";

import style from "../styles/Layers.module.css";

const Layer5 = ({ parallax }: { parallax: MutableRefObject<IParallax> }) => {
  return (
    <>
      {/* moving image */}
      <ParallaxLayer
        offset={4.3}
        speed={-0.3}
        className="pointer-events-none flex items-start justify-end"
      >
        <img
          src={makeGhaziUrl("sitting.png", false)}
          alt="Ghazi Algosaibi on the far left at a panel discussion with two other participants"
          className={style.image}
        />
      </ParallaxLayer>

      {/* moving image */}

      {/* main text */}
      <ParallaxLayer
        offset={4}
        speed={0.1}
        onClick={() => parallax.current.scrollTo(5)}
        className="flex items-center justify-center"
      >
        <TextBox>
          توفي عن عمر يناهز السبعين عامًا في يوم الأحد ٥ رمضان ١٤٣١ هـ الموافق
          ١٥ أغسطس ٢٠١٠ الساعة العاشرة صباحًا في مستشفى الملك فيصل التخصصي
          بالرياض بعد معاناة طويلة مع المرض ودفن في مقبرة العود.
          <br />
          <br />
          شكل الدكتور غازي علامة فارقة في جبين المجتمع العربي والسعودي المعاصر
          لما مثله من ظاهرة نادرة تعدت الأدب والشعر والكتابة إلى تقلد المناصب
          الأكاديمية والوزارية.
        </TextBox>
      </ParallaxLayer>
      {/* main text */}
    </>
  );
};

export default Layer5;
