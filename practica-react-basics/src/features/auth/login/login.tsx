import type React from "react";

// export const LoginPage: React.FC =() =>{
//     return(
//         <h2>Formulario de Login</h2>
//     )
// }

import { Card } from "@core/components/card/card";
import { useId, useState } from "react";

interface Login {
    email: string;
    password: string;
    rememberMe: boolean;
}

const login: Login = {
    email: "",
    password: "",
    rememberMe: false,
};

export const LoginPage: React.FC = () => {
    const [userData, setUserData] = useState<Login>(login);

    const emailId = useId();
    const passwordId = useId();
    const rememberMeId = useId();

    const handleSubmit: React.FormEventHandler = (event) => {
        event.preventDefault();
        console.log(userData);
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
        <Card title="Login">
            <form onSubmit={handleSubmit}>
                <div className="group-control">
                    <label htmlFor={emailId}>
                        <span
                            style={{ display: "inline-block", width: "6rem" }}
                        >
                            Email:
                        </span>
                        <input
                            type="email"
                            name="email"
                            id={emailId}
                            placeholder="Dime tu email"
                            aria-label="email"
                            required
                            value={userData.email}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className="group-control">
                    <label htmlFor={passwordId}>
                        <span
                            style={{ display: "inline-block", width: "6rem" }}
                        >
                            Password:
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
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </Card>
    );
};

export default LoginPage