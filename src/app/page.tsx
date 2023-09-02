"use client";

import About from "@/components/About";
import Footer from "@/components/Footer";
import Shortened from "@/components/Shortened";
import Shortener from "@/components/Shortener";
import Uses from "@/components/Uses";
import { useShortenedStore } from "@/store/shortStore";
import useHydrationStore from "@/store/store";

export default function Page() {
    const shortened = useHydrationStore(useShortenedStore, (state) => state.shortened);
    return (
        <main className="h-full w-full flex flex-col justify-center items-center">
            <Shortener />
            {shortened && <Shortened />}
            <About />
            <Uses />
            <Footer />
        </main>
    );
}
