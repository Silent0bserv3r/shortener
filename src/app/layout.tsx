import NavBar from "@/components/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/store/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Shortener",
    description: "A compact URL shortener",
    icons: "/favicon.png",
};

export default function RootLayout(props: React.PropsWithChildren) {
    return (
        <html lang="en">
            <Providers>
                <body className={inter.className}>
                    <NavBar />
                    {props.children}
                </body>
            </Providers>
        </html>
    );
}
