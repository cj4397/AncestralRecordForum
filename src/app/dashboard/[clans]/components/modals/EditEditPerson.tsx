import React from 'react'
import ClanAPI from '../ClanAPI'

export default function EditEditPerson(props: any) {
    const { modal_open, setModal, clan_name, data, choosen, refresh, setRefresh } = props
    const { edit_family_edit, edit_partner_edit } = ClanAPI()

    console.log(data)

    const edit_person = (e: any) => {
        e.preventDefault()
        console.log(e.target.name.value, e.target.status.value)
        async function send_data() {
            let result
            if (choosen == 'family') {
                result = await edit_family_edit(clan_name, e.target.name.value, e.target.status.value, data.id)
            } else if (choosen == 'partner') {
                result = await edit_partner_edit(clan_name, e.target.name.value, e.target.status.value, data.id)
            }

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
                    <p className="modal-card-title">Edit</p>
                    <button onClick={() => setModal(false)} className="delete"></button>
                </header>

                <form onSubmit={edit_person}>
                    <section className="modal-card-body">

                        <div className="field">
                            <label className="label">Name:</label>
                            <div className="control">

                                <p>{data.name}</p>


                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Status</label>
                            <div className="control">

                                <p>{data.status}</p>


                            </div>
                        </div>



                        <hr />
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


                        <footer className="modal-card-foot">
                            <button type='submit' className="button is-success">Accept</button>
                            <button onClick={() => setModal(false)} className="button">Cancel</button>
                        </footer>
                    </section>

                </form>


            </div>
        </div>
    )
}
