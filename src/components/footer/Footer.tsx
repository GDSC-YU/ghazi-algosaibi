import { makeParallaxUrl } from "@lib/utils";

const Footer = () => {
  return (
    <div className="py-10">
      <footer
        className="absolute bottom-0 left-0 right-0 flex w-full flex-col items-center bg-primary py-6"
        style={{
          backgroundImage: makeParallaxUrl("/stars.svg", true),
          objectFit: "cover",
        }}
      >
        <a
          href="/?offset=5"
          className="text-center font-bold text-white transition-transform duration-200 ease-in-out hover:scale-105"
        >
          صنع باستخدام الكثير من القهوة <br className="md:hidden" />
          من قبل طلّاب جامعة اليمامة ☕️
        </a>
      </footer>
    </div>
  );
};

export default Footer;
