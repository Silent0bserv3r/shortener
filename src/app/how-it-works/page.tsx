import React from "react";
import { Nunito } from "next/font/google";
import { Working } from "@/constants/Working";
import { randomBytes } from "crypto";

const nunito = Nunito({ subsets: ["latin"], preload: true });

function Page() {
    return (
        <article className={`w-full max-w-3xl mx-auto my-9 text-slate-700 ${nunito.className}`}>
            {Working.map((works) => (
                <p
                    key={`works-${randomBytes(5)}`}
                    className="my-4"
                >
                    {works}
                </p>
            ))}
        </article>
    );
}

export default Page;
