import React, { ReactNode } from 'react'

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <main className='flex flex-col min-h-screen items-center justify-center'>
            <div className='md:w-full sm:w-[350px] px-10'>
                {children}
            </div>
        </main>
    )
}
