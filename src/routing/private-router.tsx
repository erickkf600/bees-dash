import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useSaveData } from "../shared/providers/UserData.provider";

const PrivateRoute: any = (props: any) => {
    const { data } = useSaveData();

    return data ? <Route {...props} /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
