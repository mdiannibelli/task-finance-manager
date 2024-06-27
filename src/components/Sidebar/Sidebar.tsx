import Link from 'next/link'
import React from 'react'
import { BiSolidDashboard } from 'react-icons/bi'
import { FaTasks } from 'react-icons/fa'
import { GrMoney } from 'react-icons/gr'
import SidebarItem from './SidebarItem'

const dashboardLinks = [
    {
        path: '/dashboard/tasks',
        icon: <FaTasks size={30} />,
        name: 'Tasks'
    },
    {
        path: '/dashboard/finance',
        icon: <GrMoney size={30} />,
        name: 'Finance'
    },

]

const Sidebar = () => {
    return (
        <aside className='ml-[-100%] top-0 fixed z-10 w-full flex flex-col justify-between h-screen border-r border-black bg-[#111113] transition duration-300 md:w-4/12 lg:ml-0 rounded-md lg:w-[25%] xl:w-[20%] 2xl:w-[15%]'>
            <div>
                <div className='p-4 mx-auto mt-4'>
                    <Link href='/dashboard' title='dashboard' className='flex gap-x-2 items-center'>
                        <BiSolidDashboard size={25} className='text-white' />
                        <span className='text-white text-xl uppercase tracking-widest font-light'>Dashboard</span>
                    </Link>
                </div>

                <ul className="space-y-2 tracking-wide mt-8">
                    {dashboardLinks.map((item) => (
                        <SidebarItem key={item.path} path={item.path} icon={item.icon} name={item.name} />
                    ))}
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar
