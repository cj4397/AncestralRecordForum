import React from 'react'
import ClanAPI from '../ClanAPI'

export default function EditHistory(props: any) {
    const { modal_open, setModal, clan_name, history, category, refresh, setRefresh } = props
    const { edit_clan_history, edit_memory } = ClanAPI()

    console.log(history)
    const handle_submit = (e: any) => {
        e.preventDefault();

        async function send_data() {

            switch (category) {
                case 'clan':


                    const clan_result = await edit_clan_history(clan_name, history.history.id, e.target.title.value, e.target.details.value, e.target.reason.value)
                    setRefresh(refresh ? false : true)
                    console.log(clan_result)
                    setModal(false)
                    break;

                case 'memory':

                    const memory_result = await edit_memory(clan_name, history.history.id, e.target.title.value, e.target.details.value, e.target.reason.value)
                    setRefresh(refresh ? false : true)
                    console.log(memory_result)
                    setModal(false)
                    break;
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
                            <h1 className='has-text-centered'>{history.history.title}</h1>
                            <p>{history.history.details}</p>
                        </div>

                        <div className="field">
                            <label htmlFor='title' className="label">Title</label>
                            <div className="control">
                                <input id='title' name='title' className="input is-info" type="text" placeholder="Title" required />
                            </div>
                        </div>

                        <label htmlFor='details' className="label">Details</label>
                        <textarea id='details' name='details' className="textarea is-primary" placeholder="Details" required></textarea>

                        <label htmlFor='reason' className="label">Reason</label>
                        <textarea id='reason' name='reason' className="textarea is-primary" placeholder="Explanation" required></textarea>

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
