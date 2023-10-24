'use client'
import React, { useEffect, useState } from 'react'
import ClanHistory from '../components/tables/ClanHistory'
import ClanAPI from '../components/ClanAPI'
import CreateHistory from '../components/modals/CreateHistory'

export default function Page({ params }: any) {
    const clan_name = params.clans.split('%20').join(' ')
    const [history, setHistory] = useState([])
    const { get_history } = ClanAPI()
    const [modal, setModal] = useState(false)

    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        async function get_data() {
            const result = await get_history(clan_name)
            console.log(result)
            if (result.history) {
                setHistory(result.history)
            }
        }
        get_data()
    }, [refresh])
    return (
        <div>

            <div className='is-flex is-justify-content-space-around '>
                <div className='is-flex'>
                    <button onClick={() => setModal(true)} className="button is-success is-large mx-5">Create a History</button>

                </div>

                <div className="field has-addons pt-4">
                    <div className="control">
                        <input className="input" type="text" placeholder="Find a Title" />
                    </div>
                    <div className="control">
                        <a className="button is-info">
                            Search
                        </a>
                    </div>
                </div>
            </div>

            {modal && <CreateHistory setModal={setModal} modal_open={modal} clan_name={clan_name} refresh={refresh} setRefresh={setRefresh} />}
            <ClanHistory history={history} clan_name={clan_name} refresh={refresh} setRefresh={setRefresh} />
        </div>
    )
}
