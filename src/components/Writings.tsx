import { normalizeArabic } from "@/lib/utils";
import things from "../lib/things";
import WritingTile from "./WritingTile";

export default function Writings({ query }: { query: string }) {
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

  return (
    filteredThings.length > 0 && (
      <ul className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4">
        {filteredThings.map((thing) => (
          <li key={thing.id}>
            <WritingTile thing={thing} />
          </li>
        ))}
      </ul>
    )
  );
}
