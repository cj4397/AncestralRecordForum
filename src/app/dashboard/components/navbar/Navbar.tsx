'use client';
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { usePathname } from "next/navigation";
import { useAuth } from '@/app/components/auth';
import styles from './navbar_style.module.css'
import Dashboard_API from '../Dashboard_API';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faCaretDown } from '@fortawesome/free-solid-svg-icons';


export default function Navbar(props: any) {
    const { admin } = props
    const pathname = usePathname()
    const { logout } = useAuth()
    const { get_clans } = Dashboard_API()

    const [loader, setLoader] = useState(true)
    const [clans, setClan] = useState([])



    async function get_data() {
        const response = await get_clans();
        // console.log(response)
        if (response.clans) {
            setLoader(false)
            setClan(response.clans)
            // console.log(response)
        } else if (response.error == 'not a user') {
            logout()
        }
        else {
            setLoader(false)
            setClan([])
            console.log(response)
            // logout()
        }


    }

    useEffect(() => {
        get_data()
        // admin

    }, [])


    return (
        <>
            <nav className={`is-flex is-justify-content-center is-fullwidth ${styles.nav}`}>
                <div>
                    <li className={`${pathname == '/dashboard' && "active"} navbar-item ${styles.li}`}>
                        <Link href='/dashboard' >
                            Home
                        </Link>
                    </li>

                    {admin && (<>
                        <li className={`${pathname == '/dashboard/admin/clan_proposal' && "active"} navbar-item ${styles.li}`}>
                            <Link href={{
                                pathname: '/dashboard/admin/clan_proposal',
                                query: { proposal: 'clan_proposal' },
                            }}
                                as='/dashboard/admin/clan_proposal'
                            >
                                Clan Proposals
                            </Link>
                        </li>

                        <li className={`${pathname == '/dashboard/admin/branch_proposal' && "active"} navbar-item ${styles.li}`}>
                            <Link href={{
                                pathname: '/dashboard/admin/branch_proposal',
                                query: { proposal: 'branch_proposal' },
                            }}
                                as='/dashboard/admin/branch_proposal'
                            >
                                Branch Proposals
                            </Link>
                        </li>
                    </>)}





                    <div className="dropdown is-hoverable ">

                        <li className={`navbar-item ${styles.li}`}>
                            <a>Clans</a>
                            <span className="icon is-small has-text-info">
                                <FontAwesomeIcon icon={faCaretDown} />
                            </span>
                        </li>

                        <div className="dropdown-menu absolute" id="dropdown-menu4" role="menu">
                            <div className="dropdown-content">
                                <div className="dropdown-item">
                                    {loader ? (<>
                                        <div className='h-100 is-flex is-justify-content-center is-align-items-center'>
                                            <FontAwesomeIcon icon={faCog} spin />

                                        </div>
                                    </>) : (<>
                                        {(clans.length > 0) ?
                                            (<>
                                                {clans.map((e: any) => (

                                                    <Link href={{
                                                        pathname: `/dashboard/${e}`,
                                                        query: { clans: `${e}` },
                                                    }}
                                                        as={`/dashboard/${e}`}
                                                        key={e} className="navbar-item">
                                                        {e}
                                                    </Link>

                                                ))}
                                            </>) :
                                            (<>
                                                <p className="navbar-item">
                                                    didn't join any clan
                                                </p>
                                            </>)}
                                    </>)}


                                    <hr className="navbar-divider" />

                                    <Link href='/dashboard/clan_application'
                                        className="navbar-item">
                                        Join a clan
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className={`${styles.end}`}>
                    <li className={`navbar-item ${styles.li}`}>
                        <a className='has-text-danger' onClick={logout}><strong>Log out</strong></a>
                    </li>
                </div>

            </nav>

        </>
    )
}
