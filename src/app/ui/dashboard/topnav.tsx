'use client'
import { BellIcon } from '@heroicons/react/24/outline';
import { AvatarImage, AvatarFallback, Avatar } from './avatar';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { usePathname } from 'next/navigation';

export default function TopNav({
  hideNav,
}: {
  hideNav?: boolean;
}) {
  const pathname = usePathname();
  const compName = pathname.split('dashboard')[1].split('/')[1];
  const companyName = 'Your Company'; // Replace with your company name

  // Capitalize the first letter of the company name
  const capitalizedCompanyName = companyName.charAt(0).toUpperCase() + companyName.slice(1);

  return (
    <>
    {
      compName !== 'profile' && 
      <div className="flex h-28 items-center justify-between bg-white px-5">
        <div>
            <span className="text-2xl font-semibold">{capitalizedCompanyName}</span>
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
    }
    </>
  );
}
