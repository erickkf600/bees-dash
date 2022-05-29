import React from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "../pages/Home/home.router";
import { Login } from "../pages/Login/login.router";
import Header from "../shared/Header";
import { useSaveData } from "../shared/providers/UserData.provider";
export const Bootstrap = () => {
    const navigate = useNavigate();
    const { hasAuth } = useSaveData();
    return (
        <>
            {!!hasAuth && <Header navigate={navigate} />}
            <div className="content">
                <Routes>
                    <Route
                        path="/home"
                        element={<Home navigate={navigate} />}
                    />
                    <Route
                        path="/login"
                        element={<Login navigate={navigate} />}
                    />

                    <Route path="/" element={<Navigate to="/home" replace />} />
                    <Route path="*" element={<Navigate to="/home" replace />} />
                </Routes>
            </div>
        </>
    );
};
