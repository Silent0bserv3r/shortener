import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Home from "@/components/Home";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Shortener",
    description: "A compact URL shortener",
    icons: "/favicon.png",
};

export default function RootLayout(props: React.PropsWithChildren) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Home {...props} />
            </body>
        </html>
    );
}
