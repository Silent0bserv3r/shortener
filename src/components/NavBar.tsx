"use client";

import { NavLink, NavLinks as navlinks } from "@/constants/NavLinks";
import { selectAuthState, setAuthState } from "@/store/authSlice";
import Link from "next/link";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import UserAccountIcon from "./UserAccountIcon";

function NavBar() {
    const authState = useSelector(selectAuthState);
    const dispatch = useDispatch();
    return (
        <nav className="w-full flex justify-center items-center px-8 py-5 border-b-2 border-slate-200">
            <div className="w-full flex justify-between max-w-7xl">
                <div id="logo">
                    <h1 className="font-black text-4xl">Shortener</h1>
                </div>
                <ul
                    id="navLinks"
                    className="flex items-center justify-center font-bold text-lg text-slate-700 "
                >
                    {navlinks.map((link: NavLink) => (
                        <li
                            key={`navLink-${link.key}`}
                            className="hover:text-slate-600 ms-7"
                        >
                            <Link href={link.href}>{link.name}</Link>
                        </li>
                    ))}
                    <button
                        onClick={() =>
                            authState ? dispatch(setAuthState(false)) : dispatch(setAuthState(true))
                        }
                        className={
                            authState
                                ? "ms-5 flex justify-center hover:opacity-75"
                                : "ms-5 flex justify-center border-2 border-slate-500 rounded-full py-2 px-4 hover:opacity-75 text-slate-700"
                        }
                    >
                        {authState ? (
                            <UserAccountIcon className="w-9 h-9 text-slate-700" />
                        ) : (
                            <h1 className="text-center">Sign In</h1>
                        )}
                    </button>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;