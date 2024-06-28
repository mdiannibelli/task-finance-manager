// User
export interface SeedUser {
    email: string
    name: string
    password: string
    role: 'admin' | 'user'
    image?: string
    todos: SeedTodos[]
}


// Todos 
export interface SeedTodos {
    title: string
    completed: boolean
    type: 'daily' | 'weekly'
}

export interface SeedData {
    users: SeedUser[]
}