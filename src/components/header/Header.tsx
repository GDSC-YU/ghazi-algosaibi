import Image from "next/image";
import logo from "@/app/images/logo.png";
import HeaderButton from "./parts/HeaderButton";
import Link from "next/link";

const Header = () => {
  return (
    <header
      className="flex h-24 flex-row items-center gap-4 bg-primary px-10"
      style={{
        backgroundImage: `url("/parallax/stars.svg")`,
        objectFit: "cover",
      }}
    >
      <Link href={"/"}>
        <Image
          src={logo}
          width={337}
          height={70}
          alt="شعار غازي عبدالرحمن القصيبي"
        />
      </Link>
    </header>
  );
};

export default Header;
