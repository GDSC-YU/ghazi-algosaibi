"use client";

import Sheet from "react-modal-sheet";

import { useWritingTileSheet } from "@/lib/store/WritingTileSheet";
import WritingTileSheetContent from "./WritingTileSheetContent";

import CircleMark from "~icons/fa6-solid/circle-xmark";

const WritingTileSheet = () => {
  const { thing, setThing } = useWritingTileSheet();

  const handleCloseIconClicked = () => {
    setThing(undefined);
  };

  return (
    <Sheet
      isOpen={thing !== undefined}
      onClose={() => setThing(undefined)}
      detent="full-height"
    >
      <Sheet.Backdrop>
        <Sheet.Container>
          <Sheet.Header className="m-4">
            <CircleMark
              onClick={handleCloseIconClicked}
              className="h-10 w-10 text-black transition-transform duration-300 ease-in-out hover:scale-95 hover:cursor-pointer"
            />
          </Sheet.Header>

          <Sheet.Content>
            <WritingTileSheetContent thing={thing} />
          </Sheet.Content>
        </Sheet.Container>
      </Sheet.Backdrop>
    </Sheet>
  );
};

export default WritingTileSheet;
