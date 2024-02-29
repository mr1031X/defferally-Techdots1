import Link from 'next/link';
import NavLinks from '@/src/app/ui/dashboard/nav-links';
import DeferAllyLogo from '@/src/app/ui/deferallyLogo';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col bg-gray-800 px-3 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md p-4 md:h-40"
        href="/exchanges"
      >
        <div className="w-32 text-white md:w-40">
          <DeferAllyLogo />
        </div>
      </Link>
      <div className="flex flex-col space-y-4 text-white">
        <NavLinks />
      </div>
    </div>
  );
}
