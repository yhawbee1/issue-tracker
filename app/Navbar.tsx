import Link from 'next/link'
import React from 'react'
import { FaBug } from "react-icons/fa";

export default function Navbar() {
    const links = [
        {id: 1, href: "/", title: "Dashboard"},
        {id: 2, href: "/issue", title: "Issues"},
    ]
  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
        <Link href={"/"}><FaBug /></Link>
        <ul className='flex space-x-6'>
            {links.map(link => 
                <Link key={link.id} href={link.href} className='text-zinc-500 hover:text-zinc-800 transition-colors'>{link.title}</Link>
            )}
        </ul>
    </nav>
  )
}
