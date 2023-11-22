'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { FaBug } from "react-icons/fa";
import classNames from 'classnames';

export default function Navbar() {

   const currentPath = usePathname();

    const links = [
        {id: 1, href: "/", title: "Dashboard"},
        {id: 2, href: "/issues", title: "Issues"},
    ]
  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
        <Link href={"/"}><FaBug /></Link>
        <ul className='flex space-x-6'>
            {links.map(link => 
                <Link key={link.id} href={link.href} className={classNames({
                    'text-zinc-900' : link.href === currentPath,
                    'text-zinc-500' : link.href !== currentPath,
                    'hover:text-zinc-800 transition-colors' : true
                })}>{link.title}</Link>
            )}
        </ul>
    </nav>
  )
}
