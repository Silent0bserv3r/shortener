import { Terms } from "@/constants/Terms";
import { randomBytes } from "crypto";
import React from "react";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"], preload: true });

function Page() {
    return (
        <article className={`w-full max-w-3xl mx-auto my-9 text-slate-700 ${nunito.className}`}>
            <h1 className="text-4xl font-black mb-5">Terms and Conditions</h1>
            <p>
                These terms and conditions ("Terms") govern your use of the URL shortener services
                ("Services") provided by <strong>Shortener</strong> ("Company," "we," "us," or
                "our"). By accessing and using our Services, you agree to comply with these Terms.
                If you do not agree with these Terms, please refrain from using our Services.
            </p>
            <ul>
                {Terms.map((term) => (
                    <li
                        className="my-5"
                        key={`term-${randomBytes(5)}`}
                    >
                        <h2 className="text-2xl font-bold">{term.title}</h2>
                        <p className="my-2">{term.description}</p>
                    </li>
                ))}
            </ul>
            <p>
                By using our Services, you acknowledge that you have read, understood, and agree to
                abide by these Terms. If you have any questions or concerns about these Terms,
                please contact us at{" "}
                <strong className="text-blue-700">projects.garrycodes@gmail.com</strong>.
            </p>
        </article>
    );
}

export default Page;
