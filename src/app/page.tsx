import Loading from "@/components/Loading";
import Link from "next/link";

export default function Page() {
    return (
        <main className="h-full w-full flex justify-center items-center gap-16">
            <div>This is a shortner app</div>
            <Link href={"/auth"}>Authorize</Link>
        </main>
    );
}
