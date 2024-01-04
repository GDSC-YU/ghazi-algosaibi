"use client";

import Sheet from "react-modal-sheet";
import { useWritingTileSheet } from "@/lib/store/WritingTileSheet";
import WritingTileSheetContent from "./WritingTileSheetContent";

const WritingTileSheet = () => {
  const { thing, setThing } = useWritingTileSheet();

  const handleBackdropTapped = () => {
    setThing(undefined);
  };

  return (
    <Sheet
      isOpen={thing !== undefined}
      onClose={() => setThing(undefined)}
      detent="content-height"
    >
      <Sheet.Backdrop onTap={handleBackdropTapped}>
        <Sheet.Container>
          <Sheet.Header />

          <Sheet.Content>
            <WritingTileSheetContent thing={thing} />
          </Sheet.Content>
        </Sheet.Container>
      </Sheet.Backdrop>
    </Sheet>
  );
};

export default WritingTileSheet;
