import React from 'react'
import AdminAPI from '../AdminAPI'
import { useRouter } from 'next/navigation'

export default function ClanApproval(props: any) {
    const { modal_open, setModal, clan } = props
    const { clan_creation } = AdminAPI()
    const router = useRouter()

    const create_clan = () => {
        async function send_data() {
            const result = await clan_creation(clan.id)
            if (result.message) {
                alert(result.message)
                router.push(window.location.href);
                router.refresh()

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
                    <p className="modal-card-title">Approval Alert!!!</p>
                    <button onClick={() => setModal(false)} className="delete"></button>
                </header>


                <section className="modal-card-body">
                    <section className="hero is-small is-primary">
                        <div className="hero-body">
                            <p className="title">
                                <strong><u>{clan.request.name}</u></strong> Clan Creation
                            </p>
                        </div>
                    </section>

                    <div className="content ">
                        <ol>
                            <li>
                                Admin agreed in the creation of <strong>{clan.request.name} </strong>Clan
                            </li>

                            <li>
                                User <strong>{clan.user_detail.name}</strong> will be the first officer of the clan
                            </li>
                        </ol>


                    </div>









                </section>
                <footer className="modal-card-foot">
                    <button onClick={create_clan} className="button is-success">Create</button>
                    <button onClick={() => setModal(false)} className="button">Cancel</button>
                </footer>


            </div>
        </div>
    )
}
