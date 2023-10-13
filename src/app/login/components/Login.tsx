import React from 'react'
import { useState } from "react";
import Login_API from './Login_API';
import { useAuth } from '@/app/components/auth';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from '@fortawesome/free-solid-svg-icons';

import style from './login.module.css'

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = Login_API()
    const { get_info } = useAuth()
    const route = useRouter();
    const [loader, setLoader] = useState(false)

    async function signin() {
        const result = await login(email, password)
        setLoader(false)
        if (result.token) {
            get_info(
                result.user,
                result.token

            )
            console.log(result)
            route.push('/dashboard')
        } else {
            console.log("invalid email or password")
        }
    }

    const handleSubmit_sign_in = (e: any) => {
        e.preventDefault();
        setLoader(true)
        signin()
    }
    return (
        <>
            {loader ? (<>
                <div className='h-100 is-flex is-justify-content-center is-align-items-center'>
                    <FontAwesomeIcon icon={faCog} spin />

                </div>
            </>) : (<>
                <form className={style.form} onSubmit={handleSubmit_sign_in}>
                    <h1>Sign in</h1>


                    <input className={style.input} id="user_email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input className={style.input} id="user_password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                    <button type='submit' className={style.ghost}>Sign In</button>
                </form>
            </>)}

        </>
    )
}
