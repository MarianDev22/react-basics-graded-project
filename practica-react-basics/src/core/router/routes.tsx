import { HomePage } from "@features/home/home-page";
import type { RouteObject } from "react-router";
import App from "../../App";
import { MenuList } from "@features/menu-items/components/MenuList";
import { LoginPage } from "@features/auth/login/login";
import { Card } from "@core/components/card/card";

export const routes: RouteObject[] = [

    {
        path: "/",
        Component: App,
        children:[
            {
                index: true,
                Component: HomePage,
                id: "Inicio",
            },
            {
                path: "/products",
                Component: MenuList,
                id: "Products",
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
