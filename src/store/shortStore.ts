import { create } from "zustand";

interface ShortenedState {
    shortened: string;
    isInvalid: boolean;
    setShortened: (to: string) => void;
    setIsInvalid: (to: boolean) => void
}

export const useShortenedStore = create<ShortenedState>()((set) => ({
    shortened: '',
    isInvalid: false,
    setShortened: (to) => set({ shortened: to }),
    setIsInvalid: (to) => set({isInvalid: to})
}));
