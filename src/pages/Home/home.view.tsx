import React from "react";

interface User {
    name: string | undefined;
}
const HomeView = ({ name }: User) => {
    return (
        <section className="content">
            <h1>HOME {name}</h1>
        </section>
    );
};

export default HomeView;
