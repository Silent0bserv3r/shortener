import Image from 'next/image'
import Link from "next/link";

export default function Home() {
    return (
        <main className="h-screen w-screen flex justify-center items-center">
            <div>This is a shortner app</div>
            <Link href={"/auth"}>Authorize</Link>
        </main>
    );
}