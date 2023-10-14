"use client";

import About from "@/components/About";
import Shortened from "@/components/Shortened";
import Shortener from "@/components/Shortener";
import Uses from "@/components/Uses";
import { useShortenedStore } from "@/store/shortStore";
import useHydrationStore from "@/store/store";
import InvalidURL from "@/components/InvalidURL";

export default function Page() {
    const shortened = useHydrationStore(useShortenedStore, (state) => state.shortened);
    const isInvalid = useHydrationStore(useShortenedStore, (state) => state.isInvalid);
    return (
        <main className="h-full w-full flex flex-col justify-center items-center">
            <Shortener />
            {shortened && <Shortened />}
            {isInvalid && <InvalidURL />}
            <About />
            <Uses />
        </main>
    );
}
