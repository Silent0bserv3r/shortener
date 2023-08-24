"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import useBoundStore from "@/store/hydrationStore";
import Loading from "@/components/Loading";
import Home from "@/components/Home";
import useHydrationStore from "@/store/store";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Shortener",
    description: "A compact URL shortener",
    icons: "/favicon.png",
};

export default function RootLayout(props: React.PropsWithChildren) {
    const hasHydrated = useHydrationStore(useBoundStore, (state) => state._hasHydrated);
    return (
        <html lang="en">
            <body className={inter.className}>
                {hasHydrated ? <Home {...props} /> : <Loading />}
            </body>
        </html>
    );
}
