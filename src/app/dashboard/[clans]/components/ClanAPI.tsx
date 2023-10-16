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

    const edit_history = async (clan: string, id: number, title: string, details: string) => {
        const url = `${process.env.NEXT_PUBLIC_DB_EDIT_HISTORY}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
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


    return {
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
        edit_history,
        record_history,
        officer_check,
        clan_join_request,
        accept_join_request,
        get_history
    }
}
