import Image from "next/image";
import React from "react";
import { Nunito } from "next/font/google";
import coffee from "@/assets/coffee.svg";

const nunito = Nunito({ subsets: ["latin"], preload: true });

function Me() {
    return (
        <section
            className={`my-12 flex w-full max-w-6xl mx-auto bg-white py-5 px-16 shadow rounded ${nunito.className}`}
        >
            <Image
                src="/me.jpg"
                alt="Profile Photo"
                width={200}
                height={200}
                className="rounded-full mx-12"
                priority
            />
            <span className="bg-slate-200 w-2 rounded-lg" />
            <div className="mx-12 w-full">
                <h1 className="text-4xl font-bold text-slate-700">About Me</h1>
                <p className="text-slate-700 max-w-xl mt-4">
                    Hi, I am <strong>Gaurav Chaubey</strong>. I am a just graduated Software
                    Engineer who likes to create in my spare time. I have a love for frontend
                    projects and this is a small show of what I know. If you want to collaborate
                    please share your details and we can discuss over coffee.
                </p>
                <div className="mt-3 gap-3 flex">
                    <Image
                        src={coffee}
                        alt="coffee"
                        height={20}
                        width={20}
                    />
                    <h1 className="first-letter:text-red-500 font-semibold border border-slate-200 rounded-full text-slate-800 px-3 bg-slate-100">
                        #React
                    </h1>
                    <h1 className="first-letter:text-blue-500 font-semibold border border-slate-200 rounded-full text-slate-800 px-3 bg-slate-100">
                        #Vercel
                    </h1>
                    <h1 className="first-letter:text-green-500 font-semibold border border-slate-200 rounded-full text-slate-800 px-3 bg-slate-100">
                        #JavaScript
                    </h1>
                </div>
            </div>
        </section>
    );
}

export default Me;
