"use client"
import { Metadata } from "next";
import { useRouter} from "next/navigation";
{/*
export const metadata: Metadata = {
    title: "About",
    description: "this is about page",
}*/}
export default function Page() {
    const router = useRouter();
    return (
        <div>
            <h1 className="h-[900px]">Fashion</h1>
            <button onClick={() => router.push('/product')} className="border-4">Back</button>
            </div>
    );
}