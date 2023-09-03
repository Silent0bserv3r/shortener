import React from "react";
import LikeIcon from "./icons/LikeIcon";
import LinkIcon from "./icons/LinkIcon";
import ShareIcon from "./icons/ShareIcon";
import SecureIcon from "./icons/SecureIcon";
import StatisticIcon from "./icons/StatisticIcon";
import DevicesIcon from "./icons/DevicesIcon";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"], preload: true });

function Uses() {
    return (
        <section className="my-16 flex w-full max-w-5xl items-center justify-center gap-2 py-5 px-16">
            <article className={`grid grid-cols-3 gap-9 ${nunito.className} text-slate-600`}>
                <figure className="flex flex-col items-center text-center">
                    <LikeIcon className="w-12 h-12" />
                    <h1 className="font-black text-lg text-slate-700 mt-2">Easy to Use</h1>
                    <figcaption>Shortener is easy, fast and compact for daily usage</figcaption>
                </figure>
                <figure className="flex flex-col items-center text-center">
                    <LinkIcon className="w-12 h-12" />
                    <h1 className="font-black text-lg text-slate-700 mt-2">Short</h1>
                    <figcaption>Shorten Links of any size with our best tool</figcaption>
                </figure>
                <figure className="flex flex-col items-center text-center">
                    <ShareIcon className="w-12 h-12" />
                    <h1 className="font-black text-lg text-slate-700 mt-2">Share</h1>
                    <figcaption>
                        Share shortened links with a tap to as many people as you like
                    </figcaption>
                </figure>
                <figure className="flex flex-col items-center text-center">
                    <SecureIcon className="w-12 h-12" />
                    <h1 className="font-black text-lg text-slate-700 mt-2">Secure</h1>
                    <figcaption>Hide sensitive info by shortening important links</figcaption>
                </figure>
                <figure className="flex flex-col items-center text-center">
                    <DevicesIcon className="w-12 h-12" />
                    <h1 className="font-black text-lg text-slate-700 mt-2">Compatibility</h1>
                    <figcaption>Our links are compatible with all devices</figcaption>
                </figure>
                <figure className="flex flex-col items-center text-center">
                    <StatisticIcon className="w-12 h-12" />
                    <h1 className="font-black text-lg text-slate-700 mt-2">Statistic</h1>
                    <figcaption>Get statistic on your shortened links for data analysis</figcaption>
                </figure>
            </article>
        </section>
    );
}

export default Uses;
