import React from 'react'


export default function ClanHistoryChoose(props: any) {
    const { modal_open, setModal, clan_name, history, setEditModal, setDeleteModal } = props


    const edit_history = () => {

        setEditModal(true)
        setModal(false)
    }

    const delete_history = () => {
        setDeleteModal(true)
        setModal(false)
    }

    return (
        <div className={`${modal_open ? 'is-active' : ''} modal`}>
            <div className="modal-background"></div>
            <div className="modal-card ">
                <header className="modal-card-head">
                    <p className="modal-card-title"></p>
                    <button onClick={() => setModal(false)} className="delete"></button>
                </header>


                <section className="modal-card-body">
                    <section className="modal-card-body">

                        <div className='content'>
                            <h1 className='has-text-centered'>{history.history.title}</h1>
                            <p>{history.history.details}</p>
                        </div>




                        <footer className="modal-card-foot">

                            <button onClick={() => edit_history()} className="button is-info">Edit </button>

                            <button onClick={() => delete_history()} className="button is-danger">Delete</button>
                        </footer>




                    </section>
                </section>



            </div>
        </div>
    )
}
