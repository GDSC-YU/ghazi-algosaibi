import { create } from "zustand";

interface WritingTileSheetStore {
  thing?: Thing;
  setThing: (thing?: Thing) => void;
}

export const useWritingTileSheet = create<WritingTileSheetStore>()((set) => ({
  thing: undefined,
  setThing: (thing?: Thing) => {
    set({ thing });
  },
}));
