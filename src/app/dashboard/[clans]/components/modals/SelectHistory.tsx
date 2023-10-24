'use client'
import React from 'react'

export default function SelectHistory(props: any) {
    const { modal_open, setModal, data, selection, closeModal, setEditHistoryModal, setDeleteHistoryModal, category } = props
    console.log(data)
    const selected = (e: any) => {
        e.preventDefault();
        selection(e.target.history.value)
        console.log(e.target.history.value)

        closeModal(false)
        if (category == 'edit') {
            setEditHistoryModal(true)
        } else if (category == 'delete') {
            setDeleteHistoryModal(true)
        }

        setModal(false)
    }
    return (
        <div className={`${modal_open ? 'is-active' : ''} modal`}>
            <div className="modal-background"></div>
            <div className="modal-card ">
                <header className="modal-card-head">
                    <p className="modal-card-title">Select a History</p>
                    <button onClick={() => setModal(false)} className="delete"></button>
                </header>

                <form onSubmit={selected}>
                    <section className="modal-card-body">

                        <div className="field">
                            <label className="label">History Selection</label>
                            <div className="control">
                                <div className="select" >
                                    <select name='history' required>
                                        {data.map((e: any) => (
                                            <option key={e.id} value={e.history.id}>{e.history.title}</option>
                                        ))}


                                    </select>
                                </div>
                            </div>
                        </div>




                    </section>
                    <footer className="modal-card-foot">

                        <button type='submit' className="button is-primary">Accept</button>

                        <button type='button' onClick={() => setModal(false)} className="button ">Cancel</button>
                    </footer>

                </form>


            </div>
        </div>
    )
}
