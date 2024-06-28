'use server'

import { auth } from "@/auth.config"
import prisma from "@/lib/prisma"
import { TaskType } from "@prisma/client"
import { revalidatePath } from "next/cache"

export async function deleteAllTask(type: TaskType) {
    const session = await auth()
    if (!session?.user) return
    try {
        const taskToDelete = await prisma.task.deleteMany({
            where: {
                type: type
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