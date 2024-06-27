import { auth } from '@/auth.config'
import LogoutButton from '@/components/Profile/LogoutButton'
import React from 'react'

export default async function ProfilePage() {
    const session = await auth()
    return (
        <div>
            {
                session?.user ? (
                    <div>
                        {
                            JSON.stringify(session.user, null, 2)
                        }
                    </div>
                ) : <span>Log in please...</span>
            }
            <LogoutButton />
        </div>
    )
}
