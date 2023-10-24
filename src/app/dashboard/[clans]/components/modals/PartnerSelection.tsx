import React from 'react'

export default function PartnerSelection(props: any) {
    const { modal_open, setModal, data, selection, closeModal, setEditPartnerModal, setDeletePartnerModal, category } = props

    const selected = (e: any) => {
        e.preventDefault();
        selection(e.target.partner.value)


        closeModal(false)
        if (category == 'edit') {
            setEditPartnerModal(true)
        } else if (category == 'delete') {
            setDeletePartnerModal(true)
        }

        setModal(false)
    }
    return (
        <div className={`${modal_open ? 'is-active' : ''} modal`}>
            <div className="modal-background"></div>
            <div className="modal-card ">
                <header className="modal-card-head">
                    <p className="modal-card-title">Select a Partner</p>
                    <button onClick={() => setModal(false)} className="delete"></button>
                </header>

                <form onSubmit={selected}>
                    <section className="modal-card-body">

                        <div className="field">
                            <label className="label">Partner Selection</label>
                            <div className="control">
                                <div className="select" >
                                    <select name='partner' required>
                                        {data.map((e: any) => (
                                            <option key={e.id} value={e.id}>{e.partner}</option>
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
