'use client'
import React, { useRef, useEffect, useState } from 'react'
import * as d3 from "d3";
import TreeChoose from '../modals/TreeChoose';
import RegisterPartner from '../modals/RegisterPartner';
import RegisterPerson from '../modals/RegisterPerson';
import FamilyStory from '../modals/FamilyStory';

export default function FamilyTree(props: any) {
    const { width, data, clan_name } = props
    const ref: any = useRef();
    const [modal, setModal] = useState(false)
    const [person, setPerson] = useState({})
    const [person_modal, setPersonModal] = useState(false)
    const [partner_modal, setPartnerModal] = useState(false)
    const [family_modal, setFamilyModal] = useState(false)



    useEffect(() => {


        chart()
    }, [data]);

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

        const dx = 200;
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
            {modal && <TreeChoose setModal={setModal} modal={modal} clan_name={clan_name} data={person} setPersonModal={setPersonModal} setPartnerModal={setPartnerModal} setFamilyModal={setFamilyModal} />}
            {person_modal && <RegisterPerson setModal={setPersonModal} modal={person_modal} clan_name={clan_name} data={person} />}
            {partner_modal && <RegisterPartner setModal={setPartnerModal} modal={partner_modal} clan_name={clan_name} data={person} />}
            {family_modal && <FamilyStory setModal={setFamilyModal} modal={family_modal} clan_name={clan_name} data={person} />}
            <svg className='center' ref={ref}>
            </svg>
        </div>
    )
}
