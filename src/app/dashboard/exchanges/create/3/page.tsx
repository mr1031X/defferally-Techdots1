"use client"
import PartiesForm from "@/src/app/ui/exchanges/partiesForm";
import Link from "next/link";

export default function Page() {
    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-start p-6">
                <button className="rounded-md border-solid border-2 p-2">Step 3/4</button>
            </div>
            <PartiesForm />
            <div className="flex w-full items-center justify-start p-6">
                <Link href="/dashboard/exchanges/create/2"
                    className="flex h-10 items-center rounded-lg bg-white px-4 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                    <span className="hidden md:block">Back to previous step</span>
                </Link>
                <div className="pl-4">

                    <Link href="/dashboard/exchanges/create/4"
                        className="flex h-10 items-center rounded-lg bg-gray-800 px-4 text-sm font-medium text-white transition-colors hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                        <span className="hidden md:block">Next step</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}