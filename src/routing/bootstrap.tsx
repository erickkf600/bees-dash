import React from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "../pages/Home/home.router";
import { Login } from "../pages/Login/login.router";
import Header from "../shared/components/Header";
import { useSaveData } from "../shared/providers/UserData.provider";
import { DisableAccess, PrivateRoute } from "./private-router";
export const Bootstrap = () => {
    const navigate = useNavigate();
    const { hasAuth } = useSaveData();
    return (
        <>
            {!!hasAuth && <Header navigate={navigate} />}
            <div className="content">
                <Routes>
                    <Route element={<DisableAccess hasAuth={hasAuth} />}>
                        <Route
                            path="/login"
                            element={<Login navigate={navigate} />}
                        />
                    </Route>
                    <Route element={<PrivateRoute hasAuth={hasAuth} />}>
                        <Route
                            path="/home"
                            element={<Home navigate={navigate} />}
                        />

                        <Route
                            path="/"
                            element={<Navigate to="/home" replace />}
                        />
                        <Route
                            path="*"
                            element={<Navigate to="/home" replace />}
                        />
                    </Route>
                </Routes>
            </div>
        </>
    );
};
