
import { redirect, type RouteObject } from "react-router";
import { App } from "../../App";
import { Card } from "@core/components/card/card";
import React from "react";
import { MenuItemDetail } from "@features/menu-items/components/MenuItemDetail";

const HomePage = React.lazy(() => import("@features/home/home-page"));
const MenuList = React.lazy(() => import("@features/menu-items/components/MenuList"));
const LoginPage = React.lazy(()=> import("@features/auth/login/login"))

const protectRoute = (): void => {
    const tokenKey = localStorage.getItem('token')
    if(!tokenKey) {
        throw redirect('/');
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
                    throw redirect('/');
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
                path: "*",
                Component: () => <Card>Página no encontrada</Card>,
            },
        ]
    },

];
