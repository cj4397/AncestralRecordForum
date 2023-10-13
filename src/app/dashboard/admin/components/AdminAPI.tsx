import React from 'react'
import { useAuth } from '@/app/components/auth';

export default function AdminAPI() {
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



    const clan_proposals = async () => {
        const url = `${process.env.NEXT_PUBLIC_DB_CLAN_PROPOSALS}`;
        const method = "POST";
        const body = {
            token: token,
        };
        return fetchApi(url, method, body);
    }


    const clan_creation = async (id: number) => {
        const url = `${process.env.NEXT_PUBLIC_DB_CLAN_CREATION}`;
        const method = "POST";
        const body = {
            token: token,
            clan_request_id: id
        };
        return fetchApi(url, method, body);
    }

    const branch_creation = async (id: number) => {
        const url = `${process.env.NEXT_PUBLIC_DB_BRANCH_CREATION}`;
        const method = "POST";
        const body = {
            token: token,
            branch_request_id: id
        };
        return fetchApi(url, method, body);
    }


    return {
        clan_creation,

        clan_proposals,
        branch_creation
    }
}
