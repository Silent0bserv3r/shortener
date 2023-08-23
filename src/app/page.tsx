"use client";

import Link from "next/link";
import { wrapper } from "@/store/store";
import { setAuthState } from "@/store/authSlice";

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ params }) => {
    store.dispatch(setAuthState(false));
    console.log("State on server", store.getState());
    return {
        props: {
            authState: false,
        },
    };
});

export default function Home() {
    return (
        <main className="h-full w-full flex justify-center items-center gap-16">
            <div>This is a shortner app</div>
            <Link href={"/auth"}>Authorize</Link>
        </main>
    );
}
