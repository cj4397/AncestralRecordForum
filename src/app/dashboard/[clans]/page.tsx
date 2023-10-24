'use client'
import React from 'react'
import ClanDetails from './components/ClanDetails'

export default function Page({ params }: any) {
    const clan_name = params.clans.split('%20').join(' ')

    return (
        <div className='vw-100'>

            <ClanDetails clan_name={clan_name} />

        </div>
    )
}
