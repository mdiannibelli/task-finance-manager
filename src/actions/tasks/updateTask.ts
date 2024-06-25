'use server'

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export default async function updateTask(id: string, complete: boolean) {
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