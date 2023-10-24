import React from 'react'
import ClanAPI from '../ClanAPI'

export default function EditFamilyHistory(props: any) {
    const { modal_open, setModal, clan_name, data, selected, refresh, setRefresh } = props
    const { edit_family_history } = ClanAPI()

    const submit_history = (e: any) => {
        e.preventDefault()
        console.log(clan_name, selected, e.target.title.value, e.target.details.value, e.target.reason.value)
        async function send_data() {
            const result = await edit_family_history(clan_name, selected, e.target.title.value, e.target.details.value, e.target.reason.value)
            if (result.message) {

                setRefresh(refresh ? false : true)
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
            <div className="modal-card ">
                <header className="modal-card-head">
                    <p className="modal-card-title">Edit History</p>
                    <button onClick={() => setModal(false)} className="delete"></button>
                </header>


                <section className="modal-card-body">
                    <form onSubmit={submit_history}>

                        {data.map((e: any) => (
                            <div key={e.id}>
                                {(e.id == selected) &&
                                    <div >
                                        <div className="field">
                                            <label className="label">Title:</label>
                                            <div className="control">
                                                <p>{e.history.title}</p>
                                            </div>
                                        </div>

                                        <div className="field">
                                            <label className="label">Details:</label>
                                            <div className="control">
                                                <p>{e.history.details}</p>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>

                        ))}

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
