'use client'
/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import { useActionState } from 'react';
import { authenticate } from '@/actions/auth/login'
import { IoInformationCircle } from 'react-icons/io5'
import { useFormState } from 'react-dom';
import LoginButton from './LoginButton';

const LoginForm = () => {
    const [errorMessage, formAction] = useFormState(
        authenticate,
        undefined,
    );
    return (
        <form action={formAction}>
            <div className='flex flex-col mt-4'>
                <label className='text-white font-light' htmlFor="user">Email</label>
                <input name='email' type="text" id='user' className='rounded py-2 px-4 mt-2 outline-none bg-slate-800 text-white font-light' />
            </div>
            <div className='flex flex-col mt-4'>
                <label className='text-white font-light' htmlFor="password">Password</label>
                <input name='password' type="password" id='password' className='rounded py-2 px-4 mt-2 outline-none bg-slate-800 text-white font-light' />
            </div>
            <div className='flex flex-col'>
                <LoginButton />
                <div
                    className="flex h-8 items-end space-x-1"
                    aria-live="polite"
                    aria-atomic="true"
                >
                    {errorMessage && (
                        <>
                            <IoInformationCircle className="h-5 w-5 text-red-500" />
                            <p className="text-sm text-red-500">{errorMessage}</p>
                        </>
                    )}
                </div>
                <span className='text-white mt-4 text-xs text-right font-light'>Don't have account? <Link href='/auth/register' className='text-darkPurple font-semibold'>Register here</Link></span>
            </div>
        </form>
    )
}

export default LoginForm
