"use client";

import Link from "next/link";
import React from "react";
import { NavLink, NavLinks as navLinks } from "@/constants/NavLinks";

const NavBar = () => {

    return (
        <nav className="w-full flex justify-center items-center px-8 py-5 border-b-2 border-slate-200">
            <div className="w-full flex justify-between max-w-7xl">
                <Link
                    href={"/"}
                    className="font-black text-4xl text-offBlack"
                >
                    Shortener
                </Link>
                <ul
                    id="navLinks"
                    className="flex items-center justify-center font-bold text-lg text-slate-700 "
                >
                    {navLinks.map((link: NavLink) => (
                        <li
                            key={`navLink-${link.key}`}
                            className="hover:text-slate-600 ms-7"
                        >
                            <Link href={link.href}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
