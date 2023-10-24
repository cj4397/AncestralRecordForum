import React from 'react'
import ClanAPI from '../ClanAPI'

export default function Confirm(props: any) {
    const { modal, setModal, clan_name, mode, mode_id, reload, setReload, type } = props
    const { cancel_clan_history_edit, cancel_family_history_edit, cancel_memory_edit, cancel_family_edit, cancel_partner_edit, cancel_family_delete, cancel_partner_delete, cancel_clan_history_delete, cancel_family_history_delete, cancel_memory_delete, cancel_clan_details_edit } = ClanAPI()

    const cancelation = () => {
        async function send_data() {
            switch (mode) {
                case 'clan_history':
                    const clan_history_result = await cancel_clan_history_edit(clan_name, mode_id)
                    if (clan_history_result.message) {
                        setReload(reload ? false : true)
                        setModal(false)
                    }
                    break;
                case 'family_history':
                    const family_history_result = await cancel_family_history_edit(clan_name, mode_id)
                    if (family_history_result.message) {
                        setReload(reload ? false : true)
                        setModal(false)
                    }
                    break;
                case 'memory_edit':
                    const memory_history_result = await cancel_memory_edit(clan_name, mode_id)
                    if (memory_history_result.message) {
                        setReload(reload ? false : true)
                        setModal(false)
                    }
                    break;
                case 'family_edit':
                    const family_edit_result = await cancel_family_edit(clan_name, mode_id)
                    if (family_edit_result.message) {
                        setReload(reload ? false : true)
                        setModal(false)
                    }
                    break;
                case 'partner_edit':
                    const partner_edit_result = await cancel_partner_edit(clan_name, mode_id)
                    if (partner_edit_result.message) {
                        setReload(reload ? false : true)
                        setModal(false)
                    }

                    break;
                case 'clan_details_edit':
                    const clan_details_edit = await cancel_clan_details_edit(clan_name, mode_id)
                    if (clan_details_edit.message) {
                        setReload(reload ? false : true)
                        setModal(false)
                    }

                    break;
                case 'family_delete':
                    const family_delete_result = await cancel_family_delete(clan_name, mode_id)
                    if (family_delete_result.message) {
                        setReload(reload ? false : true)
                        setModal(false)
                    }

                    break;
                case 'partner_delete':
                    const partner_delete_result = await cancel_partner_delete(clan_name, mode_id)
                    if (partner_delete_result.message) {
                        setReload(reload ? false : true)
                        setModal(false)
                    }

                    break;
                case 'clan_history_delete':
                    const clan_history_delete_result = await cancel_clan_history_delete(clan_name, mode_id)
                    if (clan_history_delete_result.message) {
                        setReload(reload ? false : true)
                        setModal(false)
                    }
                    break;
                case 'family_history_delete':
                    const family_history_delete_result = await cancel_family_history_delete(clan_name, mode_id)
                    if (family_history_delete_result.message) {
                        setReload(reload ? false : true)
                        setModal(false)
                    }
                    break;
                case 'memory_delete':
                    const memory_delete_result = await cancel_memory_delete(clan_name, mode_id)
                    if (memory_delete_result.message) {
                        setReload(reload ? false : true)
                        setModal(false)
                    }
                    break;

            }

        }
        send_data()
    }


    return (
        <div className={`${modal ? 'is-active' : ''} modal`}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Alert!!!</p>
                    <button onClick={() => setModal(false)} className="delete"></button>
                </header>
                <section className="modal-card-body">

                    <section className="hero is-danger">
                        <div className="hero-body">
                            <p className="title">
                                Are you sure?
                            </p>
                            <p className="subtitle">
                                {(type == 'edit') ?
                                    <> You want to cancel the Edit request?</> :
                                    <>You want to cancel the Delete request?</>}

                            </p>
                        </div>
                    </section>

                </section>


                <footer className=" modal-card-foot ">

                    <button onClick={cancelation} className="button is-success">Accept</button>

                    <button onClick={() => setModal(false)} className="button ">cancel</button>

                </footer>


            </div>
        </div >
    )
}
