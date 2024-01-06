import { Suspense } from "react";

import Header from "@components/header";
import SearchBar from "@components/SearchBar";
import { Writings, WritingTileSheet } from "@components/writings";
import Footer from "@components/footer";

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
      <Header />
      <h1 className="p-14 text-center text-4xl font-bold text-primary">
        اكتشف المؤلّفات 📚
      </h1>

      <SearchBar placeholder="ابحث عن ..." />

      <Suspense key={query} fallback={"جاري التحميل..."}>
        <Writings query={query} />
      </Suspense>

      <Suspense>
        <WritingTileSheet />
      </Suspense>

      <Footer />
    </>
  );
}
