'use client'
import React, { useRef, useEffect, useState } from 'react'
import * as d3 from "d3";
import TreeChoose from '../modals/TreeChoose';
import RegisterPartner from '../modals/RegisterPartner';
import RegisterPerson from '../modals/RegisterPerson';
import FamilyStory from '../modals/FamilyStory';

import DeleteFamily from '../modals/DeleteFamily';
import DeletePartner from '../modals/DeletePartner';

import DeleteFamilyHistory from '../modals/DeleteFamilyHistory';
import EditFamilyHistory from '../modals/EditFamilyHistory';

import EditPartner from '../modals/EditPartner';
import EditPerson from '../modals/EditPerson';
import PartnerSelection from '../modals/PartnerSelection';
import SelectHistory from '../modals/SelectHistory';



export default function FamilyTree(props: any) {
    const { width, data, clan_name, refresh, setRefresh } = props
    const ref: any = useRef();
    const [modal, setModal] = useState(false)
    const [person, setPerson]: any = useState({})
    const [person_modal, setPersonModal] = useState(false)
    const [partner_modal, setPartnerModal] = useState(false)
    const [family_modal, setFamilyModal] = useState(false)

    const [delete_family_modal, setDeleteFamilyModal] = useState(false)
    const [delete_partner_modal, setDeletePartnerModal] = useState(false)
    const [delete_history_modal, setDeleteHistoryModal] = useState(false)

    const [edit_partner_modal, setEditPartnerModal] = useState(false)
    const [edit_person_modal, setEditPersonModal] = useState(false)

    const [select_partner_modal, setSelectPartnerModal] = useState(false)
    const [select_history_modal, setSelectHistoryModal] = useState(false)

    const [edit_modal, setEditModal] = useState(false)

    const [selected, setSelected]: any = useState()
    const [selected_history, setSelectedHistory]: any = useState()

    const [select_category, setSelectCategory]: any = useState('')




    useEffect(() => {
        const svg: any = d3.select(ref.current)
        svg.selectAll("*").remove()

        chart()
    }, [data, refresh]);

    const edit_person = (e: any) => {
        setPerson(e)
        setModal(true)
        console.log(e)
    }




    const chart = () => {

        const root = d3.stratify()
            .id(function (d: any) { return d.id; })
            .parentId(function (d: any) { return d.parentId; })
            (data);

        console.log(root)

        const dx = 50;
        const dy = width / (root.height + 1);

        // Create a tree layout.
        const tree: any = d3.tree().nodeSize([dx, dy]);

        // Sort the tree and apply the layout.
        // root.sort((a: any, b: any) => d3.ascending(a.data.name, b.data.name));
        tree(root);

        // Compute the extent of the tree. Note that x and y are swapped here
        // because in the tree layout, x is the breadth, but when displayed, the
        // tree extends right rather than down.
        let x0 = Infinity;
        let x1 = -x0;
        root.each((d: any) => {
            if (d.x > x1) x1 = d.x;
            if (d.x < x0) x0 = d.x;
        });

        // Compute the adjusted height of the tree.
        const height = x1 - x0 + dx * 2;

        const svg: any = d3.select(ref.current)
            .attr("width", width)
            .attr("height", height)
            .attr("viewBox", [-dy / 3, x0 - dx, width, height])
            .attr("style", "max-width: 100%; height: auto; font: 20px sans-serif;");

        const link: any = svg.append("g")
            .attr("fill", "none")
            .attr("stroke", "#C89B3C")
            .attr("stroke-opacity", 0.4)
            .attr("stroke-width", 1.5)
            .selectAll()
            .data(root.links())
            .join("path")
            .attr("d", d3.linkHorizontal()
                .x((d: any) => d.y)
                .y((d: any) => d.x));

        const node = svg.append("g")
            .attr("stroke-linejoin", "round")
            .attr("stroke-width", 3)
            .selectAll()
            .data(root.descendants())

            .join("g")
            .attr("transform", (d: any) => `translate(${d.y},${d.x})`);

        node.append("circle")
            .attr("fill", (d: any) => d.children ? "#785A28" : "#999")
            .attr("r", 5);

        node.append("text")
            .attr("dy", "0.31em")
            .attr("x", (d: any) => d.children ? -6 : 6)
            .attr("text-anchor", (d: any) => d.children ? "end" : "start")
            .text((d: any) => d.data.person.name)
            .on("click", (d: any) => edit_person(d.target.__data__.data))

            .clone(true).lower()
            .attr("stroke", "white")
            ;


        return svg.node();
    }

    return (
        <div>

            {modal && <TreeChoose setModal={setModal} modal={modal} data={person} setPersonModal={setPersonModal} setPartnerModal={setPartnerModal} setFamilyModal={setFamilyModal} setDeletePartnerModal={setDeletePartnerModal} setDeleteHistoryModal={setDeleteHistoryModal} setSelectPartnerModal={setSelectPartnerModal} setSelectCategory={setSelectCategory} setEditPersonModal={setEditPersonModal} setDeleteFamilyModal={setDeleteFamilyModal} setSelectHistoryModal={setSelectHistoryModal} />}

            {person_modal && <RegisterPerson setModal={setPersonModal} modal={person_modal} clan_name={clan_name} data={person} refresh={refresh} setRefresh={setRefresh} />}

            {partner_modal && <RegisterPartner setModal={setPartnerModal} modal={partner_modal} clan_name={clan_name} data={person} refresh={refresh} setRefresh={setRefresh} />}

            {family_modal && <FamilyStory setModal={setFamilyModal} modal={family_modal} clan_name={clan_name} data={person} refresh={refresh} setRefresh={setRefresh} />}


            {select_partner_modal && <PartnerSelection setModal={setSelectPartnerModal} modal_open={select_partner_modal} data={person.partner} selection={setSelected} closeModal={setModal} setEditPartnerModal={setEditPartnerModal} setDeletePartnerModal={setDeletePartnerModal} category={select_category} />}

            {select_history_modal && <SelectHistory setModal={setSelectHistoryModal} modal_open={select_history_modal} data={person.family_history} selection={setSelectedHistory} closeModal={setModal} setEditHistoryModal={setEditModal} setDeleteHistoryModal={setDeleteHistoryModal} category={select_category} />}


            {edit_modal && <EditFamilyHistory setModal={setEditModal} modal_open={edit_modal} clan_name={clan_name} data={person.family_history} selected={selected_history} refresh={refresh} setRefresh={setRefresh} />}

            {edit_partner_modal && <EditPartner setModal={setEditPartnerModal} modal_open={edit_partner_modal} clan_name={clan_name} data={person.partner} selected={selected} refresh={refresh} setRefresh={setRefresh} />}

            {edit_person_modal && <EditPerson setModal={setEditPersonModal} modal_open={edit_person_modal} clan_name={clan_name} data={person} refresh={refresh} setRefresh={setRefresh} />}


            {delete_family_modal && <DeleteFamily setModal={setDeleteFamilyModal} modal={delete_family_modal} clan_name={clan_name} data={person} refresh={refresh} setRefresh={setRefresh} />}

            {delete_partner_modal && <DeletePartner setModal={setDeletePartnerModal} modal={delete_partner_modal} clan_name={clan_name} data={person.partner} selected={selected} refresh={refresh} setRefresh={setRefresh} />}

            {delete_history_modal && <DeleteFamilyHistory setModal={setDeleteHistoryModal} modal_open={delete_history_modal} clan_name={clan_name} data={person.family_history} selected={selected_history} refresh={refresh} setRefresh={setRefresh} />}


            <svg className='center' ref={ref}>
            </svg>
        </div>
    )
}
