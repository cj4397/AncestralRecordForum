'use client'

import React, { useEffect, useState } from 'react'

import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/components/auth'
import Navbar from './components/navbar/Navbar';
import Dashboard_API from './components/Dashboard_API';


export default function Layout({ children, }: { children: React.ReactNode }) {
    const { token, logout } = useAuth()
    const { admin_check } = Dashboard_API()
    const router = useRouter()
    const [admin, setAdmin] = useState(false)
    const check = () => {
        if (token === "") {
            logout()
            return router.push('/login')
        }
    }

    useEffect(() => {
        async function check_admin() {
            const result = await admin_check()
            if (result.admin) {
                setAdmin(result.admin)
            } else {
                setAdmin(false)
            }

        }
        check_admin()
    }, [])

    useEffect(() => {
        check()
    })
    return (
        <main>

            <Navbar admin={admin}></Navbar>


            <div>{children}</div>
        </main>
    )
}
