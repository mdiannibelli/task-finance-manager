import { getDailyTasks } from '@/actions/tasks/getDailyTasks'
import { getWeeklyTasks } from '@/actions/tasks/getWeeklyTasks'
import DeleteTaskBtn from '@/components/Tasks/DeleteTaskBtn'
import RemoveTaskBtn from '@/components/Tasks/RemoveTaskBtn'
import UpdateTaskBtn from '@/components/Tasks/UpdateTaskBtn'
import React from 'react'

export default async function TasksPage() {
    // Get session and paste userId
    const dailyTasks = await getDailyTasks()
    console.log(dailyTasks)
    const weeklyTasks = await getWeeklyTasks()

    if (!dailyTasks || !dailyTasks.ok) return
    if (!weeklyTasks || !weeklyTasks.ok) return

    const { tasks: daily } = dailyTasks
    const { tasks: weekly } = weeklyTasks

    return (
        <div>
            <div>
                <h2 className='text-white font-medium tracking-widest uppercase text-2xl m-8'>Daily Tasks:</h2>
                <div className='grid grid-cols-4 gap-4'>
                    {
                        !dailyTasks || !dailyTasks.ok || dailyTasks.tasks?.length === 0 ? <div className='flex justify-center col-span-4 items-center'><span className='text-xl text-white font-light tracking-[0.3rem]'>No daily tasks found</span></div>
                            : daily?.map((task) => (
                                <div key={task.id} className={`border-[1.5px] rounded p-4 flex gap-x-8 justify-between ${task.completed ? 'border-green-500' : 'border-red-500'}`}>
                                    <div className='max-w-[200px] flex flex-col justify-between'>
                                        <span className={`text-xl ${task.completed ? 'text-green-500' : 'text-red-500'}`}>{task.title}</span>
                                        <div>
                                            <p className='text-xs text-slate-300 mt-2'>Created at: {task.createdAt.toLocaleDateString()}</p>
                                            <p className='text-xs text-slate-300'>Updated at: {task.updatedAt.toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col justify-between'>
                                        <UpdateTaskBtn task={task} />
                                        <RemoveTaskBtn taskId={task.id} />
                                    </div>
                                </div>
                            ))
                    }

                    {dailyTasks.tasks?.length! > 0 && <DeleteTaskBtn type={dailyTasks.type!} text="Delete all Daily tasks" />}

                </div>
                <h2 className='text-white font-medium tracking-widest uppercase text-2xl m-8 mt-16'>Weekly Tasks:</h2>
                <div className='grid grid-cols-4 gap-4'>
                    {
                        !weeklyTasks || !weeklyTasks.ok || weeklyTasks.tasks?.length === 0 ? <div className='flex justify-center col-span-4 items-center'><span className='text-xl text-white font-light tracking-[0.3rem]'>No daily tasks found</span></div>
                            : weekly?.map((task) => (
                                <div key={task.id} className={`border-[1.5px] rounded p-4 flex gap-x-8 justify-between ${task.completed ? 'border-green-500' : 'border-red-500'}`}>
                                    <div className='max-w-[200px] flex flex-col justify-between'>
                                        <span className={`text-xl ${task.completed ? 'text-green-500' : 'text-red-500'}`}>{task.title}</span>
                                        <div>
                                            <p className='text-xs text-slate-300 mt-2'>Created at: {task.createdAt.toLocaleDateString()}</p>
                                            <p className='text-xs text-slate-300'>Updated at: {task.updatedAt.toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col justify-between'>
                                        <UpdateTaskBtn task={task} />
                                        <RemoveTaskBtn taskId={task.id} />
                                    </div>
                                </div>
                            ))
                    }
                    {weeklyTasks.tasks?.length! > 0 && <DeleteTaskBtn type={weeklyTasks.type!} text="Delete all Weekly tasks" />}
                </div>
            </div>
        </div>
    )
}
