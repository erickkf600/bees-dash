import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import Routing from "./routing";
import UserDataProvider from "./shared/providers/UserData.provider";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <UserDataProvider>
        <Routing />
    </UserDataProvider>
);

reportWebVitals();
