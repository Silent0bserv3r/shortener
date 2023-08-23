import { createAction, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "./store";

export interface AuthState {
    authState: boolean;
}

const initialState: AuthState = {
    authState: false,
};

const hydrate = createAction(HYDRATE, (auth: AuthState) => ({ payload: auth }));

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthState(state, action) {
            state.authState = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(hydrate, (state, { payload }) => {
            state.authState = payload.authState;
        });
    },
});

export const { setAuthState } = authSlice.actions;

export const selectAuthState = (state: AppState) => state.auth.authState;

export default authSlice.reducer;
