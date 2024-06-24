import React from 'react'
import { MdAccountCircle, MdOutlineNotificationsActive } from 'react-icons/md'
import { PiHandWaving } from 'react-icons/pi'
import { SiGoogletagmanager } from 'react-icons/si'
import CurrentDate from './CurrentDate'
import Link from 'next/link'

const Navbar = () => {
    return (
        <header className='flex justify-between bg-darkPurple p-4 mt-2 mx-4 rounded-md items-center'>
            <div className='flex items-center'>
                <SiGoogletagmanager size={35} className='text-white mx-2' />
                <h1 className='text-white font-medium text-2xl'>Task & Finance Manager</h1>
            </div>
            <div className='flex items-center'>
                <PiHandWaving className='text-lightPink mx-2' size={40} />
                <h1 className='text-white font-semibold text-2xl'>Welcome userName!</h1>
            </div>
            <div className='flex gap-x-6 items-center'>
                <div>
                    <CurrentDate />
                </div>
                <div className='bg-moreDarkPurple p-1 rounded-2xl'>
                    <Link href='/auth/login'><MdAccountCircle className='text-darkPurple hover:text-lightWhite cursor-pointer duration-300' size={30} /></Link>
                </div>
                <div className='bg-moreDarkPurple p-1 rounded-2xl'>
                    <MdOutlineNotificationsActive className='text-darkPurple hover:text-lightWhite cursor-pointer duration-300' size={30} />
                </div>
            </div>
        </header>
    )
}

export default Navbar
