"use client";

import { useWritingTileSheet } from "@/lib/store/WritingTileSheet";

const WritingTile = ({ thing }: { thing: Thing }) => {
  const { setThing } = useWritingTileSheet();

  const handleWritingTileClicked = () => {
    setThing(thing);
  };

  return (
    <div
      className="m-4 flex flex-col items-center rounded-2xl bg-secondary p-4 text-center md:hover:shadow-lg lg:transition-all lg:hover:scale-105 lg:hover:cursor-pointer"
      onClick={handleWritingTileClicked}
    >
      <img
        className="mb-4 h-60 rounded-2xl"
        src={thing.imageUrl}
        alt={thing.title}
      />
      <h3 className="line-clamp-2 text-xl">{thing.title}</h3>
    </div>
  );
};

export default WritingTile;
