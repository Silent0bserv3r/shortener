import { Policies } from "@/constants/Policies";
import { randomBytes } from "crypto";
import React from "react";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"], preload: true });

function Page() {
    return (
        <article className={`w-full max-w-3xl mx-auto my-9 text-slate-700 ${nunito.className}`}>
            <h1 className="text-4xl font-black mb-5">Privacy Policy</h1>
            <p>
                This Privacy Policy ("Policy") outlines the manner in which&nbsp;
                <strong>Shortener</strong> ("Company," "we," "us," or "our") collects, uses,
                maintains, and discloses information gathered from users of our URL shortening
                services ("Services"). Your privacy is important to us, and we are committed to
                protecting your personal information. By using our Services, you consent to the
                practices described in this Policy.
            </p>
            <ul>
                <li className="my-5">
                    <h1 className="text-2xl font-bold">Information We Gather</h1>
                    <ul className="list-[lower-alpha] ml-5">
                        <li>
                            <strong>User-Provided Information:</strong> We may collect personal
                            information you provide when using our Services, including but not
                            limited to your name, email address, and other contact details.
                        </li>
                        <li>
                            <strong>Automatically Collected Information:</strong> We may
                            automatically collect certain information when you access or use our
                            Services. This may include IP addresses, browser types, device
                            information, and usage data.
                        </li>
                    </ul>
                </li>
                <li className="my-5">
                    <h1 className="text-2xl font-bold">How We Use Your Information</h1>
                    <p className="my-2">
                        We use the information we collect for the following purposes:
                    </p>
                    <ul className="list-disc ml-5">
                        <li>To provide and maintain our Services.</li>
                        <li>To improve our Services and user experience.</li>
                        <li>To analyze usage trends and track link performance.</li>
                        <li>To respond to your inquiries, comments, or requests.</li>
                        <li>
                            To send you important updates and information related to our Services.
                        </li>
                        <li>To comply with legal obligations.</li>
                    </ul>
                </li>
                {Policies.map((policy) => (
                    <li
                        className="my-5"
                        key={`policy-${randomBytes(5)}`}
                    >
                        <h1 className="text-2xl font-bold">{policy.title}</h1>
                        <p>{policy.description}</p>
                    </li>
                ))}
                <p>
                    By using our Services, you signify your acceptance of this Privacy Policy. If
                    you do not agree to this Policy, please refrain from using our Services. Your
                    continued use of our Services after changes to this Policy will be deemed as
                    your acceptance of those changes.
                </p>
            </ul>
        </article>
    );
}

export default Page;
