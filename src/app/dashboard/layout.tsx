import Navbar from '@/components/Navbar/Navbar'
import Sidebar from '@/components/Sidebar/Sidebar'
import React from 'react'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Sidebar />

            <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen">
                <Navbar />
                <div className="px-6 pt-6 p-2 m-2 pb-5 rounded">
                    {children}
                </div>
            </div>
        </>
    )
}
