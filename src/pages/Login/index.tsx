import React from "react";
import "./login.scss";
import * as yup from "yup";
import LoginView from "./login.view";

export interface IFormInputs {
    full_name: string;
    is_older: number;
}

export const schema = yup.object().shape({
    full_name: yup.string().required("Este campo é obrigatório"),
    is_older: yup.bool().required("Este campo é obrigatório"),
});
const Login = () => {
    const saveUser = (data: IFormInputs) => {
        console.log(data);
    };
    return (
        <>
            <LoginView saveUser={(data: IFormInputs) => saveUser(data)} />
        </>
    );
};

export default Login;
