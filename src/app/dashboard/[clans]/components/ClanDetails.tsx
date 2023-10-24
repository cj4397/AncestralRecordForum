"use client"
import React, { useEffect, useState } from 'react'
import ClanAPI from './ClanAPI'
import EditClanDetails from './modals/EditClanDetails'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from '@fortawesome/free-solid-svg-icons';

export default function ClanDetails(props: any) {
    const { clan_name } = props
    const { get_clan_details } = ClanAPI()
    const [clan_details, setClanDetails]: any = useState({})

    const [modal, setModal] = useState(false)
    const [reload, setReload] = useState(false)


    useEffect(() => {
        async function get_data() {
            const result = await get_clan_details(clan_name)
            if (result.details) {
                setClanDetails(result.details)
            }
        }
        get_data()
    }, [reload])

    const clan_details_edit = () => {
        setModal(true)
        console.log(modal)
    }

    return (
        <div className='box'>
            {(clan_details !== "Edit in Process") ?
                <>
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-4by3">
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="media">

                                <div className="media-content has-text-centered">
                                    <p className="title is-4">{clan_details.name}</p>
                                </div>
                            </div>

                            <div className="content">
                                {clan_details.details}
                                <br />
                                <time >{clan_details.created_at}</time>
                            </div>
                        </div>
                    </div>
                    {modal && <EditClanDetails setModal={setModal} modal_open={modal} clan_name={clan_name} data={clan_details} refresh={reload} setRefresh={setReload} />}
                    <footer className="modal-card-foot has-background-white is-flex is-justify-content-flex-end">

                        <button onClick={() => clan_details_edit()} className="button is-info">Edit</button>

                    </footer>
                </> :
                <>
                    <section className="hero is-info">
                        <div className="hero-body">
                            <p className="title">
                                Clan Details is Being Updated
                            </p>

                        </div>
                    </section>
                    <div className='h-100 is-flex is-justify-content-center is-align-items-center'>
                        <FontAwesomeIcon icon={faCog} spin />

                    </div>

                </>
            }



        </div>
    )
}
