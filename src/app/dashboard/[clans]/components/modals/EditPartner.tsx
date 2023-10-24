import React from 'react'
import ClanAPI from '../ClanAPI'

export default function EditPartner(props: any) {
    const { modal_open, setModal, clan_name, data, selected, refresh, setRefresh } = props
    const { edit_partner } = ClanAPI()


    const submit_partner = (e: any) => {
        e.preventDefault()
        console.log(e.target.name.value, e.target.status.value, e.target.reason.value, selected)
        async function send_data() {
            const result = await edit_partner(clan_name, e.target.name.value, e.target.status.value, e.target.reason.value, selected)
            if (result.message) {

                setRefresh(refresh ? false : true)
                setModal(false)
            } else {
                alert(result.error)
            }
            console.log(result)
        }
        send_data()
    }
    return (
        <div className={`${modal_open ? 'is-active' : ''} modal`}>
            <div className="modal-background"></div>
            <div className="modal-card ">
                <header className="modal-card-head">
                    <p className="modal-card-title">Edit</p>
                    <button onClick={() => setModal(false)} className="delete"></button>
                </header>

                <form onSubmit={submit_partner}>
                    <section className="modal-card-body">

                        {data.map((e: any) => (
                            <div key={e.id}>
                                {(e.id == selected) &&
                                    <div >
                                        <div className="field">
                                            <label className="label">Name:</label>
                                            <div className="control">
                                                <p>{e.partner}</p>
                                            </div>
                                        </div>

                                        <div className="field">
                                            <label className="label">Status</label>
                                            <div className="control">
                                                <p>{e.status}</p>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>

                        ))}

                        <div className="field">
                            <label className="label">Name</label>
                            <div className="control">
                                <input name='name' className="input" type="text" placeholder="First Name Middle initial Last name " required />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Status</label>
                            <div className="control">
                                <div className="select">
                                    <select name='status' required>
                                        <option>Unknown</option>
                                        <option>Deceased</option>
                                        <option>Alive</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <label htmlFor='reason' className="label">Reason</label>
                        <textarea id='reason' name='reason' className="textarea is-primary" placeholder="Reason" required></textarea>

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
