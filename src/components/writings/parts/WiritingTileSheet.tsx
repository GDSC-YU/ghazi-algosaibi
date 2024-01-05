"use client";

import Sheet from "react-modal-sheet";
import Image from "next/image";

import { useWritingTileSheet } from "@/lib/store/WritingTileSheet";
import WritingTileSheetContent from "./WritingTileSheetContent";
import xSolid from "@images/x-solid.svg";

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
            <div
              className="flex w-12 flex-col items-center rounded-full bg-secondary p-4 hover:cursor-pointer"
              onClick={handleCloseIconClicked}
            >
              <Image src={xSolid} alt="أيقونة الإغلاق" />
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
