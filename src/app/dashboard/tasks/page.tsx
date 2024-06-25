import { getDailyTasks } from '@/actions/tasks/getDailyTasks'
import { getWeeklyTasks } from '@/actions/tasks/getWeeklyTasks'
import UpdateTaskBtn from '@/components/Tasks/UpdateTaskBtn'
import React from 'react'

export default async function TasksPage() {
    // Get session and paste userId
    const dailyTasks = await getDailyTasks("4e7e79df-c424-46f5-bc27-c86dc303e8c5")
    const weeklyTasks = await getWeeklyTasks("4e7e79df-c424-46f5-bc27-c86dc303e8c5")

    if (!dailyTasks || !dailyTasks.ok) return <div>No tasks found or an error occurred</div>
    if (!weeklyTasks || !weeklyTasks.ok) return <div>No tasks found or an error occurred</div>

    const { tasks: daily } = dailyTasks
    const { tasks: weekly } = weeklyTasks

    return (
        <div>
            <div>
                <h2 className='text-white font-medium tracking-widest uppercase text-2xl m-8'>Daily Tasks:</h2>
                <div className='grid grid-cols-4 gap-4'>
                    {
                        daily?.map((task) => (
                            <div key={task.id} className={`border-[1.5px] rounded p-4 flex gap-x-8 justify-between ${task.completed ? 'border-green-500' : 'border-red-500'}`}>
                                <div className='max-w-[200px] flex flex-col justify-between'>
                                    <span className={`text-xl ${task.completed ? 'text-green-500' : 'text-red-500'}`}>{task.title}</span>
                                    <div>
                                        <p className='text-xs text-slate-300 mt-2'>Created at: {task.createdAt.toLocaleDateString()}</p>
                                        <p className='text-xs text-slate-300'>Updated at: {task.updatedAt.toLocaleDateString()}</p>
                                    </div>
                                </div>
                                <UpdateTaskBtn task={task} />
                            </div>
                        ))
                    }
                </div>
                <h2 className='text-white font-medium tracking-widest uppercase text-2xl m-8 mt-16'>Weekly Tasks:</h2>
                <div className='grid grid-cols-4 gap-4'>
                    {
                        weekly?.map((task) => (
                            <div key={task.id} className={`border-[1.5px] rounded p-4 flex gap-x-8 justify-between ${task.completed ? 'border-green-500' : 'border-red-500'}`}>
                                <div className='max-w-[200px] flex flex-col justify-between'>
                                    <span className={`text-xl ${task.completed ? 'text-green-500' : 'text-red-500'}`}>{task.title}</span>
                                    <div>
                                        <p className='text-xs text-slate-300 mt-2'>Created at: {task.createdAt.toLocaleDateString()}</p>
                                        <p className='text-xs text-slate-300'>Updated at: {task.updatedAt.toLocaleDateString()}</p>
                                    </div>
                                </div>
                                <UpdateTaskBtn task={task} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
