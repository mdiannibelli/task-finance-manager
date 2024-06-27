import prisma from "../lib/prisma";
import { initialData } from "./seed";

async function main() {
    await prisma.task.deleteMany()
    await prisma.user.deleteMany()

    const { users } = initialData

    users.forEach(async (user) => {
        const { email, name, password, role, todos } = user
        const userDB = await prisma.user.create({
            data: {
                email,
                name,
                password,
                role,
                Tasks: {
                    createMany: {
                        data: todos.map(todo => ({
                            title: todo.title,
                            completed: todo.completed,
                            type: todo.type
                        }))
                    }
                }
            }
        })
    })

    console.log("Seed executed")
}

(() => {
    if (process.env.NODE_ENV === 'production') return
    main()
})();