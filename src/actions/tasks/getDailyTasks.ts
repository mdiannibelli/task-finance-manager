'use server'

import { auth } from "@/auth.config"
import prisma from "@/lib/prisma"

export const getDailyTasks = async () => {
    const session = await auth()
    if (!session?.user) return
    try {
        const dailyTasks = await prisma.user.findUnique({
            where: {
                id: session.user.id
            },
            include: {
                Tasks: {
                    where: {
                        type: 'daily'
                    },
                    orderBy: {
                        completed: 'asc'
                    }
                }
            }
        })

        if (!dailyTasks) return
        return {
            ok: true,
            tasks: dailyTasks.Tasks,
            type: dailyTasks.Tasks.at(1)?.type
        }
    } catch (error) {
        console.log(error);
        return {
            ok: false,
            message: "Can't found user or tasks"
        }
    }
}