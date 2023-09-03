"use client";

import useBoundStore from "@/store/hydrationStore";
import NavBar from "./NavBar";
import useHydrationStore from "@/store/store";
import Loading from "./Loading";
import Footer from "./Footer";

export default function Home(props: React.PropsWithChildren) {
    const hasHydrated = useHydrationStore(useBoundStore, (state) => state._hasHydrated);
    if (!hasHydrated) {
        return (
            <main className="h-screen w-screen flex flex-col justify-center items-center">
                <Loading
                    className="h-24 w-24 text-slate-500 animate-spin"
                    textClass="text-5xl mt-7 text-slate-500"
                />
            </main>
        );
    }
    return (
        <>
            <NavBar />
            {props.children}
            <Footer />
        </>
    );
}
