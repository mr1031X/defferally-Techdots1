'use client';
import { BellIcon } from '@heroicons/react/24/outline';
import { AvatarImage, AvatarFallback, Avatar } from './avatar';
import { ChevronDownIcon, ArrowLongLeftIcon } from '@heroicons/react/20/solid';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { logout } from '@/src/hooks/useAuth';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export default function TopNav({ hideNav }: { hideNav?: boolean }) {
  const [isLogout, setIsLogout] = useState<boolean>(false);
  const pathname = usePathname();
  const compName = pathname.split('/')[1];
  const router = useRouter();

  const handleLogOut = () => {
    Cookies.remove('access_token', { path: '/' });
    logout();
    window.location.reload();
  };
  const handleBackClick = () => {
    router.back();
  };
  return (
    <>
      {compName !== 'profile' && (
        <div className="flex h-20 items-center justify-between bg-white px-5">
          <div>
            {pathname.includes('create') || pathname.includes('edit') ? (
           <ArrowLongLeftIcon className='h-10 w-16 cursor-pointer' onClick={handleBackClick}/>
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
              <div>
                <ChevronDownIcon
                  className="h-4 w-4 cursor-pointer text-gray-600"
                  onClick={() => setIsLogout(!isLogout)}
                />
                {isLogout && (
                  <div className="absolute ml-[-4rem] rounded-md border border-gray-100 bg-white px-4 py-2 shadow-lg">
                    <span className="cursor-pointer" onClick={handleLogOut}>
                      Logout
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
