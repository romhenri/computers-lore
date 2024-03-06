import Link from "next/link";

interface IHeaderLink {
  children: React.ReactNode;
  href: string;
}

const HeaderLink : React.FC<IHeaderLink> = (
  {
    children,
    href
  }
) => {
  return (
    <Link
      className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-neutral-100/50 data-[state=open]:bg-neutral-100/50 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 dark:focus:bg-neutral-800 dark:focus:text-neutral-50 dark:data-[active]:bg-neutral-800/50 dark:data-[state=open]:bg-neutral-800/50"
      href={href}
    >
      {children}
    </Link>
  )
};

export default HeaderLink;