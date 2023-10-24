import React from 'react'
import { useAuth } from "@/app/components/auth";

export default function ClanAPI() {
    const { token } = useAuth()
    const fetchApi = async (url: string, method: string, body?: any) => {
        const headers = {
            "Content-Type": "application/json"
        };

        let options: RequestInit = {
            method
        }

        if (method !== "GET") {
            options.headers = headers;
        }

        if (body) {
            options.body = JSON.stringify(body);
        }

        const response = await fetch(url, options);
        // console.log(response.json())
        return response.json();
    };

    const officer_check = async (clan: string) => {
        const url = `${process.env.NEXT_PUBLIC_DB_OFFICER}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan
        };
        return fetchApi(url, method, body);
    }

    const clan_join_request = async (clan: string) => {
        const url = `${process.env.NEXT_PUBLIC_DB_SHOW_CLAN_JOIN_REQUEST}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan
        };
        return fetchApi(url, method, body);
    }

    const accept_join_request = async (clan: string, id: number, officer: boolean) => {
        const url = `${process.env.NEXT_PUBLIC_DB_OFFICER_APPROVAL}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            request_id: id,
            officer: officer
        };
        return fetchApi(url, method, body);
    }

    const get_history = async (clan: string) => {
        const url = `${process.env.NEXT_PUBLIC_DB_GET_HISTORY}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan
        };
        return fetchApi(url, method, body);
    }

    const record_history = async (clan: string, title: string, details: string) => {
        const url = `${process.env.NEXT_PUBLIC_DB_CREATE_HISTORY}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            title: title,
            details: details
        };
        return fetchApi(url, method, body);
    }

    const edit_clan_history = async (clan: string, id: number, title: string, details: string, reason: string) => {
        const url = `${process.env.NEXT_PUBLIC_DB_EDIT_CLAN_HISTORY}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            reason: reason,
            history_id: id,
            title: title,
            details: details
        };
        return fetchApi(url, method, body);
    }

    const edit_family_history = async (clan: string, id: number, title: string, details: string, reason: string) => {
        const url = `${process.env.NEXT_PUBLIC_DB_EDIT_FAMILY_HISTORY}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            reason: reason,
            history_id: id,
            title: title,
            details: details
        };
        return fetchApi(url, method, body);
    }

    const edit_memory = async (clan: string, id: number, title: string, details: string, reason: string) => {
        const url = `${process.env.NEXT_PUBLIC_DB_EDIT_MEMORY}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            reason: reason,
            history_id: id,
            title: title,
            details: details
        };
        return fetchApi(url, method, body);
    }

    const get_edits = async (clan: string) => {
        const url = `${process.env.NEXT_PUBLIC_DB_SHOW_EDITS}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
        };
        return fetchApi(url, method, body);
    }

    const get_memory = async (clan: string) => {
        const url = `${process.env.NEXT_PUBLIC_DB_GET_MEMORY}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan
        };
        return fetchApi(url, method, body);
    }

    const record_memory = async (clan: string, title: string, details: string) => {
        const url = `${process.env.NEXT_PUBLIC_DB_CREATE_MEMORY}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            title: title,
            details: details
        };
        return fetchApi(url, method, body);
    }

    const post_comment = async (clan: string, id: number, details: string) => {
        const url = `${process.env.NEXT_PUBLIC_DB_COMMENT}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            edit_id: id,
            details: details
        };
        return fetchApi(url, method, body);
    }

    const get_parent = async (clan: string) => {
        const url = `${process.env.NEXT_PUBLIC_DB_GET_PARENT}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan
        };
        return fetchApi(url, method, body);
    }

    const register_person = async (clan: string, name: string, status: string, parent?: number, id?: number) => {
        const url = `${process.env.NEXT_PUBLIC_DB_REGISTER_PERSON}`;
        const method = "POST";
        let body = {}
        if (id && parent) {
            body = {
                token: token,
                clan: clan,
                name: name,
                status: status,

                parent_id: parent,
                family_id: id
            }
        } else {
            body = {
                token: token,
                clan: clan,
                name: name,
                status: status,


            }
        }


        return fetchApi(url, method, body);
    }

    const register_partner = async (clan: string, name: string, status: string, child: boolean, id: number) => {
        const url = `${process.env.NEXT_PUBLIC_DB_REGISTER_PARTNER}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            name: name,
            status: status,
            has_children: child,
            person_id: id
        };
        return fetchApi(url, method, body);
    }

    const record_family_story = async (clan: string, title: string, details: string, id: number) => {
        const url = `${process.env.NEXT_PUBLIC_DB_RECORD_FAMILY_STORY}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            title: title,
            details: details,
            family_id: id
        };
        return fetchApi(url, method, body);
    }

    const get_ancestral_tree = async (clan: string) => {
        const url = `${process.env.NEXT_PUBLIC_DB_ANCESTRAL_TREE}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan
        };
        return fetchApi(url, method, body);
    }

    const get_clan_details = async (clan: string) => {
        const url = `${process.env.NEXT_PUBLIC_DB_GET_CLAN_DETAILS}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan
        };
        return fetchApi(url, method, body);
    }

    const accept_clan_history_edit = async (clan: string, id: number) => {
        const url = `${process.env.NEXT_PUBLIC_DB_ACCEPT_CLAN_HISTORY_EDIT}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            clan_history_edit_id: id
        };
        return fetchApi(url, method, body);
    }

    const edit_clan_history_edit = async (clan: string, id: number, title: string, details: string) => {
        const url = `${process.env.NEXT_PUBLIC_DB_EDIT_CLAN_HISTORY_EDIT}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            clan_history_edit_id: id,
            title: title,
            details: details

        };
        return fetchApi(url, method, body);
    }

    const edit_memory_edit = async (clan: string, id: number, title: string, details: string) => {
        const url = `${process.env.NEXT_PUBLIC_DB_EDIT_MEMORY_EDIT}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            memory_edit_id: id,
            title: title,
            details: details

        };
        return fetchApi(url, method, body);
    }

    const accept_memory_history_edit = async (clan: string, id: number) => {
        const url = `${process.env.NEXT_PUBLIC_DB_ACCEPT_MEMORY_EDIT}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            memory_edit_id: id
        };
        return fetchApi(url, method, body);
    }

    const accept_family_history_edit = async (clan: string, id: number) => {
        const url = `${process.env.NEXT_PUBLIC_DB_ACCEPT_FAMILY_HISTORY_EDIT}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            family_history_edit_id: id
        };
        return fetchApi(url, method, body);
    }

    const edit_family_history_edit = async (clan: string, id: number, title: string, details: string) => {
        const url = `${process.env.NEXT_PUBLIC_DB_EDIT_FAMILY_HISTORY_EDIT}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            family_history_edit_id: id,
            title: title,
            details: details

        };
        return fetchApi(url, method, body);
    }




    const edit_clan_details = async (clan: string, name: string, details: string, reason: string) => {
        const url = `${process.env.NEXT_PUBLIC_DB_EDIT_CLAN_DETAILS}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            name: name,
            details: details,
            reason: reason
        };
        return fetchApi(url, method, body);
    }

    const edit_family = async (clan: string, name: string, status: string, reason: string, id: number) => {
        const url = `${process.env.NEXT_PUBLIC_DB_EDIT_FAMILY}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            name: name,
            status: status,
            reason: reason,
            family_id: id
        };
        return fetchApi(url, method, body);
    }

    const edit_partner = async (clan: string, name: string, status: string, reason: string, id: number) => {
        const url = `${process.env.NEXT_PUBLIC_DB_EDIT_PARTNER}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            name: name,
            status: status,
            reason: reason,
            partner_id: id
        };
        return fetchApi(url, method, body);
    }

    const delete_family = async (clan: string, reason: string, id: number) => {
        const url = `${process.env.NEXT_PUBLIC_DB_DELETE_FAMILY}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            reason: reason,
            family_id: id
        };
        return fetchApi(url, method, body);
    }

    const delete_partner = async (clan: string, reason: string, id: number) => {
        const url = `${process.env.NEXT_PUBLIC_DB_DELETE_PARTNER}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            reason: reason,
            partner_id: id
        };
        return fetchApi(url, method, body);
    }

    const delete_family_history = async (clan: string, reason: string, id: number) => {
        const url = `${process.env.NEXT_PUBLIC_DB_DELETE_FAMILY_HISTORY}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            reason: reason,
            family_history_id: id
        };
        return fetchApi(url, method, body);
    }

    const delete_clan_history = async (clan: string, reason: string, id: number) => {
        const url = `${process.env.NEXT_PUBLIC_DB_DELETE_CLAN_HISTORY}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            reason: reason,
            clan_history_id: id
        };
        return fetchApi(url, method, body);
    }

    const delete_memory = async (clan: string, reason: string, id: number) => {
        const url = `${process.env.NEXT_PUBLIC_DB_DELETE_MEMORY}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            reason: reason,
            memory_id: id
        };
        return fetchApi(url, method, body);
    }

    const edit_family_edit = async (clan: string, name: string, status: string, id: number) => {
        const url = `${process.env.NEXT_PUBLIC_DB_EDIT_FAMILY_EDIT}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            name: name,
            status: status,
            family_edit_id: id
        };
        return fetchApi(url, method, body);
    }

    const edit_partner_edit = async (clan: string, name: string, status: string, id: number) => {
        const url = `${process.env.NEXT_PUBLIC_DB_EDIT_PARTNER_EDIT}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            name: name,
            status: status,
            partner_edit_id: id
        };
        return fetchApi(url, method, body);
    }

    const accept_family_edit = async (clan: string, id: number) => {
        const url = `${process.env.NEXT_PUBLIC_DB_ACCEPT_FAMILY_EDIT}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            family_edit_id: id
        };
        return fetchApi(url, method, body);
    }

    const accept_partner_edit = async (clan: string, id: number) => {
        const url = `${process.env.NEXT_PUBLIC_DB_ACCEPT_PARTNER_EDIT}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            partner_edit_id: id
        };
        return fetchApi(url, method, body);
    }

    const accept_clan_details_edit = async (clan: string, id: number) => {
        const url = `${process.env.NEXT_PUBLIC_DB_ACCEPT_CLAN_DETAILS_EDIT}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            clan_details_edit_id: id
        };
        return fetchApi(url, method, body);
    }

    const accept_family_delete = async (clan: string, id: number) => {
        const url = `${process.env.NEXT_PUBLIC_DB_ACCEPT_FAMILY_DELETE}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            family_delete_id: id
        };
        return fetchApi(url, method, body);
    }

    const accept_partner_delete = async (clan: string, id: number) => {
        const url = `${process.env.NEXT_PUBLIC_DB_ACCEPT_PARTNER_DELETE}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            partner_delete_id: id
        };
        return fetchApi(url, method, body);
    }

    const accept_family_history_delete = async (clan: string, id: number) => {
        const url = `${process.env.NEXT_PUBLIC_DB_ACCEPT_FAMILY_HISTORY_DELETE}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            family_history_delete_id: id
        };
        return fetchApi(url, method, body);
    }

    const accept_clan_history_delete = async (clan: string, id: number) => {
        const url = `${process.env.NEXT_PUBLIC_DB_ACCEPT_CLAN_HISTORY_DELETE}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            clan_history_delete_id: id
        };
        return fetchApi(url, method, body);
    }

    const accept_memory_delete = async (clan: string, id: number) => {
        const url = `${process.env.NEXT_PUBLIC_DB_ACCEPT_MEMORY_DELETE}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            memory_delete_id: id
        };
        return fetchApi(url, method, body);
    }

    const cancel_family_delete = async (clan: string, id: number) => {
        const url = `${process.env.NEXT_PUBLIC_DB_CANCEL_DELETE_FAMILY}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            family_delete_id: id
        };
        return fetchApi(url, method, body);
    }

    const cancel_partner_delete = async (clan: string, id: number) => {
        const url = `${process.env.NEXT_PUBLIC_DB_CANCEL_DELETE_PARTNER}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            partner_delete_id: id
        };
        return fetchApi(url, method, body);
    }

    const cancel_family_history_delete = async (clan: string, id: number) => {
        const url = `${process.env.NEXT_PUBLIC_DB_CANCEL_DELETE_FAMILY_HISTORY}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            family_history_delete_id: id
        };
        return fetchApi(url, method, body);
    }

    const cancel_clan_history_delete = async (clan: string, id: number) => {
        const url = `${process.env.NEXT_PUBLIC_DB_CANCEL_DELETE_CLAN_HISTORY}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            clan_history_delete_id: id
        };
        return fetchApi(url, method, body);
    }

    const cancel_memory_delete = async (clan: string, id: number) => {
        const url = `${process.env.NEXT_PUBLIC_DB_CANCEL_DELETE_MEMORY}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            memory_delete_id: id
        };
        return fetchApi(url, method, body);
    }

    const cancel_partner_edit = async (clan: string, id: number) => {
        const url = `${process.env.NEXT_PUBLIC_DB_CANCEL_PARTNER_EDIT}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            partner_edit_id: id
        };
        return fetchApi(url, method, body);
    }

    const cancel_family_edit = async (clan: string, id: number) => {
        const url = `${process.env.NEXT_PUBLIC_DB_CANCEL_FAMILY_EDIT}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            family_edit_id: id
        };
        return fetchApi(url, method, body);
    }

    const cancel_family_history_edit = async (clan: string, id: number) => {
        const url = `${process.env.NEXT_PUBLIC_DB_CANCEL_FAMILY_HISTORY_EDIT}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            family_history_edit_id: id
        };
        return fetchApi(url, method, body);
    }

    const cancel_clan_history_edit = async (clan: string, id: number) => {
        const url = `${process.env.NEXT_PUBLIC_DB_CANCEL_CLAN_HISTORY_EDIT}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            clan_history_edit_id: id
        };
        return fetchApi(url, method, body);
    }

    const cancel_memory_edit = async (clan: string, id: number) => {
        const url = `${process.env.NEXT_PUBLIC_DB_CANCEL_MEMORY_EDIT}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            memory_edit_id: id
        };
        return fetchApi(url, method, body);
    }

    const cancel_clan_details_edit = async (clan: string, id: number) => {
        const url = `${process.env.NEXT_PUBLIC_DB_CANCEL_CLAN_DETAILS_EDIT}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            clan_details_edit_id: id
        };
        return fetchApi(url, method, body);
    }

    const clan_details_comment = async (clan: string, id: number, details: string) => {
        const url = `${process.env.NEXT_PUBLIC_DB_CLAN_DETAILS_COMMENT}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            clan_details_edit_id: id,
            details: details
        };
        return fetchApi(url, method, body);
    }

    const family_comment = async (clan: string, id: number, details: string) => {
        const url = `${process.env.NEXT_PUBLIC_DB_FAMILY_COMMENT}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            family_edit_id: id,
            details: details
        };
        return fetchApi(url, method, body);
    }

    const partner_comment = async (clan: string, id: number, details: string) => {
        const url = `${process.env.NEXT_PUBLIC_DB_PARTNER_COMMENT}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            partner_edit_id: id,
            details: details
        };
        return fetchApi(url, method, body);
    }

    const delete_family_comment = async (clan: string, id: number, details: string) => {
        const url = `${process.env.NEXT_PUBLIC_DB_DELETE_FAMILY_COMMENT}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            family_delete_id: id,
            details: details
        };
        return fetchApi(url, method, body);
    }

    const delete_partner_comment = async (clan: string, id: number, details: string) => {
        const url = `${process.env.NEXT_PUBLIC_DB_DELETE_PARTNER_COMMENT}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            partner_delete_id: id,
            details: details
        };
        return fetchApi(url, method, body);
    }

    const delete_clan_history_comment = async (clan: string, id: number, details: string) => {
        const url = `${process.env.NEXT_PUBLIC_DB_DELETE_CLAN_HISTORY_COMMENT}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            clan_history_delete_id: id,
            details: details
        };
        return fetchApi(url, method, body);
    }

    const delete_family_history_comment = async (clan: string, id: number, details: string) => {
        const url = `${process.env.NEXT_PUBLIC_DB_DELETE_FAMILY_HISTORY_COMMENT}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            family_history_delete_id: id,
            details: details
        };
        return fetchApi(url, method, body);
    }

    const delete_memory_comment = async (clan: string, id: number, details: string) => {
        const url = `${process.env.NEXT_PUBLIC_DB_DELETE_MEMORY_COMMENT}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            memory_delete_id: id,
            details: details
        };
        return fetchApi(url, method, body);
    }

    const edit_clan_details_edit = async (clan: string, name: string, details: string, id: number) => {
        const url = `${process.env.NEXT_PUBLIC_DB_EDIT_CLAN_DETAILS_EDIT}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            name: name,
            details: details,
            clan_details_edit_id: id
        };
        return fetchApi(url, method, body);
    }

    return {
        edit_clan_details_edit,
        clan_details_comment,
        family_comment,
        partner_comment,
        delete_family_comment,
        delete_partner_comment,
        delete_clan_history_comment,
        delete_family_history_comment,
        delete_memory_comment,
        cancel_clan_details_edit,
        cancel_family_edit,
        cancel_partner_edit,
        cancel_family_history_edit,
        cancel_clan_history_edit,
        cancel_memory_edit,
        cancel_family_delete,
        cancel_partner_delete,
        cancel_family_history_delete,
        cancel_clan_history_delete,
        cancel_memory_delete,
        accept_family_delete,
        accept_partner_delete,
        accept_family_history_delete,
        accept_clan_history_delete,
        accept_memory_delete,
        accept_family_edit,
        accept_partner_edit,
        accept_clan_details_edit,
        edit_family_edit,
        edit_partner_edit,
        delete_family,
        delete_partner,
        delete_family_history,
        delete_clan_history,
        delete_memory,
        edit_partner,
        edit_family,
        edit_family_history_edit,
        accept_family_history_edit,
        accept_memory_history_edit,
        edit_memory_edit,
        edit_clan_history_edit,
        accept_clan_history_edit,
        edit_clan_details,
        get_clan_details,
        record_family_story,
        get_ancestral_tree,
        register_partner,
        get_parent,
        register_person,
        post_comment,
        record_memory,
        get_memory,
        get_edits,
        edit_clan_history,
        edit_family_history,
        edit_memory,
        record_history,
        officer_check,
        clan_join_request,
        accept_join_request,
        get_history
    }
}
