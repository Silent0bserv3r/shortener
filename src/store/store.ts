import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";

export const makeStore = configureStore({
    reducer: {
        [authSlice.name]: authSlice.reducer,
    },
    devTools: true,
});

export type AppStore = typeof makeStore;
export type AppState = ReturnType<typeof makeStore.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;
