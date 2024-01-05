import { MutableRefObject } from "react";

import { ParallaxLayer, IParallax } from "@react-spring/parallax";

import TextBox from "../parts/TextBox";

import { makeGhaziUrl } from "@lib/utils";

import style from "../styles/Layers.module.css";

const Layer3 = ({ parallax }: { parallax: MutableRefObject<IParallax> }) => {
  return (
    <>
      {/* moving image */}
      <ParallaxLayer
        offset={2.3}
        speed={-0.3}
        className="pointer-events-none flex items-start justify-end"
      >
        <img
          src={makeGhaziUrl("mortarboard.png", false)}
          alt="Ghazi Algosaibi wearing his graduation hat"
          className={style.image}
        />
      </ParallaxLayer>
      {/* moving image */}

      {/* main text */}
      <ParallaxLayer
        offset={2}
        speed={0.1}
        onClick={() => parallax.current.scrollTo(3)}
        className="flex items-center justify-center"
      >
        <TextBox>
          لم يستمر جو الكآبة ذاك، ولم تستبد به العزلة طويلاً، بل ساعدته المدرسة
          على أن يتحرر من تلك الصبغة التي نشأ بها، ليجد نفسه مع الدراسة، بين
          أصدقاء متعددون ووسط صحبة جميلة. وفي المنامة كانت بداية مشواره الدراسي،
          حتى أنهى الثانوية، ثم بعد ذلك حزم حقائبه نحو مصر، وإلى القاهرة
          بالتحديد، وفي جامعتها انتظم في كلية الحقوق، وبعد أن أنهى فترة الدراسة
          هناك، والتي يصفها بأنها "غنية بلا حدود" - ويبدو أنها كذلك بالفعل إذ
          (يُقال) أن رواية "شقة الحرية" التي كتبها، والتي كانت هي الأخرى غنية
          بلا حدود، تحكي التجربة الواقعية لغازي أثناء دراسته في القاهرة.
          <br />
          <br />
          بعد ذلك، عاد إلى السعودية حاملاً شهادة البكالوريوس في القانون، مصممًا
          على مواصلة دراسته في الخارج رغم العروض الوظيفية الحكومية الجذابة، بما
          في ذلك منصب مدير عام الإدارة القانونية بوزارة البترول والثروة
          المعدنية. رفض أيضًا عرض والده بالانضمام إلى العمل التجاري العائلي.
          احترامًا لاستقلاله، ساعده والده في تدبير ابتعاث حكومي إلى الخارج. في
          ١٩٦٢، توجه إلى جامعة جنوب كاليفورنيا بلوس أنجلوس، حيث حصل على ماجستير
          في العلاقات الدولية. خلال دراسته، فاز برئاسة جمعية الطلاب العرب
          بالجامعة، وحولها إلى منظمة نشطة ومبدعة، بعد أن كانت الفرقة سمتها نظرًا
          للوضع الذي كان يعيشه الوطن العربي آنذاك.
        </TextBox>
      </ParallaxLayer>
      {/* main text */}
    </>
  );
};

export default Layer3;
