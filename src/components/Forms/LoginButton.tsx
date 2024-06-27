'use client'
import React from 'react'
import { useFormStatus } from 'react-dom'

const LoginButton = () => {
    const { pending } = useFormStatus()
    return (
        <button aria-disabled={pending} disabled={pending} type='submit' className={`${pending ? 'bg-darkPurple' : "bg-slate-900 hover:bg-darkPurple duration-300"} rounded  text-white font-light w-64 mt-4 py-2 `}>{pending ? 'Entering...' : 'Login'}</button>
    )
}

export default LoginButton
