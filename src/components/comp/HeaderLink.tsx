'use client'

import { usePathname } from 'next/navigation';
import Link from "next/link";

interface IHeaderLink {
  children: React.ReactNode;
  href: string;
};

const HeaderLink : React.FC<IHeaderLink> = (
  {
    children,
    href
  }
) => {
  const pathname = usePathname();
  const path = href;

  return (
    <Link
      className={`group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-neutral-100/50 data-[state=open]:bg-gray-100/50 dark:hover:bg-neutral-900 dark:hover:text-gray-50 dark:focus:bg-neutral-800 dark:focus:text-neutral-50 dark:data-[active]:bg-neutral-800/50 dark:data-[state=open]:bg-neutral-800/50 ${pathname === path ? 'bg-neutral-100 dark:bg-neutral-800 active' : 'bg-white dark:bg-neutral-950 '}`}
      href={href}
    >
      {children}
    </Link>
  )
};

export default HeaderLink;