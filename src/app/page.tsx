import About from "@/components/About";
import Loading from "@/components/Loading";
import Shortener from "@/components/Shortener";
import Link from "next/link";

export default function Page() {
    return (
        <main className="h-full w-full flex flex-col justify-center items-center">
            <Shortener />
            <About />
        </main>
    );
}
