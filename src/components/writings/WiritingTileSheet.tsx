"use client";

import Sheet from "react-modal-sheet";

import WritingTileSheetContent from "./parts/WritingTileSheetContent";

import { useWritingTileSheet } from "@lib/store/WritingTileSheet";

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
            <div className="flex w-fit justify-start rounded-full bg-secondary p-3">
              <CircleMark
                className="h-10 w-10 transition-transform duration-200 hover:scale-110 hover:cursor-pointer"
                onClick={handleCloseIconClicked}
              />
            </div>
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
