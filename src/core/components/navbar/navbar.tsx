//import type { MenuOption } from "@core/types/menu-option";

//import { Link } from "react-router";

// type Props = {
//     readonly options: MenuOption[];
// };

// export const Menu: React.FC<Props> = ({ options }) => {
//     return (
//         <nav>
//             <ul>
//                 {options.map((item) => (
//                     <li key={item.path}>
//                         <Link to={item.path}> {item.label}</Link>
//                     </li>
//                 ))}
//             </ul>
//         </nav>
//     );
// };



export const Menu: React.FC = () => {
    return (
        <nav>
            <ul>
                
                    <li >
                       <a href="/">Inicio</a>
                    </li>
                    <li >
                       <a href="/products">Platos del menú</a>
                    </li>
                    <li >
                       <a href="/login">Acceder</a>
                    </li>
               
            </ul>
        </nav>
    );
};