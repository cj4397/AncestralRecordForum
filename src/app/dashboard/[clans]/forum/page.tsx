'use client'
import React, { useEffect, useState } from 'react'
import { faShare, faComment } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ClanAPI from '../components/ClanAPI'
import EditEditHistory from '../components/modals/EditEditHistory'
import Confirm from '../components/modals/Confirm'
import EditEditPerson from '../components/modals/EditEditPerson'

import EditClanDetails from '../components/modals/EditClanDetails'



export default function Page({ params }: any) {
    const clan_name = params.clans.split('%20').join(' ')
    const { get_edits, post_comment, accept_clan_history_edit, accept_memory_history_edit, accept_family_history_edit, clan_details_comment, family_comment, partner_comment, delete_family_comment, delete_partner_comment, delete_clan_history_comment, delete_family_history_comment, delete_memory_comment, accept_family_edit, accept_family_delete, accept_partner_edit, accept_clan_details_edit, accept_partner_delete, accept_family_history_delete, accept_clan_history_delete, accept_memory_delete } = ClanAPI()
    const [clan_history, setClanHistory] = useState([])
    const [family_history, setFamilyHistory] = useState([])
    const [memory, setmemory] = useState([])
    const [family, setFamily] = useState([])
    const [partner, setPartner] = useState([])

    const [clan_history_delete, setClanHistoryDelete] = useState([])
    const [family_history_delete, setFamilyHistoryDelete] = useState([])
    const [memory_delete, setmemoryDelete] = useState([])
    const [family_delete, setFamilyDelete] = useState([])
    const [partner_delete, setPartnerDelete] = useState([])

    const [details, setDetails] = useState([])

    const [reload, setReload] = useState(false)

    const [history_modal, setHistoryModal] = useState(false)
    const [category, setCategory]: any = useState('')
    const [history_data, setHistoryData] = useState({})
    const [cancel_modal, setCancelModal] = useState(false)
    const [mode, setMode] = useState('')
    const [mode_id, setModeID]: any = useState()
    const [type, setType] = useState('')

    const [person_modal, setPersonModal] = useState(false)
    const [clan_details_modal, setClanDetailsModal] = useState(false)

    useEffect(() => {
        async function get_data() {
            const result = await get_edits(clan_name)
            if (!result.error) {
                setClanHistory(result.clan_history)
                setFamilyHistory(result.family_history)
                setmemory(result.memory)
                setFamily(result.family)
                setPartner(result.partner)
                setDetails(result.details)

                setClanHistoryDelete(result.clan_history_delete)
                setFamilyHistoryDelete(result.family_history_delete)
                setmemoryDelete(result.memory_delete)
                setFamilyDelete(result.family_delete)
                setPartnerDelete(result.partner_delete)
            }
        }

        get_data()
    }, [reload])


    // #setdata for modals
    // #edits

    const clan_edit = (data: any) => {
        setCategory('clan')
        setHistoryData(data)
        setHistoryModal(true)
        console.log(data)
    }

    const memory_edit = (data: any) => {
        setCategory('memory')
        setHistoryData(data)
        setHistoryModal(true)
        console.log(data)
    }

    const family_history_edit = (data: any) => {
        setCategory('family')
        setHistoryData(data)
        setHistoryModal(true)
        console.log(data)
    }

    const family_edit = (data: any) => {
        setCategory('family')
        setHistoryData(data)
        setPersonModal(true)
        console.log(data)
    }

    const partner_edit = (data: any) => {
        setCategory('partner')
        setHistoryData(data)
        setPersonModal(true)
        console.log(data)
    }

    const clan_details_edit = (data: any) => {
        setCategory('edit_edit')
        setHistoryData(data)
        setClanDetailsModal(true)
        console.log(data)
    }



    // #Cancel section
    const clan_cancel = (data: any) => {
        setMode('clan_history')
        setModeID(data.id)
        setType('edit')
        setCancelModal(true)
        console.log(data)
    }

    const family_history_cancel = (data: any) => {
        setMode('family_history')
        setModeID(data.id)
        setType('edit')
        setCancelModal(true)
        console.log(data)
    }

    const memory_cancel = (data: any) => {
        setMode('memory_edit')
        setModeID(data.id)
        setType('edit')
        setCancelModal(true)
        console.log(data)
    }

    const family_cancel = (data: any) => {
        setMode('family_edit')
        setModeID(data.id)
        setType('edit')
        setCancelModal(true)
        console.log(data)
    }

    const partner_cancel = (data: any) => {
        setMode('partner_edit')
        setModeID(data.id)
        setType('edit')
        setCancelModal(true)
        console.log(data)
    }

    const clan_details_cancel = (data: any) => {
        setMode('clan_details_edit')
        setModeID(data.id)
        setType('edit')
        setCancelModal(true)
        console.log(data)
    }

    const family_delete_cancel = (data: any) => {
        setMode('family_delete')
        setModeID(data.id)
        setType('delete')
        setCancelModal(true)
        console.log(data)
    }

    const partner_delete_cancel = (data: any) => {
        setMode('partner_delete')
        setModeID(data.id)
        setType('delete')
        setCancelModal(true)
        console.log(data)
    }

    const family_history_delete_cancel = (data: any) => {
        setMode('family_history_delete')
        setModeID(data.id)
        setType('delete')
        setCancelModal(true)
        console.log(data)
    }

    const clan_history_delete_cancel = (data: any) => {
        setMode('clan_history_delete')
        setModeID(data.id)
        setType('delete')
        setCancelModal(true)
        console.log(data)
    }

    const memory_delete_cancel = (data: any) => {
        setMode('memory_delete')
        setModeID(data.id)
        setType('delete')
        setCancelModal(true)
        console.log(data)
    }

    // #accept Edits section
    const clan_history_accept = (id: number) => {
        async function send_data() {
            const result = await accept_clan_history_edit(clan_name, id)
            console.log(result)
        }
        send_data()
        setReload(reload ? false : true)
    }

    const memory_history_accept = (id: number) => {
        async function send_data() {
            const result = await accept_memory_history_edit(clan_name, id)
            console.log(result)
        }
        send_data()
        setReload(reload ? false : true)
    }

    const family_history_accept = (id: number) => {
        console.log(clan_name, id)
        async function send_data() {

            const result = await accept_family_history_edit(clan_name, id)
            console.log(result)
        }
        send_data()
        setReload(reload ? false : true)
    }

    const family_accept = (id: number) => {
        console.log(clan_name, id)
        async function send_data() {

            const result = await accept_family_edit(clan_name, id)
            console.log(result)
        }
        send_data()
        setReload(reload ? false : true)
    }

    const partner_accept = (id: number) => {
        console.log(clan_name, id)
        async function send_data() {

            const result = await accept_partner_edit(clan_name, id)
            console.log(result)
        }
        send_data()
        setReload(reload ? false : true)
    }

    const clan_details_accept = (id: number) => {
        console.log(clan_name, id)
        async function send_data() {

            const result = await accept_clan_details_edit(clan_name, id)
            console.log(result)
        }
        send_data()
        setReload(reload ? false : true)
    }

    // #accept Delete
    const family_delete_accept = (id: number) => {
        console.log(clan_name, id)
        async function send_data() {

            const result = await accept_family_delete(clan_name, id)
            console.log(result)
        }
        send_data()
        setReload(reload ? false : true)
    }

    const partner_delete_accept = (id: number) => {
        console.log(clan_name, id)
        async function send_data() {

            const result = await accept_partner_delete(clan_name, id)
            console.log(result)
        }
        send_data()
        setReload(reload ? false : true)
    }

    const family_history_delete_accept = (id: number) => {
        console.log(clan_name, id)
        async function send_data() {

            const result = await accept_family_history_delete(clan_name, id)
            console.log(result)
        }
        send_data()
        setReload(reload ? false : true)
    }

    const clan_history_delete_accept = (id: number) => {
        console.log(clan_name, id)
        async function send_data() {

            const result = await accept_clan_history_delete(clan_name, id)
            console.log(result)
        }
        send_data()
        setReload(reload ? false : true)
    }

    const memory_delete_accept = (id: number) => {
        console.log(clan_name, id)
        async function send_data() {

            const result = await accept_memory_delete(clan_name, id)
            console.log(result)
        }
        send_data()
        setReload(reload ? false : true)
    }

    // #comment section

    const clan_handle_submit = (e: any) => {
        e.preventDefault();
        console.log(clan_name, e.target.clan_edit.value, e.target.clan_details.value)
        async function send_data() {
            const result = await post_comment(clan_name, e.target.clan_edit.value, e.target.clan_details.value)
        }
        send_data()
        setReload(reload ? false : true)
        e.target.clan_details.value = ''
    }

    const memory_handle_submit = (e: any) => {
        e.preventDefault();
        console.log(clan_name, e.target.memory_edit.value, e.target.memory_details.value)
        async function send_data() {
            const result = await post_comment(clan_name, e.target.memory_edit.value, e.target.memory_details.value)
        }
        send_data()
        setReload(reload ? false : true)
        e.target.memory_details.value = ''
    }

    const family_history_handle_submit = (e: any) => {
        e.preventDefault();
        console.log(clan_name, e.target.family_history_edit.value, e.target.family_history_details.value)
        async function send_data() {
            const result = await post_comment(clan_name, e.target.family_history_edit.value, e.target.family_history_details.value)
        }
        send_data()
        setReload(reload ? false : true)
        e.target.family_history_details.value = ''
    }

    const family_handle_submit = (e: any) => {
        e.preventDefault();
        console.log(clan_name, e.target.family_edit.value, e.target.family_details.value)
        async function send_data() {
            const result = await family_comment(clan_name, e.target.family_edit.value, e.target.family_details.value)
        }
        send_data()
        setReload(reload ? false : true)
        e.target.family_details.value = ''
    }

    const partner_handle_submit = (e: any) => {
        e.preventDefault();
        console.log(clan_name, e.target.partner_edit.value, e.target.partner_details.value)
        async function send_data() {
            const result = await partner_comment(clan_name, e.target.partner_edit.value, e.target.partner_details.value)
        }
        send_data()
        setReload(reload ? false : true)
        e.target.partner_details.value = ''
    }

    const clan_details_handle_submit = (e: any) => {
        e.preventDefault();
        console.log(clan_name, e.target.clan_details_edit.value, e.target.clan_details_details.value)
        async function send_data() {
            const result = await clan_details_comment(clan_name, e.target.clan_details_edit.value, e.target.clan_details_details.value)
        }
        send_data()
        setReload(reload ? false : true)
        e.target.clan_details_details.value = ''
    }

    const family_delete_handle_submit = (e: any) => {
        e.preventDefault();

        async function send_data() {
            const result = await delete_family_comment(clan_name, e.target.family_delete_edit.value, e.target.family_delete_details.value)
        }
        send_data()
        setReload(reload ? false : true)
        e.target.family_delete_details.value = ''
    }

    const partner_delete_handle_submit = (e: any) => {
        e.preventDefault();

        async function send_data() {
            const result = await delete_partner_comment(clan_name, e.target.partner_delete_edit.value, e.target.partner_delete_details.value)
        }
        send_data()
        setReload(reload ? false : true)
        e.target.partner_delete_details.value = ''
    }

    const family_history_delete_handle_submit = (e: any) => {
        e.preventDefault();

        async function send_data() {
            const result = await delete_family_history_comment(clan_name, e.target.family_history_delete_edit.value, e.target.family_history_delete_details.value)
        }
        send_data()
        setReload(reload ? false : true)
        e.target.family_history_delete_details.value = ''
    }

    const clan_history_delete_handle_submit = (e: any) => {
        e.preventDefault();

        async function send_data() {
            const result = await delete_clan_history_comment(clan_name, e.target.clan_history_delete_edit.value, e.target.clan_history_delete_details.value)
        }
        send_data()
        setReload(reload ? false : true)
        e.target.clan_history_delete_details.value = ''
    }

    const memory_delete_handle_submit = (e: any) => {
        e.preventDefault();

        async function send_data() {
            const result = await delete_memory_comment(clan_name, e.target.memory_delete_edit.value, e.target.memory_delete_details.value)
        }
        send_data()
        setReload(reload ? false : true)
        e.target.memory_delete_details.value = ''
    }

    return (
        <div>
            <h1 className='is-size-1 has-text-centered'>{clan_name} Forum page</h1>
            <div>
                Edits
                <div className='container'>

                    Clan History Edits

                    {(clan_history.length > 0 && (<div className='box'>
                        {clan_history.map((e: any) => (
                            <div key={e.id} >
                                <div>
                                    <article className="media">
                                        <div className="media-content">
                                            <div className="content">
                                                <p>
                                                    <strong>{e.history.title}</strong>
                                                    <br />
                                                    {e.history.details}


                                                </p>
                                            </div>

                                            <article className="media">
                                                <figure className="media-left">
                                                    <FontAwesomeIcon className='image is-48x48' icon={faShare} flip='vertical' />
                                                </figure>
                                                <div className="media-content">
                                                    <div className="content">
                                                        <p>
                                                            <strong>{e.history_edit.title}</strong>
                                                            <br />
                                                            {e.history_edit.details}
                                                        </p>
                                                        <hr />
                                                        <p>
                                                            <strong>Reason</strong>
                                                            <br />
                                                            {e.reason}
                                                        </p>

                                                        <p className='has-text-right'> <strong>By:</strong> {e.user_detail.name}</p>
                                                    </div>
                                                    {(e.history_edit.comment.length > 0) && (<>
                                                        {e.history_edit.comment.map((c: any) => (
                                                            <article key={c.id} className="media">
                                                                <figure className="media-left">
                                                                    <FontAwesomeIcon className='image is-48x48' icon={faComment} flip='horizontal' />
                                                                </figure>
                                                                <div className="media-content">
                                                                    <div className="content">
                                                                        <p>
                                                                            <strong>{c.user_detail.name}</strong>
                                                                            <br />
                                                                            {c.details}


                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </article>
                                                        ))}
                                                    </>)}


                                                </div>
                                            </article>
                                        </div>
                                    </article>
                                    <article className="media">
                                        <figure className="media-left">
                                            <FontAwesomeIcon className='image is-48x48' icon={faComment} flip='horizontal' />
                                        </figure>
                                        <div className="media-content">
                                            <form onSubmit={clan_handle_submit}>
                                                <div className="field">
                                                    <p className="control">
                                                        <textarea name='clan_details' className="textarea is-primary" placeholder="Add a comment, corrections or additional details" required></textarea>
                                                    </p>
                                                </div>
                                                <div className="field">
                                                    <p className="control">
                                                        <button name='clan_edit' value={e.history_edit.id} type='submit' className="button">Post comment</button>
                                                    </p>
                                                </div>
                                            </form>
                                        </div>
                                    </article>
                                </div>
                                <footer className="modal-card-foot has-background-white is-flex is-justify-content-flex-end">
                                    <button onClick={() => clan_history_accept(e.id)} className="button is-success">Accept</button>
                                    <button onClick={() => clan_edit(e)} className="button is-info">Edit</button>
                                    <button onClick={() => clan_cancel(e)} className="button ">Cancel Edit</button>
                                </footer>
                            </div>))}


                    </div>))}

                    {history_modal && <EditEditHistory setModal={setHistoryModal} modal_open={history_modal} clan_name={clan_name} history={history_data} reload={reload} setReload={setReload} category={category} />}

                    {cancel_modal && <Confirm setModal={setCancelModal} modal={cancel_modal} clan_name={clan_name} mode={mode} mode_id={mode_id} reload={reload} setReload={setReload} type={type} />}

                    <hr />

                    Memory Edits
                    {(memory.length > 0 && (<div className='box'>
                        {memory.map((e: any) => (
                            <div key={e.id} >
                                <div>
                                    <article className="media">
                                        <div className="media-content">
                                            <div className="content">
                                                <p>
                                                    <strong>{e.history.title}</strong>
                                                    <br />
                                                    {e.history.details}


                                                </p>
                                            </div>

                                            <article className="media">
                                                <figure className="media-left">
                                                    <FontAwesomeIcon className='image is-48x48' icon={faShare} flip='vertical' />
                                                </figure>
                                                <div className="media-content">
                                                    <div className="content">
                                                        <p>
                                                            <strong>{e.history_edit.title}</strong>
                                                            <br />
                                                            {e.history_edit.details}
                                                        </p>
                                                        <hr />
                                                        <p>
                                                            <strong>Reason</strong>
                                                            <br />
                                                            {e.reason}
                                                        </p>

                                                        <p className='has-text-right'> <strong>By:</strong> {e.user_detail.name}</p>
                                                    </div>
                                                    {(e.history_edit.comment.length > 0) && (<>
                                                        {e.history_edit.comment.map((c: any) => (
                                                            <article key={c.id} className="media">
                                                                <figure className="media-left">
                                                                    <FontAwesomeIcon className='image is-48x48' icon={faComment} flip='horizontal' />
                                                                </figure>
                                                                <div className="media-content">
                                                                    <div className="content">
                                                                        <p>
                                                                            <strong>{c.user_detail.name}</strong>
                                                                            <br />
                                                                            {c.details}


                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </article>
                                                        ))}
                                                    </>)}


                                                </div>
                                            </article>
                                        </div>
                                    </article>
                                    <article className="media">
                                        <figure className="media-left">
                                            <FontAwesomeIcon className='image is-48x48' icon={faComment} flip='horizontal' />
                                        </figure>
                                        <div className="media-content">
                                            <form onSubmit={memory_handle_submit}>
                                                <div className="field">
                                                    <p className="control">
                                                        <textarea name='memory_details' className="textarea is-primary" placeholder="Add a comment, corrections or additional details" required></textarea>
                                                    </p>
                                                </div>
                                                <div className="field">
                                                    <p className="control">
                                                        <button name='memory_edit' value={e.history_edit.id} type='submit' className="button">Post comment</button>
                                                    </p>
                                                </div>
                                            </form>
                                        </div>
                                    </article>
                                </div>
                                <footer className="modal-card-foot has-background-white is-flex is-justify-content-flex-end">
                                    <button onClick={() => memory_history_accept(e.id)} className="button is-success">Accept</button>
                                    <button onClick={() => memory_edit(e)} className="button is-info">Edit</button>
                                    <button onClick={() => memory_cancel(e)} className="button ">Cancel Edit</button>
                                </footer>
                            </div>))}


                    </div>))}

                    {person_modal && <EditEditPerson setModal={setPersonModal} modal_open={person_modal} clan_name={clan_name} data={history_data} refresh={reload} setRefresh={setReload} choosen={category} />}

                    <hr />

                    Family Tree Edits
                    <div className='container content '>
                        <ul>
                            <li>Person</li>
                            {(family.length > 0) && (
                                <div className='box'>
                                    {family.map((e: any) => (
                                        <div key={e.id}>
                                            <div>
                                                <article className="media">
                                                    <div className="media-content">
                                                        <div className="content">

                                                            <div className="field">
                                                                <label className="label">Name:</label>
                                                                <div className="control">
                                                                    <p>{e.family.person.name}</p>
                                                                </div>
                                                            </div>

                                                            <div className="field">
                                                                <label className="label">Status</label>
                                                                <div className="control">
                                                                    <p>{e.family.person.status}</p>
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <article className="media">
                                                            <figure className="media-left">
                                                                <FontAwesomeIcon className='image is-48x48' icon={faShare} flip='vertical' />
                                                            </figure>
                                                            <div className="media-content">
                                                                <div className="content">

                                                                    <div className="field">
                                                                        <label className="label">Name:</label>
                                                                        <div className="control">
                                                                            <p>{e.name}</p>
                                                                        </div>
                                                                    </div>

                                                                    <div className="field">
                                                                        <label className="label">Status</label>
                                                                        <div className="control">
                                                                            <p>{e.status}</p>
                                                                        </div>
                                                                    </div>

                                                                    <p>
                                                                        <strong>Reason</strong>
                                                                        <br />
                                                                        {e.reason}
                                                                    </p>

                                                                    <p className='has-text-right'> <strong>By:</strong> {e.user_detail.name}</p>
                                                                </div>
                                                                {(e.comment.length > 0) && (<>
                                                                    {e.comment.map((c: any) => (
                                                                        <article key={c.id} className="media">
                                                                            <figure className="media-left">
                                                                                <FontAwesomeIcon className='image is-48x48' icon={faComment} flip='horizontal' />
                                                                            </figure>
                                                                            <div className="media-content">
                                                                                <div className="content">
                                                                                    <p>
                                                                                        <strong>{c.user_detail.name}</strong>
                                                                                        <br />
                                                                                        {c.details}


                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </article>
                                                                    ))}
                                                                </>)}


                                                            </div>
                                                        </article>
                                                    </div>
                                                </article>
                                                <article className="media">
                                                    <figure className="media-left">
                                                        <FontAwesomeIcon className='image is-48x48' icon={faComment} flip='horizontal' />
                                                    </figure>
                                                    <div className="media-content">
                                                        <form onSubmit={family_handle_submit}>
                                                            <div className="field">
                                                                <p className="control">
                                                                    <textarea name='family_details' className="textarea is-primary" placeholder="Add a comment, corrections or additional details" required></textarea>
                                                                </p>
                                                            </div>
                                                            <div className="field">
                                                                <p className="control">
                                                                    <button name='family_edit' value={e.id} type='submit' className="button">Post comment</button>
                                                                </p>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </article>
                                            </div>
                                            <footer className="modal-card-foot has-background-white is-flex is-justify-content-flex-end">
                                                <button onClick={() => family_accept(e.id)} className="button is-success">Accept</button>
                                                <button onClick={() => family_edit(e)} className="button is-info">Edit</button>
                                                <button onClick={() => family_cancel(e)} className="button ">Cancel Edit</button>
                                            </footer>
                                        </div>
                                    ))}
                                </div>
                            )}
                            <hr />
                            <li>Partner</li>
                            {(partner.length > 0) && (
                                <div className='box'>
                                    {partner.map((e: any) => (
                                        <div key={e.id}>
                                            <div>
                                                <article className="media">
                                                    <div className="media-content">
                                                        <div className="content">

                                                            <div className="field">
                                                                <label className="label">Name:</label>
                                                                <div className="control">
                                                                    <p>{e.partner.partner}</p>
                                                                </div>
                                                            </div>

                                                            <div className="field">
                                                                <label className="label">Status</label>
                                                                <div className="control">
                                                                    <p>{e.partner.status}</p>
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <article className="media">
                                                            <figure className="media-left">
                                                                <FontAwesomeIcon className='image is-48x48' icon={faShare} flip='vertical' />
                                                            </figure>
                                                            <div className="media-content">
                                                                <div className="content">

                                                                    <div className="field">
                                                                        <label className="label">Name:</label>
                                                                        <div className="control">
                                                                            <p>{e.name}</p>
                                                                        </div>
                                                                    </div>

                                                                    <div className="field">
                                                                        <label className="label">Status</label>
                                                                        <div className="control">
                                                                            <p>{e.status}</p>
                                                                        </div>
                                                                    </div>

                                                                    <p>
                                                                        <strong>Reason</strong>
                                                                        <br />
                                                                        {e.reason}
                                                                    </p>

                                                                    <p className='has-text-right'> <strong>By:</strong> {e.user_detail.name}</p>
                                                                </div>
                                                                {(e.comment.length > 0) && (<>
                                                                    {e.comment.map((c: any) => (
                                                                        <article key={c.id} className="media">
                                                                            <figure className="media-left">
                                                                                <FontAwesomeIcon className='image is-48x48' icon={faComment} flip='horizontal' />
                                                                            </figure>
                                                                            <div className="media-content">
                                                                                <div className="content">
                                                                                    <p>
                                                                                        <strong>{c.user_detail.name}</strong>
                                                                                        <br />
                                                                                        {c.details}


                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </article>
                                                                    ))}
                                                                </>)}


                                                            </div>
                                                        </article>
                                                    </div>
                                                </article>
                                                <article className="media">
                                                    <figure className="media-left">
                                                        <FontAwesomeIcon className='image is-48x48' icon={faComment} flip='horizontal' />
                                                    </figure>
                                                    <div className="media-content">
                                                        <form onSubmit={partner_handle_submit}>
                                                            <div className="field">
                                                                <p className="control">
                                                                    <textarea name='partner_details' className="textarea is-primary" placeholder="Add a comment, corrections or additional details" required></textarea>
                                                                </p>
                                                            </div>
                                                            <div className="field">
                                                                <p className="control">
                                                                    <button name='partner_edit' value={e.id} type='submit' className="button">Post comment</button>
                                                                </p>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </article>
                                            </div>
                                            <footer className="modal-card-foot has-background-white is-flex is-justify-content-flex-end">
                                                <button onClick={() => partner_accept(e.id)} className="button is-success">Accept</button>
                                                <button onClick={() => partner_edit(e)} className="button is-info">Edit</button>
                                                <button onClick={() => partner_cancel(e)} className="button ">Cancel Edit</button>
                                            </footer>
                                        </div>
                                    ))}
                                </div>
                            )}
                            <hr />
                            <li>Family Story</li>
                            {(family_history.length > 0 && (<div className='box'>
                                {family_history.map((e: any) => (
                                    <div key={e.id} >
                                        <div>
                                            <article className="media">
                                                <div className="media-content">
                                                    <div className="content">
                                                        <p>
                                                            <strong>{e.history.title}</strong>
                                                            <br />
                                                            {e.history.details}


                                                        </p>
                                                    </div>

                                                    <article className="media">
                                                        <figure className="media-left">
                                                            <FontAwesomeIcon className='image is-48x48' icon={faShare} flip='vertical' />
                                                        </figure>
                                                        <div className="media-content">
                                                            <div className="content">
                                                                <p>
                                                                    <strong>{e.history_edit.title}</strong>
                                                                    <br />
                                                                    {e.history_edit.details}
                                                                </p>
                                                                <hr />
                                                                <p>
                                                                    <strong>Reason</strong>
                                                                    <br />
                                                                    {e.reason}
                                                                </p>

                                                                <p className='has-text-right'> <strong>By:</strong> {e.user_detail.name}</p>
                                                            </div>
                                                            {(e.history_edit.comment.length > 0) && (<>
                                                                {e.history_edit.comment.map((c: any) => (
                                                                    <article key={c.id} className="media">
                                                                        <figure className="media-left">
                                                                            <FontAwesomeIcon className='image is-48x48' icon={faComment} flip='horizontal' />
                                                                        </figure>
                                                                        <div className="media-content">
                                                                            <div className="content">
                                                                                <p>
                                                                                    <strong>{c.user_detail.name}</strong>
                                                                                    <br />
                                                                                    {c.details}


                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </article>
                                                                ))}
                                                            </>)}


                                                        </div>
                                                    </article>
                                                </div>
                                            </article>
                                            <article className="media">
                                                <figure className="media-left">
                                                    <FontAwesomeIcon className='image is-48x48' icon={faComment} flip='horizontal' />
                                                </figure>
                                                <div className="media-content">
                                                    <form onSubmit={family_history_handle_submit}>
                                                        <div className="field">
                                                            <p className="control">
                                                                <textarea name='family_history_details' className="textarea is-primary" placeholder="Add a comment, corrections or additional details" required></textarea>
                                                            </p>
                                                        </div>
                                                        <div className="field">
                                                            <p className="control">
                                                                <button name='family_history_edit' value={e.history_edit.id} type='submit' className="button">Post comment</button>
                                                            </p>
                                                        </div>
                                                    </form>
                                                </div>
                                            </article>
                                        </div>
                                        <footer className="modal-card-foot has-background-white is-flex is-justify-content-flex-end">
                                            <button onClick={() => family_history_accept(e.id)} className="button is-success">Accept</button>
                                            <button onClick={() => family_history_edit(e)} className="button is-info">Edit</button>
                                            <button onClick={() => family_history_cancel(e)} className="button ">Cancel Edit</button>
                                        </footer>
                                    </div>))}
                            </div>))}
                        </ul>


                    </div>

                    {clan_details_modal && <EditClanDetails setModal={setClanDetailsModal} modal_open={clan_details_modal} clan_name={clan_name} data={history_data} refresh={reload} setRefresh={setReload} category={category} />}
                    <hr />
                    Clan Details Edit
                    {(details.length > 0) && (
                        <div className='box'>
                            {details.map((e: any) => (
                                <div key={e.id}>
                                    <div>
                                        <article className="media">
                                            <div className="media-content">
                                                <div className="content">

                                                    <div className="field">
                                                        <label className="label">Name:</label>
                                                        <div className="control">
                                                            <p>{e.clan_detail.name}</p>
                                                        </div>
                                                    </div>

                                                    <div className="field">
                                                        <label className="label">Details</label>
                                                        <div className="control">
                                                            <p>{e.clan_detail.details}</p>
                                                        </div>
                                                    </div>

                                                </div>

                                                <article className="media">
                                                    <figure className="media-left">
                                                        <FontAwesomeIcon className='image is-48x48' icon={faShare} flip='vertical' />
                                                    </figure>
                                                    <div className="media-content">
                                                        <div className="content">

                                                            <div className="field">
                                                                <label className="label">Name:</label>
                                                                <div className="control">
                                                                    <p>{e.name}</p>
                                                                </div>
                                                            </div>

                                                            <div className="field">
                                                                <label className="label">Details</label>
                                                                <div className="control">
                                                                    <p>{e.details}</p>
                                                                </div>
                                                            </div>

                                                            <p>
                                                                <strong>Reason</strong>
                                                                <br />
                                                                {e.reason}
                                                            </p>

                                                            <p className='has-text-right'> <strong>By:</strong> {e.user_detail.name}</p>
                                                        </div>
                                                        {(e.comment.length > 0) && (<>
                                                            {e.comment.map((c: any) => (
                                                                <article key={c.id} className="media">
                                                                    <figure className="media-left">
                                                                        <FontAwesomeIcon className='image is-48x48' icon={faComment} flip='horizontal' />
                                                                    </figure>
                                                                    <div className="media-content">
                                                                        <div className="content">
                                                                            <p>
                                                                                <strong>{c.user_detail.name}</strong>
                                                                                <br />
                                                                                {c.details}


                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </article>
                                                            ))}
                                                        </>)}


                                                    </div>
                                                </article>
                                            </div>
                                        </article>
                                        <article className="media">
                                            <figure className="media-left">
                                                <FontAwesomeIcon className='image is-48x48' icon={faComment} flip='horizontal' />
                                            </figure>
                                            <div className="media-content">
                                                <form onSubmit={clan_details_handle_submit}>
                                                    <div className="field">
                                                        <p className="control">
                                                            <textarea name='clan_details_details' className="textarea is-primary" placeholder="Add a comment, corrections or additional details" required></textarea>
                                                        </p>
                                                    </div>
                                                    <div className="field">
                                                        <p className="control">
                                                            <button name='clan_details_edit' value={e.id} type='submit' className="button">Post comment</button>
                                                        </p>
                                                    </div>
                                                </form>
                                            </div>
                                        </article>
                                    </div>
                                    <footer className="modal-card-foot has-background-white is-flex is-justify-content-flex-end">
                                        <button onClick={() => clan_details_accept(e.id)} className="button is-success">Accept</button>
                                        <button onClick={() => clan_details_edit(e)} className="button is-info">Edit</button>
                                        <button onClick={() => clan_details_cancel(e)} className="button ">Cancel Edit</button>
                                    </footer>
                                </div>
                            ))}
                        </div>
                    )}

                </div>
            </div>
            <hr className='has-background-danger' />
            <div>
                Delete
                <div className='container'>
                    Clan History Delete
                    {(clan_history_delete.length > 0 && (<div className='box'>
                        {clan_history_delete.map((e: any) => (
                            <div key={e.id} >
                                <div>
                                    <article className="media">
                                        <div className="media-content">
                                            <div className="content">
                                                <p>
                                                    <strong>{e.clan_history.history.title}</strong>
                                                    <br />
                                                    {e.clan_history.history.details}


                                                </p>
                                            </div>

                                            <article className="media">
                                                <figure className="media-left">
                                                    <FontAwesomeIcon className='image is-48x48' icon={faShare} flip='vertical' />
                                                </figure>
                                                <div className="media-content">
                                                    <div className="content">


                                                        <p>
                                                            <strong>Reason</strong>
                                                            <br />
                                                            {e.reason}
                                                        </p>

                                                        <p className='has-text-right'> <strong>By:</strong> {e.user_detail.name}</p>
                                                    </div>
                                                    {(e.comment.length > 0) && (<>
                                                        {e.comment.map((c: any) => (
                                                            <article key={c.id} className="media">
                                                                <figure className="media-left">
                                                                    <FontAwesomeIcon className='image is-48x48' icon={faComment} flip='horizontal' />
                                                                </figure>
                                                                <div className="media-content">
                                                                    <div className="content">
                                                                        <p>
                                                                            <strong>{c.user_detail.name}</strong>
                                                                            <br />
                                                                            {c.details}


                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </article>
                                                        ))}
                                                    </>)}


                                                </div>
                                            </article>
                                        </div>
                                    </article>
                                    <article className="media">
                                        <figure className="media-left">
                                            <FontAwesomeIcon className='image is-48x48' icon={faComment} flip='horizontal' />
                                        </figure>
                                        <div className="media-content">
                                            <form onSubmit={clan_history_delete_handle_submit}>
                                                <div className="field">
                                                    <p className="control">
                                                        <textarea name='clan_history_delete_details' className="textarea is-primary" placeholder="Add a comment, corrections or additional details" required></textarea>
                                                    </p>
                                                </div>
                                                <div className="field">
                                                    <p className="control">
                                                        <button name='clan_history_delete_edit' value={e.id} type='submit' className="button">Post comment</button>
                                                    </p>
                                                </div>
                                            </form>
                                        </div>
                                    </article>
                                </div>
                                <footer className="modal-card-foot has-background-white is-flex is-justify-content-flex-end">
                                    <button onClick={() => clan_history_delete_accept(e.id)} className="button is-success">Accept</button>

                                    <button onClick={() => clan_history_delete_cancel(e)} className="button ">Cancel Edit</button>
                                </footer>
                            </div>))}


                    </div>))}
                    <hr />
                    Memory Delete
                    {(memory_delete.length > 0 && (<div className='box'>
                        {memory_delete.map((e: any) => (
                            <div key={e.id} >
                                <div>
                                    <article className="media">
                                        <div className="media-content">
                                            <div className="content">
                                                <p>
                                                    <strong>{e.memory.history.title}</strong>
                                                    <br />
                                                    {e.memory.history.details}


                                                </p>
                                            </div>

                                            <article className="media">
                                                <figure className="media-left">
                                                    <FontAwesomeIcon className='image is-48x48' icon={faShare} flip='vertical' />
                                                </figure>
                                                <div className="media-content">
                                                    <div className="content">


                                                        <p>
                                                            <strong>Reason</strong>
                                                            <br />
                                                            {e.reason}
                                                        </p>

                                                        <p className='has-text-right'> <strong>By:</strong> {e.user_detail.name}</p>
                                                    </div>
                                                    {(e.comment.length > 0) && (<>
                                                        {e.comment.map((c: any) => (
                                                            <article key={c.id} className="media">
                                                                <figure className="media-left">
                                                                    <FontAwesomeIcon className='image is-48x48' icon={faComment} flip='horizontal' />
                                                                </figure>
                                                                <div className="media-content">
                                                                    <div className="content">
                                                                        <p>
                                                                            <strong>{c.user_detail.name}</strong>
                                                                            <br />
                                                                            {c.details}


                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </article>
                                                        ))}
                                                    </>)}


                                                </div>
                                            </article>
                                        </div>
                                    </article>
                                    <article className="media">
                                        <figure className="media-left">
                                            <FontAwesomeIcon className='image is-48x48' icon={faComment} flip='horizontal' />
                                        </figure>
                                        <div className="media-content">
                                            <form onSubmit={memory_delete_handle_submit}>
                                                <div className="field">
                                                    <p className="control">
                                                        <textarea name='memory_delete_details' className="textarea is-primary" placeholder="Add a comment, corrections or additional details" required></textarea>
                                                    </p>
                                                </div>
                                                <div className="field">
                                                    <p className="control">
                                                        <button name='memory_delete_edit' value={e.id} type='submit' className="button">Post comment</button>
                                                    </p>
                                                </div>
                                            </form>
                                        </div>
                                    </article>
                                </div>
                                <footer className="modal-card-foot has-background-white is-flex is-justify-content-flex-end">
                                    <button onClick={() => memory_delete_accept(e.id)} className="button is-success">Accept</button>

                                    <button onClick={() => memory_delete_cancel(e)} className="button ">Cancel Edit</button>
                                </footer>
                            </div>))}


                    </div>))}
                    <hr />
                    Family Tree Delete
                    <div className='container content'>
                        <ul>
                            <li>Person</li>

                            {(family_delete.length > 0 && (<div className='box'>
                                {family_delete.map((e: any) => (
                                    <div key={e.id} >
                                        <div>
                                            <article className="media">
                                                <div className="media-content">
                                                    <div className="content">
                                                        <div className="field">
                                                            <label className="label">Name:</label>
                                                            <div className="control">
                                                                <p>{e.family.person.name}</p>
                                                            </div>
                                                        </div>

                                                        <div className="field">
                                                            <label className="label">Status</label>
                                                            <div className="control">
                                                                <p>{e.family.person.status}</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <article className="media">
                                                        <figure className="media-left">
                                                            <FontAwesomeIcon className='image is-48x48' icon={faShare} flip='vertical' />
                                                        </figure>
                                                        <div className="media-content">
                                                            <div className="content">


                                                                <p>
                                                                    <strong>Reason</strong>
                                                                    <br />
                                                                    {e.reason}
                                                                </p>

                                                                <p className='has-text-right'> <strong>By:</strong> {e.user_detail.name}</p>
                                                            </div>
                                                            {(e.comment.length > 0) && (<>
                                                                {e.comment.map((c: any) => (
                                                                    <article key={c.id} className="media">
                                                                        <figure className="media-left">
                                                                            <FontAwesomeIcon className='image is-48x48' icon={faComment} flip='horizontal' />
                                                                        </figure>
                                                                        <div className="media-content">
                                                                            <div className="content">
                                                                                <p>
                                                                                    <strong>{c.user_detail.name}</strong>
                                                                                    <br />
                                                                                    {c.details}


                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </article>
                                                                ))}
                                                            </>)}


                                                        </div>
                                                    </article>
                                                </div>
                                            </article>
                                            <article className="media">
                                                <figure className="media-left">
                                                    <FontAwesomeIcon className='image is-48x48' icon={faComment} flip='horizontal' />
                                                </figure>
                                                <div className="media-content">
                                                    <form onSubmit={family_delete_handle_submit}>
                                                        <div className="field">
                                                            <p className="control">
                                                                <textarea name='family_delete_details' className="textarea is-primary" placeholder="Add a comment, corrections or additional details" required></textarea>
                                                            </p>
                                                        </div>
                                                        <div className="field">
                                                            <p className="control">
                                                                <button name='family_delete_edit' value={e.id} type='submit' className="button">Post comment</button>
                                                            </p>
                                                        </div>
                                                    </form>
                                                </div>
                                            </article>
                                        </div>
                                        <footer className="modal-card-foot has-background-white is-flex is-justify-content-flex-end">
                                            <button onClick={() => family_delete_accept(e.id)} className="button is-success">Accept</button>

                                            <button onClick={() => family_delete_cancel(e)} className="button ">Cancel Edit</button>
                                        </footer>
                                    </div>))}


                            </div>))}

                            <hr />
                            <li>Partner</li>
                            {(partner_delete.length > 0 && (<div className='box'>
                                {partner_delete.map((e: any) => (
                                    <div key={e.id} >
                                        <div>
                                            <article className="media">
                                                <div className="media-content">
                                                    <div className="content">
                                                        <div className="field">
                                                            <label className="label">Name:</label>
                                                            <div className="control">
                                                                <p>{e.partner.partner}</p>
                                                            </div>
                                                        </div>

                                                        <div className="field">
                                                            <label className="label">Status</label>
                                                            <div className="control">
                                                                <p>{e.partner.status}</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <article className="media">
                                                        <figure className="media-left">
                                                            <FontAwesomeIcon className='image is-48x48' icon={faShare} flip='vertical' />
                                                        </figure>
                                                        <div className="media-content">
                                                            <div className="content">


                                                                <p>
                                                                    <strong>Reason</strong>
                                                                    <br />
                                                                    {e.reason}
                                                                </p>

                                                                <p className='has-text-right'> <strong>By:</strong> {e.user_detail.name}</p>
                                                            </div>
                                                            {(e.comment.length > 0) && (<>
                                                                {e.comment.map((c: any) => (
                                                                    <article key={c.id} className="media">
                                                                        <figure className="media-left">
                                                                            <FontAwesomeIcon className='image is-48x48' icon={faComment} flip='horizontal' />
                                                                        </figure>
                                                                        <div className="media-content">
                                                                            <div className="content">
                                                                                <p>
                                                                                    <strong>{c.user_detail.name}</strong>
                                                                                    <br />
                                                                                    {c.details}


                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </article>
                                                                ))}
                                                            </>)}


                                                        </div>
                                                    </article>
                                                </div>
                                            </article>
                                            <article className="media">
                                                <figure className="media-left">
                                                    <FontAwesomeIcon className='image is-48x48' icon={faComment} flip='horizontal' />
                                                </figure>
                                                <div className="media-content">
                                                    <form onSubmit={partner_delete_handle_submit}>
                                                        <div className="field">
                                                            <p className="control">
                                                                <textarea name='partner_delete_details' className="textarea is-primary" placeholder="Add a comment, corrections or additional details" required></textarea>
                                                            </p>
                                                        </div>
                                                        <div className="field">
                                                            <p className="control">
                                                                <button name='partner_delete_edit' value={e.id} type='submit' className="button">Post comment</button>
                                                            </p>
                                                        </div>
                                                    </form>
                                                </div>
                                            </article>
                                        </div>
                                        <footer className="modal-card-foot has-background-white is-flex is-justify-content-flex-end">
                                            <button onClick={() => partner_delete_accept(e.id)} className="button is-success">Accept</button>

                                            <button onClick={() => partner_delete_cancel(e)} className="button ">Cancel Edit</button>
                                        </footer>
                                    </div>))}


                            </div>))}
                            <hr />

                            <li>Family History</li>
                            {(family_history_delete.length > 0 && (<div className='box'>
                                {family_history_delete.map((e: any) => (
                                    <div key={e.id} >
                                        <div>
                                            <article className="media">
                                                <div className="media-content">
                                                    <div className="content">
                                                        <p>
                                                            <strong>{e.family_history.history.title}</strong>
                                                            <br />
                                                            {e.family_history.history.details}


                                                        </p>
                                                    </div>

                                                    <article className="media">
                                                        <figure className="media-left">
                                                            <FontAwesomeIcon className='image is-48x48' icon={faShare} flip='vertical' />
                                                        </figure>
                                                        <div className="media-content">
                                                            <div className="content">


                                                                <p>
                                                                    <strong>Reason</strong>
                                                                    <br />
                                                                    {e.reason}
                                                                </p>

                                                                <p className='has-text-right'> <strong>By:</strong> {e.user_detail.name}</p>
                                                            </div>
                                                            {(e.comment.length > 0) && (<>
                                                                {e.comment.map((c: any) => (
                                                                    <article key={c.id} className="media">
                                                                        <figure className="media-left">
                                                                            <FontAwesomeIcon className='image is-48x48' icon={faComment} flip='horizontal' />
                                                                        </figure>
                                                                        <div className="media-content">
                                                                            <div className="content">
                                                                                <p>
                                                                                    <strong>{c.user_detail.name}</strong>
                                                                                    <br />
                                                                                    {c.details}


                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </article>
                                                                ))}
                                                            </>)}


                                                        </div>
                                                    </article>
                                                </div>
                                            </article>
                                            <article className="media">
                                                <figure className="media-left">
                                                    <FontAwesomeIcon className='image is-48x48' icon={faComment} flip='horizontal' />
                                                </figure>
                                                <div className="media-content">
                                                    <form onSubmit={family_history_delete_handle_submit}>
                                                        <div className="field">
                                                            <p className="control">
                                                                <textarea name='family_history_delete_details' className="textarea is-primary" placeholder="Add a comment, corrections or additional details" required></textarea>
                                                            </p>
                                                        </div>
                                                        <div className="field">
                                                            <p className="control">
                                                                <button name='family_history_delete_edit' value={e.id} type='submit' className="button">Post comment</button>
                                                            </p>
                                                        </div>
                                                    </form>
                                                </div>
                                            </article>
                                        </div>
                                        <footer className="modal-card-foot has-background-white is-flex is-justify-content-flex-end">
                                            <button onClick={() => family_history_delete_accept(e.id)} className="button is-success">Accept</button>

                                            <button onClick={() => family_history_delete_cancel(e)} className="button ">Cancel Edit</button>
                                        </footer>
                                    </div>))}


                            </div>))}
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    )
}
