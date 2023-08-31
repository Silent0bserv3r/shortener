import { create } from "zustand";

interface ShortenedState {
    shortened: boolean;
    setShortened: (to: boolean) => void;
}

export const useShortenedStore = create<ShortenedState>()((set) => ({
    shortened: false,
    setShortened: (to) => set({ shortened: to }),
}));
