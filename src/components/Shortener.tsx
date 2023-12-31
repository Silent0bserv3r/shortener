"use client";
import { useShortenedStore } from "@/store/shortStore";
import React, { useRef, useState } from "react";
import CircleIcon from "./icons/CircleIcon";
import { shortenUrl } from "@/utils/Shortener";

function Shortener() {
    const setShortened = useShortenedStore((state) => state.setShortened);
    const setIsInvalid = useShortenedStore((state) => state.setIsInvalid);
    const [loading, setLoading] = useState(false);
    const formUrl = useRef<HTMLInputElement>(null);
    return (
        <section className="mt-12 flex flex-col w-full max-w-3xl items-center justify-center bg-white py-5 px-16 shadow rounded">
            <h1 className="text-4xl text-blue-400 font-extrabold">Paste the URL to be shortened</h1>
            <form
                onSubmit={(e) => e.preventDefault()}
                className="flex w-full max-w-2xl mt-9"
            >
                <input
                    type="text"
                    className="text-lg p-3 flex-1 border-l border-t border-b border-slate-200 rounded-tl rounded-bl focus: rounded-tr-none focus:rounded-br-none"
                    name="url"
                    placeholder="Paste the URL here"
                    ref={formUrl}
                />
                <input
                    type="submit"
                    hidden
                />
                <button
                    type="submit"
                    className="p-3 bg-blue-900 text-slate-50 font-bold text-lg rounded-tr rounded-br w-36 flex justify-center items-center"
                    onClick={async () => {
                        setLoading(true);
                        const token = await shortenUrl(formUrl.current?.value ?? '');
                        console.log(token);
                        if (token != '') {
                            console.log(token);
                            setShortened(token);
                            setIsInvalid(false);
                        } else {
                            setIsInvalid(true);
                        }
                        setLoading(false);
                    }}
                >
                    {loading ? (
                        <CircleIcon className="h-5 w-5 text-slate-200 animate-spin" />
                    ) : (
                        "Shorten URL"
                    )}
                </button>
            </form>
        </section>
    );
}

export default Shortener;
