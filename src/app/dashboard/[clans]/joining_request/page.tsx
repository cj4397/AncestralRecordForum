'use client'
import React, { useEffect, useState } from 'react'
import ClanJoinRequest from '../components/tables/ClanJoinRequest'
import ClanAPI from '../components/ClanAPI'


export default function Page({ params }: any) {
    const clan_name = params.clans.split('%20').join(' ')
    const [request, setRequest] = useState([])
    const { clan_join_request } = ClanAPI()
    useEffect(() => {
        async function get_data() {
            const result = await clan_join_request(clan_name)
            if (result.request) {
                setRequest(result.request)
            } else {
                alert(result.error)
            }
            console.log(result)
        }
        get_data()
    }, [])
    return (
        <div>
            <ClanJoinRequest request={request} clan_name={clan_name} />
        </div>
    )
}
