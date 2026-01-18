import { constants } from "@core/utils/constants";
import type { LoginDTO, RegisterDTO } from "../types/auth";

const authenticateUrl = import.meta.env.VITE_AUTH_URL

export const loginService = async (loginData: LoginDTO) => {
    const response = await fetch(authenticateUrl + "/login", {
        method: "POST",
        body:JSON.stringify(loginData),
        headers: {
            "Content-type": "application/json",
        },
    });
   
    if(!response.ok) {
        throw new Error(
            response.status.toString() + `-` + response.statusText
        );        
    }
     const data = await response.json();
    localStorage.setItem(constants.tokenKey,data.accessToken);
    console.log("token guardado", data.accessToken)


}

export const registerService = async (loginData: RegisterDTO) => {
    const response = await fetch(authenticateUrl + "/register", {
        method: "POST",
        body:JSON.stringify(loginData),
        headers: {
            "Content-type": "application/json",
        },
    });
   
    if(!response.ok) {
        throw new Error(
            response.status.toString() + `-` + response.statusText
        );        
    }
    const data = await response.json();
    localStorage.setItem(constants.tokenKey,data.token);
    console.log(data.token)


}