'use server'

import { signOut } from "@/auth.config"

export async function logOut() {
    await signOut()
}