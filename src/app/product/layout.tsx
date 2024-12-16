"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const pathname = usePathname()
  return (
    <>
     
   <ul className="flex text-sm text-blue-300 gap-4">
    <Link className={pathname === '/product/fashion' ? 'text-red-600':''} prefetch={false} scroll={false} href="/product/fashion">Fashion</Link>
    <Link className={pathname === '/product/electronics' ? 'text-red-600':''} prefetch={false} scroll={false} replace={true} href="/product/electronics">Electronics</Link>
    <Link className={pathname === '/product/books' ? 'text-red-600':''} prefetch={false} scroll={false} href="/product/books">Books</Link>
    <Link className={pathname === '/product/foods' ? 'text-red-600':''} prefetch={false} scroll={false} href="/product/foods">foods</Link>
   </ul>
   {children}
   </>
  )
}
