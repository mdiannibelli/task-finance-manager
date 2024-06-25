import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import prisma from './lib/prisma';
import bcryptjs from 'bcryptjs'
import NextAuth from 'next-auth';

const authenticatedRoutes = [
    '/dashboard',
    '/dashboard/tasks',
    '/dashboard/finance'
]

export const authConfig = {
    pages: {
        signIn: '/auth/login',
        newUser: '/auth/register'
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = authenticatedRoutes.includes(nextUrl.pathname);
            if (isOnDashboard) {
                if (isLoggedIn) return true;
                return false; // Redirect unauthenticated users to login page
            } else if (isLoggedIn) {
                return true
            }
            return true;
        },
    },
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(6) })
                    .safeParse(credentials);

                if (!parsedCredentials.success) return null

                const { email, password } = parsedCredentials.data

                //! Post seed:
                // Buscar el correo
                const user = await prisma.user.findFirst({
                    where: { email: email.toLowerCase() }
                })
                if (!user) return null;

                // Comparar las contraseñas
                if (!bcryptjs.compareSync(password, user.password)) return null;

                // Regresar el usuario sin el password
                const { password: _, ...rest } = user;
                //? console.log({rest})
                return rest;
            },
        }),
    ], // Add providers with an empty array for now
} satisfies NextAuthConfig;

export const { signIn, signOut, auth, handlers } = NextAuth(authConfig)