
import { useState, type ReactNode } from "react";
import { Header } from "../header/header";
import { Logo } from "../logo/logo";
import { Footer } from "../footer/footer";
import { Navbar } from "../navbar/navbar";
import { getOptions } from "@core/router/routes";
import { constants } from "@core/utils/constants";



type Props = {
    readonly Title: string;
    readonly subTitle: string;
    readonly children: ReactNode;

};

export const Layout: React.FC<Props> = ({Title, subTitle, children}) => {

    const token = localStorage.getItem(constants.tokenKey);
    let initialLoginState = false;

    if (token !== null && token !== "") {
        initialLoginState = true;
    }
    const [islogged, setIslogged] = useState<boolean>(initialLoginState)
    const options = getOptions()


    const handleLogout = (): void =>{
        localStorage.removeItem(constants.tokenKey);
        setIslogged(false);
        

    }
    return (
        <>
        
            <Header title={Title} subTitle={subTitle}>
                <Navbar
                islogged={islogged}
                onLogout={handleLogout}
                options={options}
                />
                <Logo/>
            </Header>
            <main> {children} </main>

            <Footer/>

        </>
    );
};