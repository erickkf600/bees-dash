/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useContext, useEffect, useState } from "react";
import { LocalStorage } from "../../enums/localstorage.enum";

export const UserDataContext = createContext<{
    data: { full_name: string } | null;
    setData: Function;
}>({
    data: null,
    setData: () => {},
});

export const UserDataProvider = (props: any) => {
    const [data, setData] = useState<{ full_name: string } | null>(null);

    const storage: { full_name: string } = JSON.parse(
        localStorage.getItem(LocalStorage.NAME) || "{}"
    );
    useEffect(() => {
        setData(storage);
    }, []);
    return (
        <UserDataContext.Provider value={{ data, setData }}>
            {props.children}
        </UserDataContext.Provider>
    );
};
export default UserDataProvider;

export const useSaveData = () => useContext(UserDataContext);
