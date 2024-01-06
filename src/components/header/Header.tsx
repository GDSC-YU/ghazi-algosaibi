import Image from "next/image";

import { makeParallaxUrl } from "@/lib/utils";

const Header = () => {
  return (
    <header
      className="flex h-24 flex-row items-center justify-center bg-primary px-10"
      style={{
        backgroundImage: makeParallaxUrl("/stars.svg", true),
        objectFit: "cover",
      }}
    >
      <a href="/">
        <Image
          src="/logo.svg"
          width={337}
          height={70}
          alt="شعار الدكتور غازي عبدالرحمن القصيبي"
        />
      </a>
    </header>
  );
};

export default Header;
