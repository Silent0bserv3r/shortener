"use client";

import NavBar from "./NavBar";
import Footer from "./Footer";
import React from "react";

export default function Home(props: React.PropsWithChildren) {
    return (
        <>
            <NavBar />
            {props.children}
            <Footer />
        </>
    );
}
