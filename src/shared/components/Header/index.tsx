import React from "react";
import { useSaveData } from "../../providers/UserData.provider";
import "./header.scss";
const Header = (props: any) => {
    const { data, setAuth } = useSaveData();

    const logout = () => {
        props.navigate("/login");
        localStorage.clear();
        setAuth(false);
    };
    return (
        <header className="header" data-testid="header">
            <button
                className="header__back"
                onClick={() => logout()}
                data-testid="logout"
            >
                Go Back
            </button>
            <p className="header__name">{data?.full_name}</p>
        </header>
    );
};

export default Header;
