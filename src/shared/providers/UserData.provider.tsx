/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useContext, useEffect, useState } from "react";
import { LocalStorage } from "../../enums/localstorage.enum";

export const UserDataContext = createContext<{
    data: { full_name: string } | null;
    setData: Function;
    hasAuth: boolean;
    setAuth: Function;
}>({
    data: null,
    setData: () => {},
    hasAuth: false,
    setAuth: () => {},
});

export const UserDataProvider = (props: any) => {
    const [data, setData] = useState<{ full_name: string } | null>(null);
    const [hasAuth, setAuth] = useState<boolean>(false);

    const storage: { full_name: string } = JSON.parse(
        localStorage.getItem(LocalStorage.NAME) || "{}"
    );
    const auth: boolean = !!localStorage.getItem(LocalStorage.NAME);
    useEffect(() => {
        setData(storage);
        setAuth(auth);
    }, []);
    return (
        <UserDataContext.Provider value={{ data, setData, hasAuth, setAuth }}>
            {props.children}
        </UserDataContext.Provider>
    );
};
export default UserDataProvider;

export const useSaveData = () => useContext(UserDataContext);
