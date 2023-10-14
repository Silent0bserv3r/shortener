import { create } from "zustand";

interface ShortenedState {
    shortened: string;
    setShortened: (to: string) => void;
}

export const useShortenedStore = create<ShortenedState>()((set) => ({
    shortened: '',
    setShortened: (to) => set({ shortened: to }),
}));
