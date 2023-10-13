'use client';

import { useMemo, createContext, useContext } from "react";




import useLocalStorage from "./storage";

const initialState = {

    admin: false,
    name: '',
    token: '',
    get_info: (name: string, token: string, admin?: boolean, clans?: []) => { },
    logout: () => { },
};



const AuthContext = createContext(initialState);


export const useAuth = () => {
    return useContext(AuthContext);
};


export default function Auth(props: {
    children: React.ReactNode
}) {
    const [token, setToken] = useLocalStorage("Token", '');
    const [name, setName] = useLocalStorage("Name", '');
    const [admin, setAdmin] = useLocalStorage("Admin", '');
    const [clans, setClan] = useLocalStorage("Clans", []);




    const get_info = (name: string, token: string, admin?: boolean, clans?: []) => {
        setName(name)
        setToken(token)
        setAdmin(admin)

    }

    const logout = () => {

        setToken('');
        setName('');
        setAdmin('');

    };





    const value = useMemo(
        () => ({

            admin,
            name,
            token,
            get_info,
            logout,
        }),
        [token]
    );

    return <AuthContext.Provider value={value}> {props.children}</AuthContext.Provider>
}