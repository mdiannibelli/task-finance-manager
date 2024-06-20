'use client'
import React, { useEffect, useState } from 'react'

const CurrentDate = () => {
    const [currentDate, setCurrentDate] = useState(new Date())
    const [mount, setMount] = useState(false)

    useEffect(() => {
        setMount(true)
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date())
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    if (!mount) return;

    return (
        <div className='w-[150px]'>
            <span className='text-white text-sm'>{currentDate.toLocaleString()}</span>
        </div>
    )
}

export default CurrentDate