import React from 'react'
import ClanAPI from '../ClanAPI'

export default function FamilyStory(props: any) {
    const { modal, setModal, clan_name, data } = props
    const { record_family_story } = ClanAPI()



    const handle_submit = (e: any) => {
        // e.preventDefault();

        async function send_data() {

            const result = await record_family_story(clan_name, e.target.title.value, e.target.details.value, data.id)
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
                    <p className="modal-card-title">Record a History</p>
                    <button onClick={() => setModal(false)} className="delete"></button>
                </header>


                <section className="modal-card-body">
                    <form onSubmit={handle_submit}>

                        <div className="field">
                            <label className="label">Story About</label>
                            <div className="control ">
                                <input name='title' className="input" type="text" placeholder="About" />
                            </div>
                            <label className="label">Details</label>
                            <div className="control">
                                <textarea name='details' className="textarea" placeholder="Details"></textarea>
                            </div>
                        </div>

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
