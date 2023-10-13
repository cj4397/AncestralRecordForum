'use client';

import { useState } from "react";
import styles from './page.module.css'
import Login from "./components/Login";
import Sign_up from "./components/Sign_up";

export default function Home() {
    const [slide, setSlide] = useState(false);



    const slide_animation = () => {
        setSlide(slide ? false : true)
    }

    return (
        <main id={styles.body}>

            <div className={`${styles.container} , ${slide ? styles.right_panel_active : ''}`} id="sidebar">

                <div className={`${styles.form_container} ${styles.sign_up_container}`}>

                    <Sign_up />

                </div>

                <div className={`${styles.form_container} ${styles.sign_in_container}`}>
                    <Login />

                </div>

                <div className={styles.overlay_container}>
                    <div className={styles.overlay}>

                        <div className={`${styles.overlay_panel} ${styles.overlay_left}`}>
                            <h1 className={styles.h1}>Hello, Friend!</h1>
                            <p className={styles.p}>Enter your personal details and start journey with us</p>
                            <button onClick={slide_animation} className={styles.ghost}
                                id="signIn">Sign In</button>
                        </div>

                        <div className={`${styles.overlay_panel} ${styles.overlay_right}`}>
                            <h1 className={styles.h1}>Welcome Back!</h1>
                            <p className={styles.p}>To keep connected with us please login with your personal info</p>
                            <button
                                onClick={slide_animation}

                                className={styles.ghost} id="signUp">Sign Up</button>
                        </div>

                    </div>
                </div>
            </div>

        </main >
    )
}
