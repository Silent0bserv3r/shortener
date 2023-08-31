"use client";
import React, { useRef } from "react";

function Shortener() {
    return (
        <section className="mt-12 flex flex-col w-full max-w-3xl items-center justify-center gap-5 bg-white py-5 px-16 shadow">
            <h1 className="text-4xl text-blue-400 font-extrabold">Paste the URL to be shortened</h1>
            <form
                onSubmit={(e) => e.preventDefault()}
                className="flex w-full max-w-2xl"
            >
                <input
                    type="text"
                    className="text-lg p-3 flex-1 border-l border-t border-b border-slate-200 rounded-tl rounded-bl focus: rounded-tr-none focus:rounded-br-none"
                    name="url"
                    placeholder="Paste the URL here"
                />
                <input
                    type="submit"
                    hidden
                />
                <button
                    type="submit"
                    className="p-3 bg-blue-900 text-slate-50 font-bold text-lg rounded-tr rounded-br"
                >
                    Shorten URL
                </button>
            </form>
        </section>
    );
}

export default Shortener;
