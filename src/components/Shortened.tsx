import React from "react";
import ChartBarIcon from "./icons/ChartBarIcon";
import QRCodeIcon from "./icons/QRCodeIcon";
import ClipboardIcon from "./icons/ClipboardIcon";

function Shortened() {
    return (
        <section className="mt-2 flex w-full max-w-3xl items-center justify-center gap-2 bg-white py-5 px-16 shadow">
            <form className="flex w-full max-w-2xl">
                <input
                    type="text"
                    className="text-lg p-3 flex-1 rounded border border-slate-200"
                    name="url"
                    placeholder="Paste the URL here"
                    value={"Shortened Url"}
                />
            </form>
            <ChartBarIcon
                className={"w-6 h-6"}
                parentClass={"rounded-lg p-2 hover:bg-blue-200 hover:text-blue-500 text-slate-400"}
            />
            <QRCodeIcon
                className={"w-6 h-6"}
                parentClass={"rounded-lg p-2 hover:bg-blue-200 hover:text-blue-500 text-slate-400"}
            />
            <ClipboardIcon
                className={"w-6 h-6"}
                parentClass={"rounded-lg p-2 hover:bg-blue-200 hover:text-blue-500 text-slate-400"}
            />
        </section>
    );
}

export default Shortened;
