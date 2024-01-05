import { MutableRefObject } from "react";

import { ParallaxLayer, IParallax } from "@react-spring/parallax";

import TextBox from "../parts/TextBox";

import { makeGhaziUrl } from "@lib/utils";

import style from "../styles/Layers.module.css";

const Layer4 = ({ parallax }: { parallax: MutableRefObject<IParallax> }) => {
  return (
    <>
      {/* moving image */}
      <ParallaxLayer offset={3.3} speed={-0.3} className="pointer-events-none">
        <img
          src={makeGhaziUrl("working.jpg", false)}
          alt="Ghazi Algosaibi on the far left at a panel discussion with two other participants"
          className={style.image}
        />
      </ParallaxLayer>
      {/* moving image */}

      {/* main text */}
      <ParallaxLayer
        offset={3}
        speed={0.1}
        onClick={() => parallax.current.scrollTo(4)}
        className="flex items-center justify-center"
      >
        <TextBox>
          بعد عودته إلى المملكة تولى مناصب عدة منها أستاذ مساعد في كلية العلوم
          الإدارية بجامعة الملك سعود ومستشار قانوني في مكاتب استشارية وفي وزارة
          الدفاع والطيران ووزارة المالية ومعهد الإدارة العامة.
          <br />
          <br />
          نال منصب عميد كلية التجارة بجامعة الملك سعود ومدير المؤسسة العامة
          للسكك الحديدية وتقلد منصب وزير الصناعة والكهرباء وبعدها وزير الصحة،
          وعمل سفيرًا للسعودية لدى البحرين ثم بريطانيا وعاد وزيرًا للمياه
          والكهرباء وأخيرًا وزيرًا للعمل.
          <br />
          <br />
          مُنح وسام الكويت ذو الوشاح من الطبقة الممتازة ووسام الملك عبد العزيز
          وعددًا من الأوسمة الأخرى من دول عربية وغير عربية.
          <br />
          <br />
          كان له اهتمامات اجتماعية وافرة، فقد كان عضوًا مؤسسًا لجمعية الأطفال
          المعوقين السعودية. عمل بلا مرتب في آخر ثلاثين سنة من حياته، حيث كانت
          مرتباته تُحول إلى الجمعية.
          <br />
          <br />
          أشاد به معلمه عبد الله بن محمد الطائي في مجال الشعر، ويعد كتاب "حياة
          في الإدارة" أشهر ما نشر له، والذي تناول سيرته الوظيفية وتجربته
          الإدارية. وصل عدد مؤلفاته إلى أكثر من ستين مؤلفًا، بالإضافة إلى أشعار
          متنوعة.
        </TextBox>
      </ParallaxLayer>
      {/* main text */}
    </>
  );
};

export default Layer4;
