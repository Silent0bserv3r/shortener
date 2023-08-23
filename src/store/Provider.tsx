"use client";

import { Provider } from "react-redux";
import { makeStore, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

export const Providers = (props: React.PropsWithChildren) => {
    return (
        <Provider store={makeStore}>
            <PersistGate
                persistor={persistor}
                loading={<div>Loading...</div>}
            >
                {props.children}
            </PersistGate>
        </Provider>
    );
};
