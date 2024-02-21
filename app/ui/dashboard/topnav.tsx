import { BellIcon } from "@heroicons/react/24/outline"
import { AvatarImage, AvatarFallback, Avatar } from "./avatar"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
// import { PowerIcon } from '@heroicons/react/24/outline';
// import { signOut } from '@/auth';

export default function TopNav() {
  return (
    <div className="flex-auto flex flex-col justify-end">
      <header className="flex items-center justify-end p-4 bg-white border-b">
        <div className="flex items-center space-x-4">
          <BellIcon className="h-6 w-6 text-gray-600" />
          <div className="flex items-center space-x-2">
            <Avatar>
              <AvatarImage alt="Josh Doe" src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <span className="font-medium">Josh Doe</span>
            <ChevronDownIcon className="h-4 w-4 text-gray-600" />
          </div>
          {/* <form action={async () => {
            'use server';
            await signOut();
          }}
          >
            <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
              <PowerIcon className="w-6" />
              <div className="hidden md:block">Sign Out</div>
            </button>
          </form> */}
        </div>
      </header>
    </div>
  )
}