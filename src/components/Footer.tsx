import Link from "next/link";
import React from "react";

function Footer() {
    return (
        <footer className="flex w-full border-t-2 justify-center items-center p-12">
            <div className="px-6 border-r-2 border-slate-800 font-bold">© 2023 - Shortener</div>
            <nav>
                <ul className="flex text-blue-500">
                    <li className="px-6 border-r-2 border-slate-800 hover:text-blue-800">
                        <Link href={"/"}>Terms And Conditions</Link>
                    </li>
                    <li className="px-6 border-r-2 border-slate-800 hover:text-blue-800">
                        <Link href={"/"}>Privacy</Link>
                    </li>
                    <li className="px-6 hover:text-blue-800">
                        <Link href={"/"}>Unshorten</Link>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;
