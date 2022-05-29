import React from "react";
import * as yup from "yup";
import { LocalStorage } from "../../enums/localstorage.enum";
import { useSaveData } from "../../shared/providers/UserData.provider";
import "./login.scss";
import LoginView from "./login.view";

export interface IFormInputs {
    full_name: string;
    is_older: number;
}

export const schema = yup.object().shape({
    full_name: yup.string().required("Este campo é obrigatório"),
    is_older: yup
        .bool()
        .oneOf([true], "É nesecessário declarar ser maior de 18"),
});
const Login = (props: any) => {
    const { setData } = useSaveData();
    const saveUser = (data: IFormInputs) => {
        try {
            setData({ full_name: data.full_name });
            localStorage.setItem(
                LocalStorage.NAME,
                JSON.stringify({ full_name: data.full_name })
            );
            props.navigate("/home");
        } catch (error) {
            /* istanbul ignore next */
            console.error(error);
        }
    };
    return <LoginView saveUser={(data: IFormInputs) => saveUser(data)} />;
};

export default Login;
