'use client'
import { logOut } from '@/actions/auth/logout'
import React from 'react'

const LogoutButton = () => {
    return (
        <button onClick={() => logOut()} className='text-white bg-darkPurple'>Logout</button>
    )
}

export default LogoutButton
