import { auth } from '@/auth.config'
import { redirect } from 'next/navigation'
import React, { ReactNode } from 'react'

export default async function AuthLayout({ children }: { children: ReactNode }) {
    const session = await auth()
    if (session?.user) {
        redirect('/dashboard/profile')
    }
    return (
        <main className='flex flex-col min-h-screen items-center justify-center'>
            <div className='md:w-full sm:w-[350px] px-10'>
                {children}
            </div>
        </main>
    )
}
