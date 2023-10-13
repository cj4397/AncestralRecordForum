import React from 'react'
import ClanAPI from '../ClanAPI'

export default function EditHistory(props: any) {
    const { modal_open, setModal, clan_name, history } = props
    const { edit_history } = ClanAPI()


    console.log(clan_name)
    const handle_submit = (e: any) => {
        // e.preventDefault();

        async function send_data() {


            const result = await edit_history(clan_name, history.history.id, e.target.title.value, e.target.details.value)
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
                                <input id='title' name='title' className="input is-info" type="text" placeholder="Title/Date" required />
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
