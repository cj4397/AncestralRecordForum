import React from 'react'
import ClanAPI from '../ClanAPI'

export default function EditClanDetails(props: any) {
    const { modal_open, setModal, clan_name, data, category, refresh, setRefresh } = props
    const { edit_clan_details, edit_clan_details_edit } = ClanAPI()

    const handle_submit = (e: any) => {
        e.preventDefault()
        async function send_data() {
            let result
            if (category == 'edit_edit') {
                result = await edit_clan_details_edit(clan_name, e.target.name.value, e.target.details.value, data.id)
            } else {
                result = await edit_clan_details(clan_name, e.target.name.value, e.target.details.value, e.target.reason.value)
            }




            setRefresh(refresh ? false : true)

            setModal(false)
        }
        send_data()
    }
    return (
        <div className={`${modal_open ? 'is-active' : ''} modal`}>
            <div className="modal-background"></div>
            <div className="modal-card w-100 ">
                <header className="modal-card-head">
                    <p className="modal-card-title">Edit Clan Details</p>
                    <button onClick={() => setModal(false)} className="delete"></button>
                </header>


                <section className="modal-card-body">
                    <form onSubmit={handle_submit}>
                        <div className='content'>
                            <h1 className='has-text-centered'>{data.name}</h1>
                            <p>{data.details}</p>
                        </div>

                        <div className="field">
                            <label htmlFor='name' className="label">Name</label>
                            <div className="control">
                                <input id='name' name='name' className="input is-info" type="text" placeholder="Title" required />
                            </div>
                        </div>

                        <label htmlFor='details' className="label">Details</label>
                        <textarea id='details' name='details' className="textarea is-primary" placeholder="Details" required></textarea>

                        {(category !== 'edit_edit') && (<>
                            <label htmlFor='reason' className="label">Reason</label>
                            <textarea id='reason' name='reason' className="textarea is-primary" placeholder="Explanation" required></textarea>
                        </>)}


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
