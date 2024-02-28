'use client';
import { BellIcon } from '@heroicons/react/24/outline';
import { AvatarImage, AvatarFallback, Avatar } from './avatar';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { usePathname } from 'next/navigation';

export default function TopNav({ hideNav }: { hideNav?: boolean }) {
  const pathname = usePathname();
  const compName = pathname.split('dashboard')[1].split('/');

  return (
    <>
      {compName[0] !== 'profile' && (
        <div className="flex h-28 items-center justify-between bg-white px-5">
          <div>
            {pathname.includes('create') ? (
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-10 w-16 cursor-pointer"
              >
                <path
                  fillRule="evenodd"
                  d="M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <span className="text-2xl font-semibold">My {compName}</span>
            )}
          </div>
          <div className="flex items-center space-x-4">
            <BellIcon className="h-6 w-6 text-gray-600" />
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage
                  alt="Josh Doe"
                  src="/placeholder.svg?height=32&width=32"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <span className="font-medium">Josh Doe</span>
              <ChevronDownIcon className="h-4 w-4 text-gray-600" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
