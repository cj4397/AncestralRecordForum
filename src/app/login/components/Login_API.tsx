


export default function Login_API() {


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
        return response.json();
    };

    const sign_up = async (first_name: string, middle_name: string, last_name: string, email: string, password: string) => {
        const url = `${process.env.NEXT_PUBLIC_DB_SIGN_UP}`;
        const method = "POST";
        const body = {
            first_name: first_name,
            middle_name: middle_name,
            last_name: last_name,
            email: email,
            password: password
        };

        return fetchApi(url, method, body);
    };

    const login = async (email: string, password: string) => {
        const url = `${process.env.NEXT_PUBLIC_DB_LOGIN}`;
        const method = "POST";
        const body = {
            email: email,
            password: password
        };

        return fetchApi(url, method, body);
    }

    return {

        sign_up,
        login
    };
}
