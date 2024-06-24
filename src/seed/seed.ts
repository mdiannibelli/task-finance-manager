import { hashSync } from 'bcryptjs'

// User
interface SeedUser {
    email: string
    fullname: string
    password: string
    role: 'admin' | 'user'
    image?: string
    todos: SeedTodos[]
}

// Todos 
interface SeedTodos {
    title: string
    completed: boolean
    type: 'daily' | 'weekly'
}

interface SeedData {
    users: SeedUser[]
}


export const initialData: SeedData = {
    users: [
        {
            email: 'test@google.com',
            fullname: 'Test Admin',
            password: hashSync('123456789'),
            role: 'admin',
            todos: [
                {
                    title: 'Design frontend UI',
                    completed: false,
                    type: 'daily'
                },
                {
                    title: 'Start with development phase',
                    completed: false,
                    type: 'daily'
                },
                {
                    title: 'List all tasks',
                    completed: true,
                    type: 'daily'
                },
                {
                    title: 'Test backend',
                    completed: false,
                    type: 'daily'
                },
                {
                    title: 'Create mockup',
                    completed: false,
                    type: 'weekly'
                },
                {
                    title: 'Do meeting with all team',
                    completed: false,
                    type: 'weekly'
                },
                {
                    title: 'Includes keywords and SEO',
                    completed: true,
                    type: 'weekly'
                },
                {
                    title: 'Hosting and maintenance',
                    completed: false,
                    type: 'weekly'
                },

            ]
        }
    ],


}