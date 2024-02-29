import Link from 'next/link';

export function CreateExchange() {
    return (
        <Link
            href="/exchanges/create"
            className="flex h-10 items-center rounded-3xl bg-gray-800 px-4 text-sm font-medium text-white transition-colors hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
        >
            <span className="hidden md:block">Start my exchange</span>
        </Link>
    );
}