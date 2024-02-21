import Link from "next/link";

export default function Page() {
    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-start p-6">
                <button className="rounded-md border-solid border-2 p-2">Step 4/4</button>
            </div>
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold mb-6">Steps</h2>
                <div className="space-y-4">
                    <div>
                        <h3 className="text-lg font-medium">Step 1</h3>
                        <p className="text-sm text-gray-600">Approximate duration: Aug 6, 2023 — Sep 12, 2023</p>
                        <p>Contract and exchange documents</p>
                        <hr className="border-t border-gray-300 my-4" />
                    </div>
                    <div>
                        <h3 className="text-lg font-medium">Step 2</h3>
                        <p className="text-sm text-gray-600">Approximate duration: Aug 6, 2023 — Sep 12, 2023</p>
                        <p>Settlement of relinquished property</p>
                        <hr className="border-t border-gray-300 my-4" />
                    </div>
                    <div>
                        <h3 className="text-lg font-medium">Step 3</h3>
                        <p className="text-sm text-gray-600">Approximate duration: Aug 6, 2023 — Sep 12, 2023</p>
                        <p>45-Day ID period</p>
                        <hr className="border-t border-gray-300 my-4" />
                    </div>
                    <div>
                        <h3 className="text-lg font-medium">Step 4</h3>
                        <p className="text-sm text-gray-600">Approximate duration: Aug 6, 2023 — Sep 12, 2023</p>
                        <p>Contract on replacement property</p>
                        <hr className="border-t border-gray-300 my-4" />
                    </div>
                    <div>
                        <h3 className="text-lg font-medium">Step 5</h3>
                        <p className="text-sm text-gray-600">Approximate duration: Aug 6, 2023 — Sep 12, 2023</p>
                        <p>Settlement on replacement property</p>
                        <hr className="border-t border-gray-300 my-4" />
                    </div>
                    <div>
                        <h3 className="text-lg font-medium">Step 6</h3>
                        <p className="text-sm text-gray-600">Approximate duration: Aug 6, 2023 — Sep 12, 2023</p>
                        <p>Reporting the exchange to the IRS</p>
                    </div>
                </div>
            </div>
            <div className="flex w-full items-center justify-start p-6">
                <Link href="/dashboard/exchanges/create/3"
                    className="flex h-10 items-center rounded-lg bg-white px-4 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                    <span className="hidden md:block">Back to previous step</span>
                </Link>
                <div className="pl-4">

                    <Link href="/dashboard/exchanges/create/4"
                        className="flex h-10 items-center rounded-lg bg-gray-800 px-4 text-sm font-medium text-white transition-colors hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                        <span className="hidden md:block">Start the exchange</span>
                    </Link>
                </div>
            </div>
        </div>



    )
}