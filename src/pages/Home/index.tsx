import React from "react";
import { useSaveData } from "../../shared/providers/UserData.provider";
import "./home.scss";
import HomeView from "./home.view";

const Home = () => {
    const { data } = useSaveData();
    return (
        <>
            <HomeView name={data?.full_name} />
        </>
    );
};

export default Home;
