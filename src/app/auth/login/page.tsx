/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import React from 'react'

export default function LoginPage() {
    return (
        <div className='w-full flex justify-center items-center flex-col'>
            <h1 className='text-3xl font-semibold text-white mb-12'>Sign in with your account</h1>
            <form>
                <div className='flex flex-col mt-4'>
                    <label className='text-white font-light' htmlFor="user">Email</label>
                    <input type="text" id='user' className='rounded py-2 px-4 mt-2 outline-none bg-slate-800 text-white font-light' />
                </div>
                <div className='flex flex-col mt-4'>
                    <label className='text-white font-light' htmlFor="password">Password</label>
                    <input type="password" id='password' className='rounded py-2 px-4 mt-2 outline-none bg-slate-800 text-white font-light' />
                </div>
                <div className='flex flex-col'>
                    <button type='submit' className='rounded bg-slate-900 text-white font-light w-64 mt-8 py-2 hover:bg-darkPurple duration-300'>Login</button>
                    <span className='text-white mt-4 text-xs text-right font-light'>Don't have account? <Link href='/auth/register' className='text-darkPurple font-semibold'>Register here</Link></span>
                </div>
            </form>
            <div className='h-0.5 w-full bg-slate-700 my-8 max-w-64' />
            {/* Google & Github */}
        </div>
    )
}
