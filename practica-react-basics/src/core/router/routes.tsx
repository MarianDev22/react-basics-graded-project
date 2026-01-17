
import { redirect, type RouteObject } from "react-router";
import { App } from "../../App";
import { Card } from "@core/components/card/card";
import React from "react";
import { MenuItemDetail } from "@features/menu-items/components/MenuItemDetail";
import { constants } from "@core/utils/constants";


const HomePage = React.lazy(() => import("@features/home/home-page"));
const MenuList = React.lazy(() => import("@features/menu-items/components/MenuList/MenuList"));
const LoginPage = React.lazy(()=> import("@features/auth/login/login"))
const RegisterPage = React.lazy(()=> import("@features/auth/register/register"))

const protectRoute = (): void => {
    const tokenKey = localStorage.getItem(constants.tokenKey)
    if(!tokenKey) {
        throw redirect('/login');
    }
}
export const routes: RouteObject[] = [
    {
        path: "/",
        Component: App,
        children:[
            {
                index: true,
                Component: HomePage,
            },
            {
                path: "/home",
                loader: (): void =>{
                    throw redirect('/products');
                },
                id: "Inicio",
            },
            {
                loader: protectRoute,
                path: "/products",
                Component: MenuList,
                id: "MenuList",
            },
             {
                loader: protectRoute,
                path: "/products/:id",
                Component: MenuItemDetail,
            },
            {
                path: "/login",
                Component: LoginPage,
                id: "Login",
            },
            {
                path: "/register",
                Component: RegisterPage,
                id: "Register",
            },
            {
                path: "*",
                Component: () => <Card>Página no encontrada</Card>,
            },
        ]
    },

];
