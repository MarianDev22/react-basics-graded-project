import type React from "react";

import { Card } from "@core/components/card/card";
import { useId, useState } from "react";
import type { RegisterDTO } from "../types/auth";
import { registerService } from "../services/auth-service";




const newUser: RegisterDTO = {
    username: "",
    password: "",
    confirmPassword:"",
    email: "", 
    name: "",
    surname: ""

};

export const RegisterPage: React.FC = () => {

    const [formData, setformData] = useState<RegisterDTO>(newUser);
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);

    const usernameId = useId();
    const passwordId = useId();
    const confirmPasswordId = useId()
    const emailId = useId();
    const nameId = useId();
    const surnameId = useId();

    const handleSubmit: React.FormEventHandler = async (event) => {
        event.preventDefault();
        setError('');
        if (formData.password !== formData.confirmPassword) {
            setError('Las contraseñas no coinciden');
            return;
        }
        setIsLoading(true);

        try {
            await registerService({
                username: formData.username,
                password: formData.password,
                confirmPassword: formData.confirmPassword,
                email: formData.email,
                name: formData.name,
                surname: formData.surname
            });
            window.location.href='/products'
        } catch (error) {
            setError((error as Error).message);
            setIsLoading(false)
        }
    };

    const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = (
        event
    ) => {
        const { value, name } = event.target;
        setformData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <Card title="SignUp">
            <form onSubmit={handleSubmit}>
                {error && <div className="alert alert-danger text-danger mb-3">{error}</div>}
                <div className="group-control">
                    <label htmlFor={nameId}>
                        <span
                            style={{ display: "inline-block", width: "6rem" }}
                        >
                            Nombre:
                        </span>
                        <input
                            type="name"
                            name="name"
                            id={nameId}
                            placeholder="Nombre"
                            aria-label="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </label>
                </div>
               <div className="group-control">
                    <label htmlFor={surnameId}>
                        <span
                            style={{ display: "inline-block", width: "6rem" }}
                        >
                            Apellido:
                        </span>
                        <input
                            type="surname"
                            name="surname"
                            id={surnameId}
                            placeholder="Apellido"
                            aria-label="surname"
                            required
                            value={formData.surname}
                            onChange={handleChange}
                        />
                    </label>
                </div>
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
                            placeholder="nombre de usuario"
                            aria-label="username"
                            required
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor={emailId}>
                        <input
                            type="text"
                            name="email"
                            id={emailId}
                            aria-label="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <span style={{ marginLeft: "0.5rem" }}>email</span>
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
                            placeholder="Escriba contraseña de 8 caracteres"
                            aria-label="password"
                            required
                            minLength={8}
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className="group-control">
                    <label htmlFor={confirmPasswordId}>
                        <span
                            style={{ display: "inline-block", width: "6rem" }}
                        >
                            Confirmar Contraseña:
                        </span>
                        <input
                            type="password"
                            name="confirmPassword"
                            id={confirmPasswordId}
                            placeholder="confirma tu contraseña"
                            aria-label="confirmPassword"
                            required
                            minLength={8}
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                
                <div className="mt-3">
                    <button className="btn btn-primary" type="submit" disabled= {isLoading}>
                       {isLoading ? (
                            <>
                                <span className="spinner-border spinner-border-sm me-2"></span>
                                Enviando...
                            </>
                        ) : (
                            "Enviar"
                        )}
                    </button>
                </div>
            </form>
        </Card>
    );
};

export default RegisterPage