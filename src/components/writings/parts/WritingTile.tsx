"use client";

import { useWritingTileSheet } from "@/lib/store/WritingTileSheet";

const WritingTile = ({ thing }: { thing: Thing }) => {
  const { setThing } = useWritingTileSheet();

  const handleWritingTileClicked = () => {
    setThing(thing);
  };

  return (
    <div
      className="items-centerz m-4 flex flex-col rounded-2xl bg-white p-5 text-center lg:transition-transform lg:hover:scale-105 lg:hover:cursor-pointer"
      onClick={handleWritingTileClicked}
    >
      <img className="rounded-2xl" src={thing.imageUrl} alt={thing.title} />
      <h3 className="mt-4 line-clamp-2 text-xl text-black">{thing.title}</h3>
    </div>
  );
};

export default WritingTile;
