import Image from "next/image";
import React from "react";
import { Nunito } from "next/font/google";
import coffee from "@/assets/coffee.svg";
import Me from "@/components/Me";

const nunito = Nunito({ subsets: ["latin"], preload: true });

function Page() {
    return (
        <main>
            <Me />
        </main>
    );
}

export default Page;
