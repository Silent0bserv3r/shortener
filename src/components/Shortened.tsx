"use client";

import React, { useState } from "react";
import ChartBarIcon from "./icons/ChartBarIcon";
import QRCodeIcon from "./icons/QRCodeIcon";
import ClipboardIcon from "./icons/ClipboardIcon";
import { handleCopyButton } from "@/utils/Helper";
import TickIcon from "./icons/TickIcon";

function Shortened() {
    const [copied, setCopied] = useState(false);
    return (
        <section className="mt-2 flex w-full max-w-3xl items-center justify-center gap-2 bg-white py-5 px-16 shadow rounded">
            <form className="flex w-full max-w-2xl">
                <input
                    type="text"
                    className="text-lg p-3 flex-1 rounded border border-slate-200"
                    name="url"
                    placeholder="Paste the URL here"
                    value={"Shortened Url"}
                />
            </form>
            <button>
                <ChartBarIcon
                    className={"w-6 h-6"}
                    parentClass={
                        "rounded-lg p-2 hover:bg-blue-200 hover:text-blue-500 text-slate-400"
                    }
                />
            </button>
            <button>
                <QRCodeIcon
                    className={"w-6 h-6"}
                    parentClass={
                        "rounded-lg p-2 hover:bg-blue-200 hover:text-blue-500 text-slate-400"
                    }
                />
            </button>
            <button onClick={() => setCopied(handleCopyButton("https://www.youtube.com"))}>
                {copied ? (
                    <TickIcon className={"w-6 h-6 text-green-500"} />
                ) : (
                    <ClipboardIcon
                        className={"w-6 h-6"}
                        parentClass={
                            "rounded-lg p-2 hover:bg-blue-200 hover:text-blue-500 text-slate-400"
                        }
                    />
                )}
            </button>
        </section>
    );
}

export default Shortened;
