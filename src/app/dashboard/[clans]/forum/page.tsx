'use client'
import React, { useEffect, useState } from 'react'
import { faShare, faComment } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ClanAPI from '../components/ClanAPI'

export default function Page({ params }: any) {
    const { get_edits, post_comment } = ClanAPI()
    const [edits, setEdits] = useState([])


    useEffect(() => {
        async function get_data() {
            const result = await get_edits(params.clans)
            if (result.edit) {
                setEdits(result.edit)
            }
        }
        get_data()
    }, [])

    const handle_submit = (e: any) => {
        // e.preventDefault();
        console.log(e.target.edit.value)
        async function send_data() {
            const result = await post_comment(params.clans, e.target.edit.value, e.target.details.value)
        }
        send_data()
    }


    return (
        <div>
            <h1 className='is-size-1 has-text-centered'>{params.clans} Forum page</h1>
            <div className='container'>


                {(edits.length > 0 && (<>
                    {edits.map((e: any) => (
                        <div key={e.id} className='box'>
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
                                                    <strong>{e.title}</strong>
                                                    <br />
                                                    {e.details}


                                                </p>

                                            </div>
                                            {(e.comment.length > 0) && (<>
                                                {e.comment.map((c: any) => (
                                                    <article className="media">
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
                                    <form onSubmit={handle_submit}>
                                        <div className="field">
                                            <p className="control">
                                                <textarea name='details' className="textarea is-primary" placeholder="Add a comment, corrections or additional details" required></textarea>
                                            </p>
                                        </div>
                                        <div className="field">
                                            <p className="control">
                                                <button name='edit' value={e.id} type='submit' className="button">Post comment</button>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </article>
                        </div>
                    ))}


                </>))}


            </div>

        </div>
    )
}
