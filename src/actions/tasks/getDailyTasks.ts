'use server'

import prisma from "@/lib/prisma"

export const getDailyTasks = async (userId: string) => {
    try {
        const dailyTasks = await prisma.user.findUnique({
            where: {
                id: userId
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
            tasks: dailyTasks.Tasks
        }
    } catch (error) {
        console.log(error);
        return {
            ok: false,
            message: "Can't found user or tasks"
        }
    }
}