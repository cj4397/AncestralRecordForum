'use client'
import React, { useState } from 'react'
import FamilyTree from '../components/tree/FamilyTree'
import RegisterPerson from '../components/modals/RegisterPerson'

export default function Tree({ params }: any) {
    const [modal, setModal] = useState(false)
    return (
        <div> Tree {params.clans}
            <div className='is-flex is-justify-content-space-around '>
                <div className='is-flex'>


                    <button onClick={() => setModal(true)} className="button is-success is-large mx-5">Register a Person</button>
                </div>
                {modal && <RegisterPerson setModal={setModal} modal={modal} clan_name={params.clans} />}


            </div>
            <FamilyTree height={600} width={1280} />
        </div>
    )
}
