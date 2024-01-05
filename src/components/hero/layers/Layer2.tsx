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
          في بيئة مشبعة بالكآبة كما يصفها القصيبي كانت ولادته التي وافقت اليوم
          الثاني من شهر مارس عام ١٩٤٠، فبعد تسعة أشهر من ولادة غازي توفيت
          والدته، وقبل ولادته بقليل كان جده لوالدته قد توفي أيضًا وإلى جانب هذا
          كله كان بلا أقران أو أطفال بعمره يؤنسونه، في ذلك الجو، يقول غازي:
          «ترعرعت متأرجحاً بين قطبين أولهما أبي وكان يتسم بالشدة والصرامة (كان
          الخروج إلى الشارع محرّما على سبيل المثال)، وثانيهما جدتي لأمي، وكانت
          تتصف بالحنان المفرط والشفقة المتناهية على (الصغير اليتيم).»
          <br />
          <br />
          ولكن لم يكن لتلك البيئة تأثير سلبي على حياة غازي الطفل كما قد يُتوقع
          بل خرج من ذلك المأزق بمبدأ إداري يجزم بأن «السلطة بلا حزم تؤدي إلى
          تسيب خطر، وأن الحزم بلا رحمة يؤدي إلى طغيان أشد خطورة.» هذا المبدأ،
          الذي عايشه غازي الطفل طبقه غازي المدير وغازي الوزير وغازي السفير أيضًا
          فكان على ما يبدو سبباً في نجاحاته المتواصلة في المجال الإداري، إلا
          أننا لا ندري بالضبط، ماذا كان أثر ذلك على غازي الأديب.
        </TextBox>
      </ParallaxLayer>
      {/* main text */}
    </>
  );
};

export default Layer2;
