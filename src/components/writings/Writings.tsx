import { normalizeArabic } from "@lib/utils";
import things from "@lib/things";

import WritingTile from "./parts/WritingTile";

const Writings = ({ query }: { query: string }) => {
  function searchThings(query: string) {
    if (!query) {
      return things;
    }

    const normalizedQuery = normalizeArabic(query);

    return things.filter((thing) => {
      const normalizedTitle = normalizeArabic(thing.title);
      const normalizedYear = normalizeArabic(thing.year);
      const normalizedPublisher = normalizeArabic(thing.publisher);
      const normalizedNotes = normalizeArabic(thing.notes);

      return (
        normalizedTitle.includes(normalizedQuery) ||
        normalizedYear.includes(normalizedQuery) ||
        normalizedPublisher.includes(normalizedQuery) ||
        normalizedNotes.includes(normalizedQuery)
      );
    });
  }

  const filteredThings = searchThings(query);

  if (filteredThings.length === 0) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-5 text-center">
        <p className="text-9xl">😅</p>
        <h1 className="text-4xl">لا يوجد نتائج</h1>
      </div>
    );
  }

  return (
    <div className="m-auto grid max-w-4xl auto-rows-max grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {filteredThings.map((thing) => (
        <WritingTile key={thing.id} thing={thing} />
      ))}
    </div>
  );
};

export default Writings;
