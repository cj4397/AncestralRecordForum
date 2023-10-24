'use client'
import React, { useState } from 'react'




export default function TreeChoose(props: any) {
    const { modal, setModal, data, setPersonModal, setPartnerModal, setFamilyModal, setEditPersonModal, setSelectPartnerModal, setSelectCategory, setDeleteFamilyModal, setSelectHistoryModal } = props



    const person = () => {
        setPersonModal(true)
        setModal(false)
    }
    const partner = () => {
        setPartnerModal(true)
        setModal(false)
    }
    const family = () => {
        setFamilyModal(true)
        setModal(false)
    }

    const edit_family = () => {
        setEditPersonModal(true)
        setModal(false)
    }
    const edit_partner = () => {
        setSelectCategory('edit')
        setSelectPartnerModal(true)
    }
    const edit_history = () => {
        setSelectCategory('edit')
        setSelectHistoryModal(true)

    }

    const delete_family = () => {
        setDeleteFamilyModal(true)
        setModal(false)
    }
    const delete_partner = () => {
        setSelectCategory('delete')
        setSelectPartnerModal(true)

    }
    const delete_history = () => {
        setSelectCategory('delete')
        setSelectHistoryModal(true)

    }



    return (
        <div className={`${modal ? 'is-active' : ''} modal`}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title"></p>
                    <button onClick={() => setModal(false)} className="delete"></button>
                </header>
                <section className="modal-card-body">

                    <div>
                        <label className='label'>Name:</label>
                        <p>{data.person.name}</p>
                    </div>

                    <div>
                        <label className='label'>Status:</label>
                        <p>{data.person.status}</p>
                    </div>

                    {(data.partner.length > 0) && <div>
                        <label className='label'>Partner:</label>
                        <ul className='content'>
                            {data.partner.map((e: any) => (
                                <div key={e.id}>
                                    <li >{e.partner}</li>
                                    {(e.children.length > 0) && <ol >

                                        {e.children.map((c: any) => (
                                            <li key={c.id}>
                                                <p >{c.family.person.name}</p>
                                            </li>
                                        ))}
                                    </ol>}

                                </div>))}
                        </ul>
                    </div>}

                    {(data.family_history.length > 0) && <>
                        <label className='label'>Story:</label>

                        {data.family_history.map((e: any) => (

                            <div key={e.id} className='box'>
                                <h2>{e.history.title}</h2>
                                <br />
                                <p>{e.history.details}</p>

                            </div>
                        ))}
                    </>}

                </section>

                <footer className=" has-background-white-ter modal-card-foot is-flex is-flex-direction-column p-3">
                    <div className='is-flex is-justify-content-space-around'>
                        {(data.partner.length > 0) && <button onClick={() => person()} className="button is-success">Register a child </button>}
                        <button onClick={() => partner()} className="button is-success">Register a Partner</button>

                        <button onClick={() => family()} className="button is-success">Record a story</button>
                    </div>

                    <div className='is-flex is-justify-content-space-between pt-3'>
                        <button onClick={() => edit_family()} className="button is-info">Edit</button>

                        {(data.partner.length > 0) && <button onClick={() => edit_partner()} className="button is-info">Edit a Partner</button>}

                        {(data.family_history.length > 0) && <button onClick={() => edit_history()} className="button is-info">Edit a story</button>}

                    </div>

                    <div className='is-flex is-justify-content-space-between pt-3'>
                        <button onClick={() => delete_family()} className="button is-danger">Delete Family</button>

                        {(data.partner.length > 0) && <button onClick={() => delete_partner()} className="button is-danger">Delete a Partner</button>}

                        {(data.family_history.length > 0) && <button onClick={() => delete_history()} className="button is-danger">Delete a story</button>}

                    </div>

                </footer>


            </div>
        </div >
    )
}

