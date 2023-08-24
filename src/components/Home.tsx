"use client";

import useBoundStore from "@/store/hydrationStore";
import NavBar from "./NavBar";
import useHydrationStore from "@/store/store";
import Loading from "./Loading";

export default function Home(props: React.PropsWithChildren) {
    const hasHydrated = useHydrationStore(useBoundStore, (state) => state._hasHydrated);
    if (!hasHydrated) {
        return <Loading />;
    }
    return (
        <>
            <NavBar />
            {props.children}
        </>
    );
}
