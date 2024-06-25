'use server'

import prisma from "@/lib/prisma"

export const getWeeklyTasks = async (userId: string) => {
    try {
        const weeklyTasks = await prisma.user.findUnique({
            where: {
                id: userId
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
            tasks: weeklyTasks.Tasks
        }
    } catch (error) {
        console.log(error);
        return {
            ok: false,
            message: "Can't found user or tasks"
        }
    }
}