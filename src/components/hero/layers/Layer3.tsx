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
          لم يستمر جو الكآبة ذاك، ولم تستبد به العزلة طويلاً؛ ساعدته المدرسة على
          أن يتحرر من تلك الصبغة التي نشأ بها، ليجد نفسه مع الدراسة، بين أصدقاء
          متعددون ووسط صحبة جميلة.
          <br />
          <br />
          في المنامة كانت بداية مشواره الدراسي، حتى أنهى الثانوية، ثم انتقل إلى
          القاهرة للدراسة في كلية الحقوق، والتي يصفها بأنها "غنية بلا حدود" - إذ
          (يُقال) أن رواية "شقة الحرية" التي كتبها، تحكي التجربة الواقعية لغازي
          أثناء دراسته في القاهرة.
          <br />
          <br />
          بعد ذلك، عاد إلى السعودية، مصممًا على مواصلة دراسته في الخارج رغم
          العروض الوظيفية الجذابة، مثل منصب مدير عام الإدارة القانونية بوزارة
          البترول والثروة المعدنية وعرض والده للانضمام إلى العمل التجاري
          العائلي.
          <br />
          <br />
          احترامًا لاستقلاله، ساعده والده في تدبير ابتعاث حكومي إلى الخارج. توجه
          إلى جامعة جنوب كاليفورنيا بلوس أنجلوس، حيث أكمل الماجستير. خلال
          دراسته، فاز برئاسة جمعية الطلاب العرب بالجامعة، وحولها إلى منظمة نشطة
          ومبدعة، بعد أن كانت الفرقة سمتها نظرًا للوضع الذي كان يعيشه الوطن
          العربي آنذاك.
        </TextBox>
      </ParallaxLayer>
      {/* main text */}
    </>
  );
};

export default Layer3;
