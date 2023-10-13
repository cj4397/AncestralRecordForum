'use client'
import React from 'react'
import ClanDetails from './components/ClanDetails'

export default function Page({ params }: any) {

    return (
        <div className='vw-100'>
            <h1 className='title has-text-centered'>{params.clans} Clan</h1>
            <ClanDetails />

        </div>
    )
}
