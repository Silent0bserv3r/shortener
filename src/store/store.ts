import {
    configureStore,
    ThunkAction,
    Action,
    combineReducers,
    getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";
import { createWrapper } from "next-redux-wrapper";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

// export const makeStore = configureStore({
//     reducer: {
//         [authSlice.name]: authSlice.reducer,
//     },
//     devTools: true,
// });

const rootReducer = combineReducers({
    [authSlice.name]: authSlice.reducer,
});

const makeConfiguredStore = () =>
    configureStore({
        reducer: rootReducer,
        devTools: true,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }),
    });

export const makeClientStore = () => {
    const isServer = typeof window === "undefined";

    if (isServer) {
        return makeConfiguredStore();
    }

    const persistConfig = {
        key: "nextjs",
        whitelist: ["auth"],
        storage,
    };
    const persistedReducer = persistReducer(persistConfig, rootReducer);

    let store = configureStore({
        reducer: persistedReducer,
        devTools: process.env.NODE_ENV !== "production",
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }),
    });

    return store;
};

export const makeStore = makeClientStore();

export const persistor = persistStore(makeStore);

export type AppStore = typeof makeStore;
export type AppState = ReturnType<typeof makeStore.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(() => makeStore);
