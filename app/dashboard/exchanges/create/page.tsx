import PropertyTypeForm from '@/app/ui/exchanges/property-type-form'
import Link from 'next/link'

export default function Page() {
    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-start p-6">
                <button className="rounded-md border-solid border-2 p-2">Step 1/4</button>
            </div>
            <PropertyTypeForm />
            <div className="flex w-full items-center justify-start p-6">
                <Link href="/dashboard/exchanges"
                    className="flex h-10 items-center rounded-lg bg-white px-4 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                    <span className="hidden md:block">Cancel</span>
                </Link>
            </div>
        </div>
    )
}

