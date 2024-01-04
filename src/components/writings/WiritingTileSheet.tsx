"use client";

import Sheet from "react-modal-sheet";
import { useWritingTileSheet } from "@/lib/store/WritingTileSheet";

const WritingTileSheet = () => {
  const { thing, setThing } = useWritingTileSheet();

  return (
    <Sheet
      isOpen={thing !== undefined}
      onClose={() => setThing(undefined)}
      detent="content-height"
    >
      <Sheet.Backdrop>
        <Sheet.Container>
          <Sheet.Header />

          <Sheet.Content>
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="rounded-2xl bg-secondary p-6">
                <img
                  className="rounded-2xl"
                  src={thing?.imageUrl}
                  alt={thing?.title}
                />
              </div>
              <h3 className="text-3xl font-bold">{thing?.title}</h3>
              <p className="text-2xl">
                {thing?.publisher} - {thing?.year}
              </p>
              <p className="text-xl">{thing?.notes}</p>
            </div>
          </Sheet.Content>
        </Sheet.Container>
      </Sheet.Backdrop>
    </Sheet>
  );
};

export default WritingTileSheet;
