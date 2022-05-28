import React from "react";
import { BrowserRouter, Redirect, Switch } from "react-router-dom";
import { Pages } from "./pages";
import RouteSwitching from "./routes-switching";

const Routing = () => {
    return (
        <BrowserRouter>
            <div className="content">
                <Switch>
                    {RouteSwitching(Pages)}
                    <Redirect from="/" to="/home" />
                    <Redirect from="*" to="/home" />
                </Switch>
            </div>
        </BrowserRouter>
    );
};
export default Routing;
