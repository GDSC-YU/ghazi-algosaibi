"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import magnifyingGlassSolid from "@/app/images/magnifying-glass-solid.svg";
import Image from "next/image";

export default function SearchBar({ placeholder }: { placeholder: string }) {
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
          className="bg-secondary text-outline h-12 w-96 rounded-2xl pl-12 pr-5 text-2xl"
          placeholder={placeholder}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          defaultValue={searchParams.get("query")?.toString()}
        />
      </div>
    </div>
  );
}
