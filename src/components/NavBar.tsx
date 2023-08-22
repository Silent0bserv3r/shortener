"use client";

import { NavLink, NavLinks as navlinks } from "@/constants/NavLinks";
import { selectAuthState, setAuthState } from "@/store/authSlice";
import Link from "next/link";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

function NavBar() {
    const authState = useSelector(selectAuthState);
    const dispatch = useDispatch();
    return (
        <nav className="w-full flex justify-center items-center p-8">
            <div className="w-full flex justify-between max-w-7xl">
                <div id="logo">
                    <h1 className="font-black text-4xl">Shortener</h1>
                </div>
                <ul
                    id="navLinks"
                    className="flex gap-7 items-center justify-center font-bold text-lg text-slate-600 "
                >
                    {navlinks.map((link: NavLink) => (
                        <li
                            key={`navLink-${link.key}`}
                            className="hover:text-slate-900"
                        >
                            <Link href={link.href}>{link.name}</Link>
                        </li>
                    ))}
                    <button
                        onClick={() =>
                            authState ? dispatch(setAuthState(false)) : dispatch(setAuthState(true))
                        }
                    >
                        {authState ? "Sign Out" : "Sign In"}
                    </button>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
