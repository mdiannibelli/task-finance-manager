import LoginForm from '@/components/Forms/LoginForm'
import React from 'react'

export default function LoginPage() {
    return (
        <div className='w-full flex justify-center items-center flex-col'>
            <h1 className='text-3xl font-semibold text-white mb-12'>Sign in with your account</h1>
            <LoginForm />
            <div className='h-0.5 w-full bg-slate-700 my-8 max-w-64' />
            {/* Google & Github */}
        </div>
    )
}
