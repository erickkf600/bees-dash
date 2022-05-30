import React, { useEffect, useState } from "react";
import { InfoCards } from "../../interfaces/info-cards";
import * as request from "./../../services/http/app.get";
import "./home.scss";
import HomeView from "./home.view";

const Home = () => {
    const [content, setContent] = useState<InfoCards[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        getContactInfos();
    }, []);
    const getContactInfos = async () => {
        await request
            .getInfos()
            .then((res: InfoCards[]) => {
                setContent(res);
                setLoading(false);
            })
            .catch((err: any) => {
                console.error(err);
            });
    };

    /* istanbul ignore next */
    const deleteCard = (index: number) => {
        setContent(content.filter((_c: any, i: number) => i !== index));
    };
    return (
        <>
            <HomeView
                content={content}
                loading={loading}
                deleteCard={(index: number) => deleteCard(index)}
            />
        </>
    );
};

export default Home;
