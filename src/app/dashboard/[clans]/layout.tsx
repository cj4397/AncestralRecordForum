'use client'
import React, { useState } from 'react'
import SideNav from './components/sidenav/SideNav'
import style from './layout.module.css'

export default function Layout({ children, }: { children: React.ReactNode }) {
    const [sidenav, setSidenav] = useState(false)
    const show = () => {
        console.log("hit")
        setSidenav(sidenav ? false : true)
    }
    return (
        <main className={`${style.clan} is-flex`}>

            <div className={`${sidenav && style.pushed} ${style.sidenav}`}>
                <SideNav></SideNav>
            </div>

            {/* <div className={`${style.container}`} > */}
            <div className={`${sidenav && style.moved} ${style.sidenav_button}`}>
                <button className={style.button} onClick={show}><span>Clan Navigation</span></button>
            </div>
            {/* </div> */}
            <div className={` ${style.main}`}>
                {children}
            </div>

        </main>
    )
}
