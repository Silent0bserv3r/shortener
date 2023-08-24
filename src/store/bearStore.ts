import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
    auth: boolean;
    setAuth: (to: boolean) => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            auth: false,
            setAuth: (to) => set({ auth: to }),
        }),
        {
            name: "authStorage",
        }
    )
);
