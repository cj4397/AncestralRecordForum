import React from 'react'
import Dashboard_API from '../Dashboard_API'

export default function ClanApplicationModal(props: any) {
    const { modal_open, setModal, clan } = props
    const { join_clan_request } = Dashboard_API()



    const joining_clan = (e: any) => {
        e.preventDefault();
        async function send_data() {
            const response = await join_clan_request(clan.name, e.target.reason.value);
            console.log(response)
            if (response.message) {
                alert(response.message)
                setModal(false)
            } else {
                alert(response.error)
            }

        }
        send_data()
    }



    return (
        <div className={`${modal_open ? 'is-active' : ''} modal`}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Clan Application</p>
                    <button onClick={() => setModal(false)} className="delete"></button>
                </header>
                <form onSubmit={joining_clan}>
                    <section className="modal-card-body">

                        <div className="card">
                            <div className="card-image">

                            </div>

                            <div className="card-content">
                                <div className="media">
                                    <div className="media-left">
                                        <figure className="image is-48x48">
                                            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                                        </figure>
                                    </div>
                                    <div className="media-content">
                                        <p className="title is-4">{clan.name}</p>
                                    </div>
                                </div>

                                <div className="content">
                                    <h4>Clan Details</h4>
                                    {clan.details}

                                </div>
                            </div>
                        </div>
                        <div>

                            <div className="field">
                                <label htmlFor="reason" className="label">Reason</label>
                                <div className="control">
                                    <input id='reason' name='reason' className="input" type="text" placeholder="Reason or Qualification for Joining " required />
                                </div>
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
