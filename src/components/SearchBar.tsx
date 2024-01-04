"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import Image from "next/image";

import magnifyingGlassSolid from "@images/magnifying-glass-solid.svg";

const SearchBar = ({ placeholder }: { placeholder: string }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="mb-12 flex flex-row items-center justify-center px-4">
      <div className="relative">
        <Image
          src={magnifyingGlassSolid}
          alt="أيقونة البحث"
          className="absolute left-3 top-1/2 -translate-y-1/2 transform"
        />
        <input
          type="text"
          className="h-12 w-full rounded-2xl bg-secondary pl-12 pr-5 text-2xl text-outline outline-primary md:w-96"
          placeholder={placeholder}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          defaultValue={searchParams.get("query")?.toString()}
        />
      </div>
    </div>
  );
};

export default SearchBar;
