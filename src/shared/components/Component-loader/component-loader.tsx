import React from "react";
import "./component-loader.scss";

const ComponentLoader = () => {
    return (
        <section data-testid="loading" className="loader">
            <div className="loader__animation" data-testid="spinner"></div>
        </section>
    );
};

export default ComponentLoader;
