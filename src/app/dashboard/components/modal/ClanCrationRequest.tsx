import React from 'react'
import Dashboard_API from '../Dashboard_API'

export default function ClanCrationRequest(props: any) {
    const { modal_open, setModal } = props
    const { clan_creation_request } = Dashboard_API()

    const handle_submit = (e: any) => {
        e.preventDefault();
        async function send_data() {
            const result = await clan_creation_request(e.target.clan_name.value)
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
                    <p className="modal-card-title">Clan Creation</p>
                    <button onClick={() => setModal(false)} className="delete"></button>
                </header>

                <form onSubmit={handle_submit}>
                    <section className="modal-card-body">
                        <div className="content ">
                            <h1>Instruction</h1>
                            <ol className='is-flex is-flex-direction-column'>
                                <li>Input Clan name to be used</li>
                                <li>The User is automaticatly the officer for the Clan</li>
                                <li>Wait for Admin to Creat clan</li>
                            </ol>
                        </div>


                        <div className="field">
                            <label htmlFor="clan_name" className="label">Branch Clan Name</label>
                            <div className="control">
                                <input id='clan_name' name='clan_name' className="input" type="text" placeholder="Input Branch Clan name to be used" required />
                            </div>
                        </div>




                    </section>
                    <footer className="modal-card-foot">
                        <button type='submit' className="button is-success">Apply</button>
                        <button onClick={() => setModal(false)} className="button">Cancel</button>
                    </footer>

                </form>
            </div>
        </div>
    )
}
