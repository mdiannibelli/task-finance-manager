'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface Props {
    path: string,
    icon: React.ReactNode,
    name: string,
}

const SidebarItem = ({ path, icon, name }: Props) => {
    const pathName = usePathname()
    return (
        <li>
            <Link href={path} className={`${path === pathName ? 'text-white bg-lightPink rounded-md py-1 px-2' : 'text-white'} relative px-4 py-3 flex items-center space-x-4`}>
                {icon}
                <span className='ml-1 font-medium text-white'>{name}</span>
            </Link>
        </li>
    )
}

export default SidebarItem
