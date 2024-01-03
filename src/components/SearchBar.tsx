"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

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
      <input
        type="text"
        className="bg-secondary text-outline h-12 w-96 rounded-2xl p-2 text-2xl"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
      />
    </div>
  );
}
