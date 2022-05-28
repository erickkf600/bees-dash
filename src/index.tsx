import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import Routing from "./routing";
import TokenProvider from "./services/providers/Token.providers";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <TokenProvider>
        <Routing />
    </TokenProvider>
);

reportWebVitals();
