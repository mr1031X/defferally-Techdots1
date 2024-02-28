"use client"
import PartiesForm from "@/src/app/ui/exchanges/partiesForm";
import Button from "@/src/components/Buttons/button";
import Link from "next/link";
import forwardArrow from '@/public/forwardArrow.svg'

export default function Page() {
    return (
        <div className="w-full px-5">
            <div className="flex w-full items-center justify-start">
                <button className="rounded-md border border-gray-800 font-semibold p-2">Step 3/4</button>
            </div>
            <div className="my-5">
            <span className="font-semibold text-2xl">Start my exchange</span>
            </div>
            <PartiesForm />
            <div className="flex w-full items-center justify-start p-6">
                <Link href="/dashboard/exchanges/create/2">
                    <span className="border border-black px-5 py-2 rounded-3xl hover:bg-gray-100">Back to previous step</span>
                </Link>
                <div className="pl-4">

                <Link href="/dashboard/exchanges/create/4">
                    <Button
                        type="submit"
                        text="Next Step"
                        className='mt-2'
                        iconAfter={forwardArrow}
                    />
                </Link>
                </div>
            </div>
        </div>
    )
}