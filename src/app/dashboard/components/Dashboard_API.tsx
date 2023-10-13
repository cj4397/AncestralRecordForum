'use client'
import { useAuth } from "@/app/components/auth";

export default function Dashboard_API() {
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

    const admin_check = async () => {
        const url = `${process.env.NEXT_PUBLIC_DB_ADMIN}`;
        const method = "POST";
        const body = {
            token: token
        };
        return fetchApi(url, method, body);
    }

    const show_clans = async () => {
        const url = `${process.env.NEXT_PUBLIC_DB_SHOW_CLANS}`;
        const method = "POST";
        const body = {
            token: token
        };
        return fetchApi(url, method, body);
    }

    const get_clans = async () => {
        const url = `${process.env.NEXT_PUBLIC_DB_GET_CLANS}`;
        const method = "POST";
        const body = {
            token: token
        };
        return fetchApi(url, method, body);
    }

    const join_clan_request = async (clan: string, details: string) => {
        const url = `${process.env.NEXT_PUBLIC_DB_CLAN_JOIN_REQUEST}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            details: details
        };
        return fetchApi(url, method, body);
    }

    const clan_creation_request = async (clan_name: string) => {
        const url = `${process.env.NEXT_PUBLIC_DB_CLAN_CREATION_REQUEST}`;
        const method = "POST";
        const body = {
            token: token,
            clan_name: clan_name

        };
        return fetchApi(url, method, body);
    }

    const branch_creation_request = async (clan: string, branch_name: string) => {
        const url = `${process.env.NEXT_PUBLIC_DB_BRANCH_CREATION_REQUEST}`;
        const method = "POST";
        const body = {
            token: token,
            clan: clan,
            branch_name: branch_name

        };
        return fetchApi(url, method, body);
    }


    return {
        branch_creation_request,
        clan_creation_request,
        admin_check,
        show_clans,
        get_clans,
        join_clan_request,

    }
}
