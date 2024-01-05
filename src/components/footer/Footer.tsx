const Footer = () => {
  return (
    <footer
      className="flex flex-col items-center bg-primary p-6"
      style={{
        backgroundImage: `url("/parallax/stars.svg")`,
        objectFit: "cover",
      }}
    >
      <p className="text-base font-bold text-white">
        صنع باستخدام الكثير من القهوة من قبل طلّاب جامعة اليمامة ☕️
      </p>
    </footer>
  );
};

export default Footer;
