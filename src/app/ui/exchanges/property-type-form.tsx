import { Button } from '@/src/app/ui/button'
import { DocumentTextIcon, HomeIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
export default function PropertyTypeForm() {
    return (
        <form>
            <div className="rounded-md p-4 md:p-6">
                <div className="bg-gray-100">
                    <div className='p-4'>
                        <div className="text-xl font-bold">Choose a property type</div>
                    </div>
                    <div className="bg-gray-100 p-4">
                        <div className="flex justify-start space-x-4 mb-8">
                            <Link
                                href="/exchanges/create/2">
                                <div className="flex flex-col items-center p-4 border rounded-lg shadow-sm w-48 cursor-pointer bg-white">
                                    <DocumentTextIcon className="h-12 w-12 mb-2" />
                                    <p className="font-medium">Relinquished property</p>
                                </div>
                            </Link>
                            <Link
                                href="/exchanges/create/2">
                                <div className="flex flex-col items-center p-4 border rounded-lg shadow-sm w-48 cursor-pointer bg-white">
                                    <HomeIcon className="h-12 w-12 mb-2" />
                                    <p className="font-medium">Replacement property</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </form>

    )
}