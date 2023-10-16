
'use client';
import React from 'react'
import { useState } from "react";
import Login_API from './Login_API';
import { useAuth } from '@/app/components/auth';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from '@fortawesome/free-solid-svg-icons';

import style from './login.module.css'

export default function Sign_up() {
    const [first_name, setFirstName] = useState("");
    const [middle_name, setMiddleName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { sign_up } = Login_API()
    const { get_info } = useAuth()
    const route = useRouter();
    const [loader, setLoader] = useState(false)

    async function signup() {
        const result = await sign_up(first_name, middle_name, last_name, email, password)
        setLoader(false)
        if (result.admin) {
            get_info(
                result.user,
                result.token,
                result.admin
            )
            route.push('/dashboard')
        } else if (result.token) {
            get_info(
                result.user,
                result.token
            )
            route.push('/dashboard')
        } else {
            console.log("invalid email or password")
        }
    }

    const handleSubmit_sign_up = (e: any) => {
        e.preventDefault();
        setLoader(true)
        signup()
    }
    return (
        <>
            {loader ? (<>
                <div className='h-100 is-flex is-justify-content-center is-align-items-center'>
                    <FontAwesomeIcon icon={faCog} spin />

                </div>
            </>) : (<>
                <form className={style.form} onSubmit={handleSubmit_sign_up} autoComplete="on">
                    <h1>Create Account</h1>

                    <input className={style.input} id="new_name" type="text" placeholder="First Name" value={first_name} onChange={(e) => setFirstName(e.target.value)} required />

                    <input className={style.input} id="new_name" type="text" placeholder="Middle Name" value={middle_name} onChange={(e) => setMiddleName(e.target.value)} required />

                    <input className={style.input} id="new_name" type="text" placeholder="Last Name" value={last_name} onChange={(e) => setLastName(e.target.value)} required />


                    <input className={style.input} id="new_email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                    <input className={style.input} id="new_password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                    <button type='submit' className={style.ghost}>Sign Up</button>
                </form>
            </>)}

        </>
    )
}
