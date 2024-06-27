import { hashSync } from 'bcryptjs'
import type { SeedData } from '../interfaces/seed.interface'




export const initialData: SeedData = {
    users: [
        {
            email: 'test@google.com',
            name: 'Test Admin',
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
        },
        {
            email: 'testuser@google.com',
            name: 'Test User',
            password: hashSync('123456789'),
            role: 'user',
            todos: [
                {
                    title: 'Design mockup',
                    completed: false,
                    type: 'daily'
                },
                {
                    title: 'Create logo',
                    completed: false,
                    type: 'daily'
                },
                {
                    title: 'Complete 3 tasks',
                    completed: true,
                    type: 'daily'
                },
                {
                    title: 'Make testing',
                    completed: false,
                    type: 'daily'
                },
                {
                    title: 'Documentation',
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