'use client'
import { deleteAllTask } from '@/actions/tasks/deleteAllTasks'
import React from 'react'

interface Props {
    text: string
    type: 'daily' | 'weekly'
}


const DeleteTaskBtn = ({ text, type }: Props) => {
    return (
        <div className='flex justify-center items-center col-span-4'>
            <button onClick={() => deleteAllTask(type)} className='bg-darkPurple text-white rounded-md py-1 px-4 mt-8 hover:bg-moreDarkPurple duration-300'>{text}</button>
        </div>
    )
}

export default DeleteTaskBtn
