import React from 'react'
import ClanAPI from '../ClanAPI'

export default function EditEditHistory(props: any) {
    const { modal_open, setModal, clan_name, history, reload, setReload, category } = props
    const { edit_clan_history_edit, edit_memory_edit, edit_family_history_edit } = ClanAPI()

    const handle_submit = (e: any) => {
        e.preventDefault();

        async function send_data() {

            // console.log(clan_name, history.id, e.target.title.value, e.target.details.value)
            let result
            if (category == 'clan') {
                result = await edit_clan_history_edit(clan_name, history.id, e.target.title.value, e.target.details.value)
            } else if (category == 'family') {
                result = await edit_family_history_edit(clan_name, history.id, e.target.title.value, e.target.details.value)
            } else if (category == 'memory') {
                result = await edit_memory_edit(clan_name, history.id, e.target.title.value, e.target.details.value)
            }

            if (result.message) {
                setReload(reload ? false : true)
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
            <div className="modal-card w-100 ">
                <header className="modal-card-head">
                    <p className="modal-card-title">Edit a History</p>
                    <button onClick={() => setModal(false)} className="delete"></button>
                </header>


                <section className="modal-card-body">
                    <form onSubmit={handle_submit}>
                        <div className='content'>
                            <h1 className='has-text-centered'>{history.history_edit.title}</h1>
                            <p>{history.history_edit.details}</p>
                        </div>

                        <div className="field">
                            <label htmlFor='title' className="label">Title</label>
                            <div className="control">
                                <input id='title' name='title' className="input is-info" type="text" placeholder="Title" required />
                            </div>
                        </div>

                        <label htmlFor='details' className="label">Details</label>
                        <textarea id='details' name='details' className="textarea is-primary" placeholder="Details" required></textarea>



                        <footer className="modal-card-foot">
                            <button type='submit' className="button is-success">Accept</button>
                            <button onClick={() => setModal(false)} className="button">Cancel</button>
                        </footer>
                    </form>
                </section>



            </div>
        </div>
    )
}
