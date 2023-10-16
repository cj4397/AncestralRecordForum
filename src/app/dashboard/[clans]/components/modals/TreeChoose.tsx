'use client'
import React, { useState } from 'react'
import ClanAPI from '../ClanAPI'



export default function TreeChoose(props: any) {
    const { modal, setModal, data, setPersonModal, setPartnerModal, setFamilyModal } = props

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

    return (
        <div className={`${modal ? 'is-active' : ''} modal`}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Register a Person</p>
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
                        <ul>
                            {data.partner.map((e: any) => (
                                <div key={e.id}>
                                    <li >{e.partner}</li>
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



                    <footer className="modal-card-foot">
                        {(data.partner.length > 0) && <button onClick={() => person()} className="button is-success">Register a child </button>}
                        <button onClick={() => partner()} className="button is-success">Register a Partner</button>

                        <button onClick={() => family()} className="button is-success">Record a story</button>
                    </footer>




                </section>





            </div>
        </div >
    )
}

