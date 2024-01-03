import Image from "next/image";
import logo from "@/app/images/logo.png";
import HeaderButton from "./HeaderButton";

export default function Header() {
  return (
    <header className="bg-primary flex h-24 flex-row items-center justify-between gap-4 px-10">
      <Image src={logo} alt="شعار غازي عبدالرحمن القصيبي" />
      <div className="flex flex-row items-center justify-center">
        <HeaderButton>ع</HeaderButton>
      </div>
    </header>
  );
}
