import React from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "../pages/Home/home.router";
import { Login } from "../pages/Login/login.router";
export const Bootstrap = () => {
    const navigate = useNavigate();

    return (
        <div className="content">
            <Routes>
                <Route path="/home" element={<Home navigate={navigate} />} />
                <Route path="/login" element={<Login navigate={navigate} />} />

                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
        </div>
    );
};
