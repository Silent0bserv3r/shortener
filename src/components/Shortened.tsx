"use client";

import React, { useState, useRef, useEffect } from "react";
import QRCodeIcon from "./icons/QRCodeIcon";
import ClipboardIcon from "./icons/ClipboardIcon";
import { handleCopyButton } from "@/utils/Helper";
import TickIcon from "./icons/TickIcon";
import ArrowUpIcon from "./icons/ArrowUpIcon";
import Link from "next/link";
import Loading from "./Loading";
import QRCode from "react-qr-code";

function Shortened() {
    const [copied, setCopied] = useState(false);
    const [qrLoaded, setQrLoaded] = useState(false);
    const qrDialog = useRef<HTMLDialogElement>(null);
    const shortenedUrl = "https://shortener.garrycodes.co.in/i2ih1q";

    useEffect(() => {
        qrDialog.current?.addEventListener("click", (event) => {
            if (event.target === qrDialog.current) {
                qrDialog.current?.close();
            }
        });
    });

    return (
        <section className="mt-2 flex w-full max-w-3xl items-center justify-center gap-2 bg-white py-5 px-16 shadow rounded">
            <form className="flex w-full max-w-2xl">
                <input
                    type="text"
                    className="text-lg p-3 flex-1 rounded border border-slate-200"
                    name="url"
                    placeholder="Paste the URL here"
                    value={shortenedUrl}
                />
            </form>
            <Link
                href={shortenedUrl}
                target="_blank"
            >
                <ArrowUpIcon
                    className={"w-6 h-6"}
                    parentClass={
                        "rounded-lg p-2 hover:bg-blue-200 hover:text-blue-500 text-slate-400"
                    }
                />
            </Link>
            <button
                onClick={() => {
                    qrDialog.current?.showModal();
                }}
            >
                <QRCodeIcon
                    className={"w-6 h-6"}
                    parentClass={
                        "rounded-lg p-2 hover:bg-blue-200 hover:text-blue-500 text-slate-400"
                    }
                />
            </button>
            <dialog
                ref={qrDialog}
                className="backdrop:bg-slate-400 backdrop:opacity-50 open:"
            >
                <div className="p-40">
                    <h1>QR Code</h1>
                    <QRCode value={shortenedUrl} />
                    <button
                        onClick={() => {
                            qrDialog.current?.close();
                        }}
                    >
                        Close Modal
                    </button>
                </div>
            </dialog>
            <button
                onClick={() => {
                    setCopied(handleCopyButton(shortenedUrl));
                    setTimeout(() => setCopied(false), 2000);
                }}
            >
                {copied ? (
                    <div className="flex flex-col items-center">
                        <TickIcon className={"w-3 h-3 text-green-500"} />
                        <h5 className="text-xs text-slate-400 font-bold">Copied</h5>
                    </div>
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
