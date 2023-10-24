import React, { useState } from 'react'
import ClanAPI from '../ClanAPI'

export default function DeleteHistory(props: any) {
    const { modal_open, setModal, clan_name, history, category, refresh, setRefresh } = props
    const { delete_clan_history, delete_family_history, delete_memory } = ClanAPI()


    const delete_history = (e: any) => {
        e.preventDefault();

        async function send_data() {
            switch (category) {
                case 'clan':

                    const clan_result = await delete_clan_history(clan_name, e.target.reason.value, history.id)
                    setRefresh(refresh ? false : true)
                    setModal(false)
                    console.log(clan_result)
                    break;
                case 'family':

                    const family_result = await delete_family_history(clan_name, e.target.reason.value, history.id)
                    setRefresh(refresh ? false : true)
                    setModal(false)
                    console.log(family_result)
                    break;
                case 'memory':

                    const memory_result = await delete_memory(clan_name, e.target.reason.value, history.id)
                    setRefresh(refresh ? false : true)
                    setModal(false)
                    console.log(memory_result)
                    break;
            }


        }
        send_data()
    }

    return (
        <div className={`${modal_open ? 'is-active' : ''} modal`}>
            <div className="modal-background"></div>
            <div className="modal-card ">
                <header className="modal-card-head">
                    <p className="modal-card-title">Delete a History</p>
                    <button onClick={() => setModal(false)} className="delete"></button>
                </header>


                <section className="modal-card-body">

                    <form onSubmit={delete_history}>
                        <div className='content'>
                            <h1 className='has-text-centered'>{history.history.title}</h1>
                            <p>{history.history.details}</p>
                        </div>
                        <label htmlFor='reason' className="label">Reason</label>
                        <textarea id='reason' name='reason' className="textarea is-primary" placeholder="Reason" required></textarea>



                        <footer className="modal-card-foot">

                            <button type='submit' className="button is-danger">Delete</button>

                            <button type='button' onClick={() => setModal(false)} className="button ">Cancel</button>
                        </footer>


                    </form>


                </section>



            </div>
        </div>
    )
}
