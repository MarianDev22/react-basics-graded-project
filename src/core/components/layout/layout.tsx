
import type { ReactNode } from "react";
import { Header } from "../header/header";
import { Logo } from "../logo/logo";
import { Footer } from "../footer/footer";
import { Menu } from "../navbar/navbar";


type Props = {
    readonly Title: string;
    readonly subTitle: string;
    readonly children: ReactNode;
};

export const Layout: React.FC<Props> = ({Title, subTitle, children}) => {
    return (
        <>
        
            <Header title={Title} subTitle={subTitle}>
                <Menu/>
                <Logo/>
            </Header>
            <main> {children} </main>

            <Footer/>

        </>
    );
};