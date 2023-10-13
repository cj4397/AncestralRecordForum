'use client'
import React, { useState } from 'react'
import ClanAPI from '../ClanAPI'


export default function AcceptJoinRequest(props: any) {
    const { modal_open, setModal, clan_name, request } = props
    const { accept_join_request } = ClanAPI()
    const [officer, setOfficer] = useState(false)

    const handle_submit = (e: any) => {
        // e.preventDefault();

        async function send_data() {
            let officer = false
            if (e.target.officer.value === 'true') {
                officer = true
            }
            const result = await accept_join_request(clan_name, request.id, officer)
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
                    <p className="modal-card-title">Approval Alert!!!</p>
                    <button onClick={() => setModal(false)} className="delete"></button>
                </header>

                <form onSubmit={handle_submit}>
                    <section className="modal-card-body">

                        <section className="hero is-small is-primary">
                            <div className="hero-body">
                                <p className="title">
                                    <strong><u>{request.user_detail.name}</u></strong> wants to join <strong>{clan_name}</strong>


                                </p>
                            </div>
                        </section>

                        <div className="content ">
                            <h1>{request.user_detail.name}</h1>
                            <h4>Reason</h4>
                            <p>{request.details}</p>
                        </div>


                        <label htmlFor="officer">Let {request.user_detail.name} be an officer?</label>
                        <br />
                        <div className="select">
                            <select id='officer' name='officer' required>
                                <option value={'false'}>false</option>
                                <option value={'true'}>true</option>
                            </select>
                        </div>


                    </section>
                    <footer className="modal-card-foot">
                        <button type='submit' className="button is-success">Accept</button>
                        <button onClick={() => setModal(false)} className="button">Cancel</button>
                    </footer>
                </form>

            </div>
        </div>
    )
}
