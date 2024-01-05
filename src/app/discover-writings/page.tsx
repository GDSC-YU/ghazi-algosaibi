import { Suspense } from "react";

import Link from "next/link";

import SearchBar from "@components/SearchBar";
import Writings from "@components/writings";
import WritingTileSheet from "@components/writings/parts/WiritingTileSheet";

import BackIcon from "~icons/line-md/arrow-left-circle";

export default function DiscoverWritings({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || "";

  return (
    <>
      <Link href="/" className="flex justify-end p-5">
        <BackIcon className="h-12 w-12 transition-transform duration-300 ease-in-out hover:scale-90" />
      </Link>
      <h1 className="p-14 text-center text-4xl font-bold">
        اكتشف المؤلّفات 📚
      </h1>

      <SearchBar placeholder="ابحث عن ..." />

      <Suspense key={query} fallback={"جاري التحميل..."}>
        <Writings query={query} />
      </Suspense>

      <Suspense>
        <WritingTileSheet />
      </Suspense>
    </>
  );
}
