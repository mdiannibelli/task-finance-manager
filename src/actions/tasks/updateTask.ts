'use server'

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function updateTask(id: string, complete: boolean) {
    try {
        const taskToUpdate = await prisma.task.update({
            where: {
                id: id
            },
            data: {
                completed: complete
            }
        })
        revalidatePath('/dashboard/tasks')
        return taskToUpdate
    } catch (error) {
        console.log(error)
    }
}

export async function deleteTask(taskId: string) {
    try {
        await prisma.task.delete({
            where: {
                id: taskId
            }
        })
        revalidatePath('/dashboard/tasks')
        return {
            ok: true,
            message: "Task deleted",
        }
    } catch (error) {
        console.log(error)
    }
}