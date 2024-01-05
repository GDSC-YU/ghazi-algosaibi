import { MutableRefObject } from "react";

import { ParallaxLayer, IParallax } from "@react-spring/parallax";

import TextBox from "../parts/TextBox";

import { makeGhaziUrl } from "@lib/utils";

import style from "../styles/Layers.module.css";

const Layer2 = ({ parallax }: { parallax: MutableRefObject<IParallax> }) => {
  return (
    <>
      {/* moving image */}
      <ParallaxLayer offset={1.3} speed={-0.3} className="pointer-events-none">
        <img
          src={makeGhaziUrl("young.jpg", false)}
          alt="Young Ghazi Algosaibi"
          className={style.image}
        />
      </ParallaxLayer>
      {/* moving image */}

      {/* main text */}
      <ParallaxLayer
        offset={1}
        speed={0.1}
        onClick={() => parallax.current.scrollTo(2)}
        className="flex items-center justify-center"
      >
        <TextBox>
          ولد غازي القصيبي في بيئة مشبعة بالكآبة كما يصفها بنفسه، فقد توفي جده
          قبل ولادته بفترة قصيرة، وأمه بعد ولادته بتسع أشهر، وكان بلا أقران
          يؤنسونه.
          <br />
          <br />
          تربى بين قطبين متناقضين: والده الصارم (كان الخروج إلى الشارع محرّما
          على سبيل المثال)، وجدته لأمه (وكانت تتصف بالحنان المفرط والشفقة
          المتناهية على الصغير اليتيم).
          <br />
          <br />
          لم يكن لهذه البيئة تأثير سلبي على حياة غازي الطفل كما قد يُتوقع بل خرج
          من ذلك المأزق بمبدأ إداري يجزم بأن «السلطة بلا حزم تؤدي إلى تسيب خطر،
          وأن الحزم بلا رحمة يؤدي إلى طغيان أشد خطورة.»
          <br />
          <br />
          هذا المبدأ، الذي عايشه غازي الطفل طبقه غازي المدير وغازي الوزير وغازي
          السفير أيضًا فكان على ما يبدو سببًا في نجاحاته المتواصلة في المجال
          الإداري.
        </TextBox>
      </ParallaxLayer>
      {/* main text */}
    </>
  );
};

export default Layer2;
