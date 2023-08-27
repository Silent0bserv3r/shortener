import React from "react";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"], preload: true });

function About() {
    return (
        <section className="mt-8 flex flex-col w-full max-w-3xl items-center justify-center gap-5 bg-white py-5 px-16 shadow">
            <article className={nunito.className}>
                <h1 className="text-3xl text-blackish font-black mb-3">Why Shortener ?</h1>
                <p className="text-lg">
                    URL shorteners are handy tools used to condense lengthy web addresses into
                    shorter, more manageable links. They find extensive use in various scenarios
                    such as social media posts, where character limits are restrictive, and in QR
                    codes, where space is limited but direct access to a webpage is needed.
                </p>
                <br />
                <p className="text-lg">
                    You can shorten any url here. Especially, long links from social media posts
                    like&nbsp;
                    <a
                        href="https://www.instagram.com"
                        target="_blank"
                        className="text-blue-700 hover:text-blue-500"
                    >
                        Instagram
                    </a>
                    ,&nbsp;
                    <a
                        href="https://www.facebook.com"
                        target="_blank"
                        className="text-blue-700 hover:text-blue-500"
                    >
                        Facebook
                    </a>
                    ,&nbsp;
                    <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        className="text-blue-700 hover:text-blue-500"
                    >
                        LinkedIn
                    </a>
                    ,&nbsp;
                    <a
                        href="https://www.youtube.com"
                        target="_blank"
                        className="text-blue-700 hover:text-blue-500"
                    >
                        Youtube
                    </a>
                    , and many more. Make modern urls using our tool which also exports url as QR
                    code.
                </p>
            </article>
        </section>
    );
}

export default About;
