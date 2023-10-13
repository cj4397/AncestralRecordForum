'use client'
import React, { useEffect, useState } from 'react'
import BranchProposal from '../components/tables/BranchProposal'
import ClanProposal from '../components/tables/ClanProposal'
import AdminAPI from '../components/AdminAPI'


export default function Page({ params }: any) {
    const { clan_proposals } = AdminAPI()
    const [clan, setClan] = useState([])
    const [branch, setBranch] = useState([])

    useEffect(() => {
        async function get_data() {
            const result = await clan_proposals()
            if (result.Clans) {
                setClan(result.Clans)
                setBranch(result.Branch)
            }
            console.log(result)
        }
        get_data()
    }, [])

    console.log(params.proposal)
    return (
        <div>{params.proposal} page
            {(params.proposal == 'clan_proposal') ?
                <ClanProposal clans={clan} /> :
                <BranchProposal branch={branch} />}
        </div>
    )
}
