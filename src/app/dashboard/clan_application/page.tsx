'use client'
import React, { useEffect, useState } from 'react'
import Dashboard_API from '../components/Dashboard_API'
import ShowClanTable from '../components/tables/ShowClanTable'
import { useAuth } from '@/app/components/auth'
import ClanCrationRequest from '../components/modal/ClanCrationRequest'
import BranchCreationRequest from '../components/modal/BranchCreationRequest'

export default function Page() {
    const { show_clans } = Dashboard_API()
    const [clan, setClan] = useState([])
    const [modal_clan, setMClan] = useState(false)
    const [modal_branch, setMBranch] = useState(false)


    const { logout } = useAuth()

    async function get_data() {
        const response = await show_clans();
        if (response.clans) {
            setClan(response.clans)
        } else {
            // logout()
        }


    }

    useEffect(() => {
        get_data()
    }, [])

    return (
        <div>
            <div className='is-flex is-justify-content-space-around '>
                <div className='is-flex'>
                    <button onClick={() => setMClan(true)} className="button is-success is-large mx-5">Create a Clan</button>

                    <button onClick={() => setMBranch(true)} className="button is-success is-light is-large mx-5">Create a Branch Clan</button>
                </div>

                <div className="field has-addons pt-4">
                    <div className="control">
                        <input className="input" type="text" placeholder="Find a Clan" />
                    </div>
                    <div className="control">
                        <a className="button is-info">
                            Search
                        </a>
                    </div>
                </div>
            </div>


            {modal_clan && <ClanCrationRequest setModal={setMClan} modal_open={modal_clan} />}
            {modal_branch && <BranchCreationRequest setModal={setMBranch} modal_open={modal_branch} />}

            <ShowClanTable clans={clan} />
        </div>
    )
}
