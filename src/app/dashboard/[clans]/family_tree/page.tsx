'use client'
import React, { useState, useEffect } from 'react'
import FamilyTree from '../components/tree/FamilyTree'
import RegisterAncestor from '../components/modals/RegisterAncestor'
import ClanAPI from '../components/ClanAPI'



export default function Tree({ params }: any) {
    const clan_name = params.clans.split('%20').join(' ')
    const [modal, setModal] = useState(false)
    const { get_ancestral_tree } = ClanAPI()
    const [tree, setTree]: any = useState()
    const [show_tree, setShow] = useState(false)
    const [refresh, setRefresh] = useState(false)



    useEffect(() => {
        async function get_data() {
            const result = await get_ancestral_tree(clan_name)
            if (result.family) {
                setTree(result.family)

                if (result.family.length > 0) {
                    setShow(true)
                }
            } else {
                alert(result.error)
            }


        }
        get_data()

        console.log(tree)
    }, [refresh])

    return (
        <div className='h-100'>
            <div className='is-flex is-justify-content-space-around '>
                <div className='is-flex'>

                    {!show_tree && <button onClick={() => setModal(true)} className="button is-success is-large mx-5">Register the Ancestor</button>}



                </div>
                {modal && <RegisterAncestor setModal={setModal} modal={modal} clan_name={clan_name} refresh={refresh} setRefresh={setRefresh} />}


            </div>
            {show_tree && <FamilyTree data={tree} width={1280} clan_name={clan_name} refresh={refresh} setRefresh={setRefresh} />}

        </div>
    )
}
