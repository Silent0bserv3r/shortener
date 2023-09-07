import React from "react";
import contact from "@/assets/contact.svg";
import { Nunito } from "next/font/google";
import Image from "next/image";

const nunito = Nunito({ subsets: ["latin"], preload: true });

function ContactMe() {
    return (
        <section
            className={`my-12 flex w-full max-w-6xl mx-auto bg-white py-5 px-16 shadow rounded ${nunito.className}`}
        >
            <Image
                src={contact}
                alt="contact-form"
                height={200}
                width={200}
                className="mx-12"
            />
            <span className="w-2 rounded-full bg-slate-200" />
            <form className="text-slate-700 flex flex-col gap-5 w-full max-w-2xl mx-12">
                <h1 className="text-3xl font-bold">Contact Me</h1>
                <div>
                    <input
                        type="email"
                        name="useremail"
                        id="emailid"
                        placeholder=" "
                        className="focus:outline-none border rounded-full border-slate-200 block text-lg py-2 px-6 w-full max-w-md peer"
                    />
                    <label
                        htmlFor="emailid"
                        className="absolute mx-5 my-2 -translate-y-16 text-sm bg-white peer-focus:scale-100 peer-placeholder-shown:scale-100"
                    >
                        Email Address
                    </label>
                </div>
            </form>
        </section>
    );
}

export default ContactMe;
