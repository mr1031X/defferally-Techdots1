'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  ChatBubbleLeftEllipsisIcon,
  UserCircleIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  //{ name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'My Exchanges',
    href: '/dashboard/exchanges',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Chat', href: '/dashboard/chat', icon: ChatBubbleLeftEllipsisIcon },
  { name: 'Profile', href: '/dashboard/profile', icon: UserCircleIcon },
  // {
  //   name: 'Invoices',
  //   href: '/dashboard/invoices',
  //   icon: DocumentDuplicateIcon,
  // },
  // { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-gray-700 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-gray-700 text-white': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
