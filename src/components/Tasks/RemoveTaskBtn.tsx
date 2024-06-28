'use client'
import { deleteTask } from '@/actions/tasks/updateTask'
import React from 'react'

interface Props {
    taskId: string
}

const RemoveTaskBtn = ({ taskId }: Props) => {
    return (
        <div>
            <button onClick={() => deleteTask(taskId)} className='bg-darkPurple text-white rounded-md py-1 px-4 text-xs hover:bg-moreDarkPurple duration-300'>Delete task</button>
        </div>
    )
}

export default RemoveTaskBtn
