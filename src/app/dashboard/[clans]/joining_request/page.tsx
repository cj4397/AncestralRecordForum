'use client'
import React, { useEffect, useState } from 'react'
import ClanJoinRequest from '../components/tables/ClanJoinRequest'
import ClanAPI from '../components/ClanAPI'


export default function Page({ params }: any) {

    const [request, setRequest] = useState([])
    const { clan_join_request } = ClanAPI()
    useEffect(() => {
        async function get_data() {
            const result = await clan_join_request(params.clans)
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
        <div>P {params.clans}
            <ClanJoinRequest request={request} clan_name={params.clans} />
        </div>
    )
}
