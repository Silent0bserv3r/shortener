import Link from "next/link";
import React from "react";

function Footer() {
    return (
        <footer>
            <div>© 2023 - Shortener</div>
            <nav>
                <ul>
                    <li>
                        <Link href={"/"}>Terms And Conditions</Link>
                    </li>
                    <li>
                        <Link href={"/"}>Privacy</Link>
                    </li>
                    <li>
                        <Link href={"/"}>Unshorten</Link>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;
