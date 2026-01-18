
import { redirect, type RouteObject } from "react-router";
import { App } from "../../App";
import React from "react";
import { MenuItemDetail } from "@features/menu-items/components/menu-detail/MenuItemDetail";
import { constants } from "@core/utils/constants";
import type { MenuOption } from "@core/types/menu-option";



const HomePage = React.lazy(() => import("@features/home/home-page"));
const MenuList = React.lazy(() => import("@features/menu-items/components/menu-list/MenuList"));
const LoginPage = React.lazy(()=> import("@features/auth/login/login"));
const RegisterPage = React.lazy(()=> import("@features/auth/register/register"));
const NotFoundPage = React.lazy(() => import("@core/components/NotFound/NotFoundPage"))
const NewMenuItem = React.lazy(() => import("@features/menu-items/components/new-item/NewMenuItem"))

const protectRoute = (): void => {
    const tokenKey = localStorage.getItem(constants.tokenKey)
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
                    throw redirect('/products');
                },
            },
            {
                loader: protectRoute,
                path: "/products",
                Component: MenuList,
                id: "Lista de Platos",
            },
            {
                loader: protectRoute,
                path: "/products/:id",
                Component: MenuItemDetail,
            },
            {
                loader: protectRoute,
                path: "/products/new",
                Component: NewMenuItem,
                id:"Nuevo Plato"
            },
            {
                path: "/login",
                Component: LoginPage,
            },
            {
                path: "/register",
                Component: RegisterPage,
            },
            {
                path: "*",
                Component: NotFoundPage,
            },
        ]
    },

];

export const getOptions = (): MenuOption[] =>
    (routes[0].children as RouteObject[])
        .filter((route) => "id" in route)
        .map((route) => ({
            path: route.path as string,
            label: route.id as string,
        }));