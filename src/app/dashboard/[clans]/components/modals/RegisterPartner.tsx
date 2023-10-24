import React from 'react'
import ClanAPI from '../ClanAPI'

export default function RegisterPartner(props: any) {
    const { modal, setModal, clan_name, data, refresh, setRefresh } = props
    const { register_partner } = ClanAPI()


    const handle_submit = (e: any) => {
        e.preventDefault();

        let child = false
        if (e.target.child.value === 'true') {
            child = true
        }

        async function send_data() {


            const result = await register_partner(clan_name, e.target.name.value, e.target.status.value, child, data.person.id)
            if (result.message) {
                alert(result.message)
                setRefresh(refresh ? false : true)
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
            <div className="modal-card  ">
                <header className="modal-card-head">
                    <p className="modal-card-title">Register a Partner</p>
                    <button onClick={() => setModal(false)} className="delete"></button>
                </header>


                <section className="modal-card-body">
                    <form onSubmit={handle_submit}>

                        <label className="label">Partner's Name before Marriage</label>
                        <div className="control ">
                            <input name='name' className="input " type="text" placeholder="Partner's Original Name" required />
                        </div>

                        <div className="field">
                            <label className="label">Partner Status</label>
                            <div className="control">
                                <div className="select" >
                                    <select name='status' required>
                                        <option>Unknown</option>
                                        <option>Deceased</option>
                                        <option>Divorced</option>
                                        <option>Alive</option>
                                    </select>
                                </div>
                            </div>
                        </div>


                        <label className="checkbox">
                            <input name='child' value={"true"} type="checkbox" />
                            Had a child
                        </label>


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
