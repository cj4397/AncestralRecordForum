import React from 'react'
import ClanAPI from '../ClanAPI'

export default function CreateMemory(props: any) {
    const { modal_open, setModal, clan_name } = props
    const { record_memory } = ClanAPI()


    console.log(clan_name)
    const handle_submit = (e: any) => {
        // e.preventDefault();

        async function send_data() {


            const result = await record_memory(clan_name, e.target.title.value, e.target.details.value)
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
                    <p className="modal-card-title">Record a History</p>
                    <button onClick={() => setModal(false)} className="delete"></button>
                </header>

                <form onSubmit={handle_submit}>
                    <section className="modal-card-body">

                        <div className="field">
                            <label htmlFor='title' className="label">Title</label>
                            <div className="control">
                                <input id='title' name='title' className="input is-info" type="text" placeholder="Title/Date" required />
                            </div>
                        </div>
                        <label htmlFor='details' className="label">Details</label>
                        <textarea id='details' name='details' className="textarea is-primary" placeholder="Details" required></textarea>

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
