import { create } from "zustand";
import { persist } from "zustand/middleware";

interface HydrationState {
    _hasHydrated: boolean;
    setHasHydrated: (to: boolean) => void;
}

const useBoundStore = create<HydrationState>()(
    persist(
        (set) => ({
            _hasHydrated: false,
            setHasHydrated: (state) => {
                set({
                    _hasHydrated: state,
                });
            },
        }),
        {
            name: "hydrationStorage",
            onRehydrateStorage: () => (state) => {
                state?.setHasHydrated(true);
            },
        }
    )
);

export default useBoundStore;
