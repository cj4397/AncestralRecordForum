'use client'
import React, { useState, useEffect } from 'react'
import ClanAPI from '../ClanAPI'

export default function RegisterPerson(props: any) {
    const { modal, setModal, clan_name } = props
    const [person, setPerson] = useState([])
    const [partner, setPartner] = useState(1)
    const [partner_confirm, setConfirm] = useState(0)

    const [next, setNext] = useState('person')


    const partner_list: any[] = [];

    if (partner_list.length !== partner) {
        for (let i = 0; i < partner; i++) {
            partner_list.push(
                <div key={i}>
                    <Partner
                        clan_name={clan_name} person={person} partner_confirm={partner_confirm} setConfirm={setConfirm}
                    ></Partner>
                    <hr className='has-background-info' />
                </div>
            )
        };
    }

    const add_partner = () => {
        setPartner(partner + 1)

    }
    const minus_partner = () => {
        setPartner(partner - 1)

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

                    {(next === 'person') && <Person setNext={setNext} clan_name={clan_name} setModal={setModal} setPerson={setPerson} ></Person>}

                    {(next === 'partner') &&
                        <>
                            <div className="content">
                                <h1>Instruction</h1>
                                <ul className='is-flex is-flex-direction-column'>
                                    <li>If person had multiple partner, press add partner button to the exact  number of partners the person had. </li>
                                    <li>If person had no partner, then press the remove partner</li>
                                    <li>Family Story is about the Unique experiences that particular person/family experience like why he/they had to migrated, how he/they lived or died, what they achieved and others </li>
                                </ul>
                            </div>
                            <div>

                                <button type='button' onClick={() => add_partner()} > Add a Partner</button>
                                <button type='button' onClick={() => minus_partner()}> Remove a Partner</button>
                            </div>
                            {partner_list}
                        </>
                    }

                    {(next === 'family') && <Family setNext={setNext} clan_name={clan_name} setModal={setModal}  ></Family>}

                </section>
                {(partner == 0) &&
                    <footer className="modal-card-foot">
                        <button onClick={() => setModal(false)} className="button is-success">Finish</button>
                    </footer>
                }

                {(partner == partner_confirm && partner !== 0) &&
                    <footer className="modal-card-foot">
                        <button onClick={() => setNext('family')} className="button is-success">Next</button>
                    </footer>
                }




            </div>
        </div >
    )
}

function Person(props: any) {
    const { clan_name, setNext, setModal, setPerson } = props
    const { register_person, get_parent } = ClanAPI()
    const [parent, setParent] = useState(true)
    const [choose, setChoose] = useState([])


    useEffect(() => {
        async function get_data() {
            const result = await get_parent(clan_name)
            if (result.family) {
                if (result.family.length <= 0) {

                    setParent(false)

                }

            } else {
                alert(result.error)
            }
            console.log(result.family)
        }
        get_data()
    }, [])

    const handle_submit = (e: any) => {
        e.preventDefault();
        async function send_data() {
            if (parent) {
                const result = await register_person(clan_name, e.target.name.value, e.target.status.value, e.target.parent.value)
                if (result.message) {
                    alert(result.message)

                } else {
                    alert(result.error)
                    setParent(false)
                }
            } else {

                const result = await register_person(clan_name, e.target.name.value, e.target.status.value)
                if (result.message) {
                    setPerson(result.person)
                    alert(result.message)

                } else {
                    alert(result.error)
                    setParent(false)
                }
            }


        }
        send_data()
        setNext('partner')
    }
    return (

        <form onSubmit={handle_submit}>
            <div className="content">
                <h1>Instruction</h1>
                <ol className='is-flex is-flex-direction-column'>
                    <li>Fill up the details required</li>
                    <li>Parent selection is based on the data that is already registered so its adviced to fill up info from the accestor to present</li>
                    <li>If person had multiple partner and had a child on them, indicate that partner  as the child's parent not the latest or last parner as its parent</li>
                    <li>Family Story is about the Unique experiences that particular person/family experience like why he/they had to migrated, how he/they lived or died, what they achieved and others </li>
                </ol>
            </div>


            <div className="field">
                <label className="label">Name(before Marriage)</label>
                <div className="control">
                    <input name='name' className="input" type="text" placeholder="First Name Middle initial Last name " required />
                </div>
            </div>

            <div className="field">
                <label className="label">Status</label>
                <div className="control">
                    <div className="select">
                        <select name='status' required>
                            <option>Unknown</option>
                            <option>Deceased</option>
                            <option>Alive</option>
                        </select>
                    </div>
                </div>
            </div>

            {parent && <div className="field">
                <label className="label">Parent</label>
                <div className="control">
                    <div className="select">
                        <select name='parent'>
                            <option>Select dropdown</option>
                            <option>With options</option>
                        </select>
                    </div>
                </div>
            </div>}


            <footer className="modal-card-foot">
                <button type='submit' className="button is-success">Next</button>
                <button onClick={() => setModal(false)} className="button">Cancel</button>
            </footer>

        </form>

    )
}

function Partner(props: any) {
    const { clan_name, person } = props
    const [register, setRegister] = useState(true)
    const [mistake, setMistake] = useState(false)


    const { register_partner } = ClanAPI()

    const handle_submit = (e: any) => {
        e.preventDefault();
        async function send_data() {
            const result = await register_partner(clan_name, e.target.name, e.target.status, e.target.child.value, person.id)
            if (result.message) {
                setRegister(false)
            } else {
                setMistake(true)
            }
        }
        send_data()
    }


    return (
        <div className='box'>
            <form onSubmit={handle_submit}>

                <label className="label">Partner's Name before Marriage</label>
                <div className="control ">
                    <input name='name' className="input " type="text" placeholder="Partner's Original Name" required />
                </div>

                <div className="field">
                    <label className="label">Partner Status</label>
                    <div className="control">
                        <div className="select" >
                            <select name='status' required>
                                <option>Unknown</option>
                                <option>Deceased</option>
                                <option>Divorced</option>
                                <option>Alive</option>
                            </select>
                        </div>
                    </div>
                </div>


                <div className="control">
                    <label className="label">Had a Child with Partner?</label>
                    <label className="radio">
                        <input type="radio" name="child" required />
                        Yes
                    </label>
                    <label className="radio">
                        <input type="radio" name="child" />
                        No
                    </label>
                </div>

                {register && <footer className="modal-card-foot">
                    <button type='submit' className="button is-success">Accept</button>
                </footer>}
                {mistake && <footer className="modal-card-foot">
                    <p>Error</p>
                </footer>}


            </form>
        </div>

    )
}

function Family(props: any) {
    return (
        <div className="field">
            <label className="label">Story About</label>
            <div className="control ">
                <input className="input" type="text" placeholder="About" />
            </div>
            <label className="label">Details</label>
            <div className="control">
                <textarea className="textarea" placeholder="Details"></textarea>
            </div>
        </div>
    )

}