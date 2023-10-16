import React, { useEffect, useState } from 'react'
import ClanAPI from '../ClanAPI'

export default function RegisterPerson(props: any) {
    const { modal, setModal, clan_name, data } = props
    const { register_person, get_parent } = ClanAPI()



    // useEffect(() => {
    //     async function get_data() {
    //         const result = await get_parent(clan_name)
    //         if (result.family && result.family.length > 0) {
    //             setParent(result.family)
    //         }
    //     }
    //     get_data()
    // }, [])

    const handle_submit = (e: any) => {
        // e.preventDefault();

        async function send_data() {


            const result = await register_person(clan_name, e.target.name.value, e.target.status.value, e.target.parent.value, data.id)
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
        <div className={`${modal ? 'is-active' : ''} modal`}>
            <div className="modal-background"></div>
            <div className="modal-card ">
                <header className="modal-card-head">
                    <p className="modal-card-title">Register a Person</p>
                    <button onClick={() => setModal(false)} className="delete"></button>
                </header>


                <section className="modal-card-body">
                    <form onSubmit={handle_submit}>

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

                        <div className="field">
                            <label className="label">Parent</label>
                            <div className="control">
                                <div className="select">
                                    <select name='parent' required>
                                        {data.partner.map((e: any) => (
                                            <>
                                                <option value={e.id}><p key={e.id}>{e.partner}</p></option>
                                            </>
                                        ))}

                                    </select>
                                </div>
                            </div>
                        </div>



                        <footer className="modal-card-foot">
                            <button type='submit' className="button is-success">Accept</button>
                            <button onClick={() => setModal(false)} className="button">Cancel</button>
                        </footer>
                    </form>


                </section >



            </div >
        </div >
    )
}
