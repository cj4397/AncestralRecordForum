import React from 'react'
import ClanAPI from '../ClanAPI'

export default function DeletePartner(props: any) {
    const { modal, setModal, clan_name, data, selected, refresh, setRefresh } = props
    const { delete_partner } = ClanAPI()


    const delete_history = (e: any) => {
        e.preventDefault();
        // console.log(clan_name, e.target.reason.value, selected)
        async function send_data() {
            const result = await delete_partner(clan_name, e.target.reason.value, selected)
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
        <div className={`${modal ? 'is-active' : ''} modal`}>
            <div className="modal-background"></div>
            <div className="modal-card ">
                <header className="modal-card-head">
                    <p className="modal-card-title">Delete Partner</p>
                    <button onClick={() => setModal(false)} className="delete"></button>
                </header>

                <form onSubmit={delete_history}>
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
