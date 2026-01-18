import type React from "react";

import { Card } from "@core/components/card/card";
import { useId, useState } from "react";
import type { LoginDTO } from "../types/auth";
import { loginService } from "../services/auth-service";
import { Link } from "react-router";




const login: LoginDTO = {
    username: "",
    password: "",
    rememberMe: false,
};

export const LoginPage: React.FC = () => {

    const [userData, setUserData] = useState<LoginDTO>(login);

    const usernameId = useId();
    const passwordId = useId();
    const rememberMeId = useId();

    const handleSubmit: React.FormEventHandler = async (event) => {
        event.preventDefault();
        try {
            await loginService({
                username: userData.username,
                password: userData.password
            });
            window.location.href='/products'
        } catch (error) {
            alert ("Login incorrecto")
        }
    };

    const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = (
        event
    ) => {
        const { value, name, type } = event.target;
        const checked = type === 'checkbox' ? event.target.checked : '';
        setUserData({
            ...userData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-10 col-md-6 col-lg-4">
                    <Card title="Login">
                        <form onSubmit={handleSubmit}>
                            <div className="group-control">
                                <label htmlFor={usernameId}>
                                    <span
                                        style={{ display: "inline-block", width: "6rem" }}
                                    >
                                        Usuario:
                                    </span>
                                    <input
                                        type="username"
                                        name="username"
                                        id={usernameId}
                                        placeholder="Dime tu usuario"
                                        aria-label="username"
                                        required
                                        value={userData.username}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                            <div className="group-control">
                                <label htmlFor={passwordId}>
                                    <span
                                        style={{ display: "inline-block", width: "6rem" }}
                                    >
                                        Contraseña:
                                    </span>
                                    <input
                                        type="password"
                                        name="password"
                                        id={passwordId}
                                        placeholder="Dime tu password"
                                        aria-label="password"
                                        required
                                        minLength={5}
                                        value={userData.password}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                            <div>
                                <label htmlFor={rememberMeId}>
                                    <input
                                        type="checkbox"
                                        name="rememberMe"
                                        id={rememberMeId}
                                        aria-label="rememberMe"
                                        checked={userData.rememberMe}
                                        onChange={handleChange}
                                    />
                                    <span style={{ marginLeft: "0.5rem" }}>Recuérdame</span>
                                </label>
                            </div>
                            <div>
                                <button className= "btn btn-primary" type="submit">Enviar</button>
                            </div>
                            <div>
                                <Link to="/"className= "bbtn btn-outline-secondary" type="submit">Volver</Link>
                            </div>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default LoginPage