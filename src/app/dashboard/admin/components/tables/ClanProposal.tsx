'use client'
import React, { useState } from 'react'
import ClanApproval from '../modals/ClanApproval'

export default function ClanProposal(props: any) {
    const { clans } = props

    const clan_list = clans
    const [current_page, setCurrentPage] = useState(1)
    const [modal_open, setModal] = useState(false)
    const [clan, setClan] = useState({})


    const per_page = 10
    const total_pages = Math.ceil(clan_list.length / per_page);

    const show = clan_list.slice((current_page - 1) * per_page, current_page * per_page)

    const buy = (clan: any) => {

        setClan(clan)
        setModal(true)
        console.log('show modal')
    }
    return (
        <div>
            <table className='table is-striped is-hoverable is-fullwidth '>
                <thead>
                    <tr>
                        <th className='has-text-centered'>Clan Name</th>
                        <th className='has-text-centered'>Requester</th>
                        <th className='has-text-centered'>Updated At</th>
                    </tr>
                </thead>

                <tbody>
                    {show.map((e: any) => (
                        <tr key={e.id}
                            onClick={() => buy(e)}
                        >
                            <td className='has-text-centered'>{e.request.name}</td>
                            <td className='has-text-centered'>{e.user_detail.name}</td>
                            <td className='has-text-centered'>{e.updated_at}</td>
                        </tr>
                    ))}

                </tbody>

            </table>

            <nav className="pagination is-centered" role="navigation" aria-label="pagination">

                <button disabled={current_page == 1} className="pagination-previous" onClick={() => setCurrentPage(current_page - 1)}>Previous</button>

                <button disabled={current_page == total_pages || clan_list.length == 0} className="pagination-next" onClick={() => setCurrentPage(current_page + 1)}>Next page</button>

                <ul className="pagination-list">

                    {((current_page + 1) > 3) && <>
                        <li><a className="pagination-link" onClick={() => setCurrentPage(1)}>1</a></li>
                        {current_page != 3 &&
                            <li><span className="pagination-ellipsis">&hellip;</span></li>
                        }

                    </>}

                    {(current_page - 1 !== 0) && <li>
                        <a className="pagination-link" onClick={() => setCurrentPage(current_page - 1)}>{current_page - 1}</a></li>}



                    <li><a className="pagination-link active" >{current_page}</a></li>

                    {(current_page + 1 <= total_pages) && (
                        <>
                            <li><a className="pagination-link" onClick={() => setCurrentPage(current_page + 1)}>{current_page + 1}</a></li>

                            {(current_page + 1 !== total_pages) &&
                                <>
                                    {(current_page + 2 !== total_pages) &&
                                        <li><span className="pagination-ellipsis">&hellip;</span></li>
                                    }


                                    <li><a className="pagination-link" onClick={() => setCurrentPage(total_pages)}>{total_pages}</a></li>
                                </>
                            }

                        </>)
                    }

                </ul>
            </nav>

            {modal_open && <ClanApproval setModal={setModal} modal_open={modal_open} clan={clan} />}
        </div>
    )
}
