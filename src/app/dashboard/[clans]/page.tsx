'use client'
import React from 'react'
import ClanDetails from './components/ClanDetails'

export default function Page({ params }: any) {

    return (
        <div className='vw-100'>

            <ClanDetails clan_name={params.clans} />

        </div>
    )
}
