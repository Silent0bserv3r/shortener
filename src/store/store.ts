import { create } from "zustand";

interface AuthState {
    auth: boolean;
    setAuth: (to: boolean) => void;
}

export const useStore = create<AuthState>()((set) => ({
    auth: false,
    setAuth: (to) => set((state) => ({ auth: to })),
}));
