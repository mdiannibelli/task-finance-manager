'use client'
import updateTask from '@/actions/tasks/updateTask'
import { TaskInterface } from '@/interfaces/task.interface'
import React from 'react'

interface Props {
    task: TaskInterface
}

const UpdateTaskBtn = ({ task }: Props) => {
    return (
        <div>
            <button onClick={() => updateTask(task.id, !task.completed)} className={`text-md ${task.completed ? 'text-green-500 hover:text-red-500' : 'text-red-500 hover:text-green-500'}`}>{task.completed ? 'Completed' : 'To Complete'}</button>
        </div>
    )
}

export default UpdateTaskBtn
