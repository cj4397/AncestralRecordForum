'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import style from './sidenav.module.css'
import { usePathname } from 'next/navigation'
import ClanAPI from '../ClanAPI'


export default function SideNav() {
    const pathname = usePathname()
    const clan_name = pathname.split('/')
    const { officer_check } = ClanAPI()
    const [officer, setOfficer] = useState(false)

    useEffect(() => {
        async function get_data() {
            const result = await officer_check(clan_name[2])
            if (result.officer) {
                setOfficer(result.officer)
            }
            console.log(officer)
        }
        get_data()
    }, [])

    return (
        <div>
            SideNav
            <ul className=''>

                <li className={`${pathname == `/dashboard/${clan_name[2]}` && "active"} ${style.li} navbar-item`}>
                    <Link href={`/dashboard/${clan_name[2]}`}>Clan Home Page</Link>
                </li>
                <li className={`${pathname == `/dashboard/${clan_name[2]}/clan_history` && "active"} ${style.li} navbar-item`}>
                    <Link href={`/dashboard/${clan_name[2]}/clan_history`}>Clan History</Link>
                </li>
                <li className={`${pathname == `/dashboard/${clan_name[2]}/family_tree` && "active"} ${style.li} navbar-item`}>
                    <Link href={`/dashboard/${clan_name[2]}/family_tree`}>Clan Ancestral Tree</Link>
                </li>
                <li className={`${pathname == `/dashboard/${clan_name[2]}/memories` && "active"} ${style.li} navbar-item`}>
                    <Link href={`/dashboard/${clan_name[2]}/memories`}>Random Memories</Link>
                </li>
                <li className={`${pathname == `/dashboard/${clan_name[2]}/forum` && "active"} ${style.li} navbar-item`}>
                    <Link href={`/dashboard/${clan_name[2]}/forum`}>Clan Correction Forum</Link>
                </li>
                {officer && <li className={`${pathname == `/dashboard/${clan_name[2]}/joining_request` && "active"} ${style.li} navbar-item`}>
                    <Link href={`/dashboard/${clan_name[2]}/joining_request`}>Clan Join Request</Link>
                </li>
                }


            </ul>

        </div>
    )
}
