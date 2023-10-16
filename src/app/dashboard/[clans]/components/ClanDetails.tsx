"use client"
import React, { useEffect, useState } from 'react'
import ClanAPI from './ClanAPI'

export default function ClanDetails(props: any) {
    const { clan_name } = props
    const { get_clan_details } = ClanAPI()
    const [clan_details, setClanDetails]: any = useState({})



    useEffect(() => {
        async function get_data() {
            const result = await get_clan_details(clan_name)
            if (result.details) {
                setClanDetails(result.details)
            }
        }
        get_data()
    }, [])

    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">

                    <div className="media-content has-text-centered">
                        <p className="title is-4">{clan_details.name}</p>
                    </div>
                </div>

                <div className="content">
                    {clan_details.details}
                    <br />
                    <time >{clan_details.created_at}</time>
                </div>
            </div>
        </div>
    )
}
