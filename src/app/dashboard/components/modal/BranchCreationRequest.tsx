'use client'
import React, { useEffect, useState } from 'react'
import Dashboard_API from '../Dashboard_API'

export default function BranchCreationRequest(props: any) {
    const { modal_open, setModal, } = props
    const { branch_creation_request, get_clans } = Dashboard_API()
    const [clan, setClan] = useState([])

    useEffect(() => {
        async function get_data() {
            const result = await get_clans()
            if (result.clans) {
                setClan(result.clans)
            }
            console.log(result)
        }
        get_data()
    }, [])

    const handle_submit = (e: any) => {
        e.preventDefault();

        console.log(e.target.main_clan.value)
        console.log(e.target.clan_name.value)
        async function send_data() {
            const result = await branch_creation_request(e.target.main_clan.value, e.target.clan_name.value)
            if (result.message) {
                alert(result.message)
                setModal(false)
            } else {
                alert(result.error)

            }
        }
        send_data()
    }
    return (
        <div className={`${modal_open ? 'is-active' : ''} modal`}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Branch Clan Creation</p>
                    <button onClick={() => setModal(false)} className="delete"></button>
                </header>

                <form onSubmit={handle_submit}>
                    <section className="modal-card-body">
                        <div className="content">
                            <h1>Instruction</h1>
                            <ol className='is-flex is-flex-direction-column'>
                                <li>Input Branch Clan name to be used</li>
                                <li>Select the Main Clan</li>
                                <li>The User is automaticatly the officer for the Branch Clan</li>
                                <li>Wait for Admin to Creat clan</li>
                            </ol>
                        </div>

                        <div className="field">
                            <label htmlFor="clan_name" className="label">Branch Clan Name</label>
                            <div className="control">
                                <input id='clan_name' name='clan_name' className="input" type="text" placeholder="Input Branch Clan name to be used" required />
                            </div>
                        </div>
                        <label htmlFor="main_clan" className="label">Main Clan</label>
                        <div className="select">

                            <select id='main_clan' name='main_clan' required>
                                <option disabled>Select Main Clan</option>
                                {clan.map((e: any) => (
                                    <>
                                        <option key={e} value={e}>{e}</option>
                                    </>))}

                            </select>
                        </div>





                    </section>
                    <footer className="modal-card-foot">
                        <button type='submit' className="button is-success">Apply</button>
                        <button onClick={() => setModal(false)} className="button">Cancel</button>
                    </footer>

                </form>
            </div>
        </div>
    )
}
