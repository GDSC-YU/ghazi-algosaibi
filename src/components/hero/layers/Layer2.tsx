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
          className="mr-5 w-24 rounded-xl border-4 border-white md:w-36 lg:w-48"
        />
      </ParallaxLayer>
      {/* right side image */}

      {/* main text */}
      <ParallaxLayer
        offset={1}
        speed={0.1}
        onClick={() => parallax.current.scrollTo(2)}
        className="flex items-center justify-center"
      >
        <p className="max-w-xs text-center text-sm font-semibold md:max-w-md md:text-base lg:max-w-lg lg:text-lg">
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
        </p>
      </ParallaxLayer>
      {/* main text */}
    </>
  );
};

export default Layer2;
