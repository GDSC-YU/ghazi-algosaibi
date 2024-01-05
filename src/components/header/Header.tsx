import Image from "next/image";
import logo from "@/app/images/logo.png";
import HeaderButton from "./parts/HeaderButton";
import Link from "next/link";

const Header = () => {
  return (
    <header
      className="flex h-24 flex-row items-center justify-between gap-4 bg-primary px-10"
      style={{
        backgroundImage: `url("/parallax/stars.svg")`,
        objectFit: "cover",
      }}
    >
      <Link href={"/"}>
        <Image
          src={logo}
          width={292}
          height={61}
          alt="شعار غازي عبدالرحمن القصيبي"
        />
      </Link>
      <div className="flex flex-row items-center justify-center">
        <HeaderButton>ع</HeaderButton>
      </div>
    </header>
  );
};

export default Header;
