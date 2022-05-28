import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { IFormInputs, schema } from ".";
import { Input } from "../../shared/styled-components/input.style";
import beeImg from "./../../assets/img/bee.svg";
const LoginView: any = ({ saveUser }: any) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInputs>({
        resolver: yupResolver(schema),
    });
    return (
        <section className="login-page">
            <img
                src={beeImg}
                alt="imagem abelha"
                aria-label="Desenho de abelha"
                className="login-page__bee"
            />

            <form className="login-page__form" data-testid="login-form">
                <span className="login-page__form-texts">
                    <p>Please, enter your full name below</p>
                    <p>Only alphabetical characters are accepted</p>
                </span>
                <div className="login-page__form-control">
                    <Input
                        type="text"
                        data-testid="full_name"
                        placeholder="Full name"
                        {...register("full_name")}
                    />
                    <b className="input-error-msg">
                        {errors.full_name?.message}
                    </b>
                </div>

                <div className="login-page__form-control login-page__form-control--checkbox">
                    <input
                        type="checkbox"
                        id="older"
                        {...register("is_older")}
                        data-testid="is_older"
                    />
                    <label htmlFor="older">
                        Are you older than 18 years old?
                    </label>
                </div>

                <button
                    className="login-page__form-button"
                    type="submit"
                    role="button"
                >
                    Enter
                </button>
            </form>
        </section>
    );
};

export default LoginView;
