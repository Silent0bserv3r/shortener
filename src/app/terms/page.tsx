import { Terms } from "@/constants/Terms";
import { randomBytes, randomUUID } from "crypto";
import React from "react";

function Page() {
    return (
        <article>
            <h1>Terms and Conditions</h1>
            <p>
                These terms and conditions ("Terms") govern your use of the URL shortener services
                ("Services") provided by <strong>Shortener</strong> ("Company," "we," "us," or
                "our"). By accessing and using our Services, you agree to comply with these Terms.
                If you do not agree with these Terms, please refrain from using our Services.
            </p>
            {Terms.map((term) => (
                <div key={`term-${randomBytes(5)}`}>
                    <h2>{term.title}</h2>
                    <p>{term.description}</p>
                </div>
            ))}
        </article>
    );
}

export default Page;
