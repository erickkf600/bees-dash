import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute: any = ({ hasAuth }: any) => {
    return hasAuth ? <Outlet /> : <Navigate to="/login" />;
};
export const DisableAccess: any = ({ hasAuth }: any) => {
    return !hasAuth ? <Outlet /> : <Navigate to="/home" />;
};
