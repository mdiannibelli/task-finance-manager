'use server'

import { auth } from "@/auth.config"
import prisma from "@/lib/prisma"

export const getWeeklyTasks = async () => {
    const session = await auth()
    if (!session?.user) return
    try {
        const weeklyTasks = await prisma.user.findUnique({
            where: {
                id: session.user.id
            },
            include: {
                Tasks: {
                    where: {
                        type: 'weekly'
                    },
                    orderBy: {
                        completed: 'asc'
                    }
                }
            }
        })

        if (!weeklyTasks) return
        return {
            ok: true,
            tasks: weeklyTasks.Tasks,
            type: weeklyTasks.Tasks.at(1)?.type
        }
    } catch (error) {
        console.log(error);
        return {
            ok: false,
            message: "Can't found user or tasks"
        }
    }
}