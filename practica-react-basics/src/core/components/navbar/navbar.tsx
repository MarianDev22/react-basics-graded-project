import type { MenuOption } from "@core/types/menu-option";

import { NavLink, useNavigate } from "react-router";

 type Props = {
    readonly options: MenuOption[];
    islogged: boolean;
    onLogout: () => void;
};



export const Navbar: React.FC<Props> = ({islogged, onLogout, options}) => {
    const navigate = useNavigate();

    const handleLogoutClick = () => {
        onLogout()
        navigate('/')
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
            <NavLink className="navbar-brand" to="/products">🍽️ Dashboard Platos</NavLink>
            <div className="navbar-nav ms-auto align-items-center">
            {islogged? (
                <>
                {options.map((option)=> (
                    <NavLink
                    key={option.path}
                    className="nav-link"
                    to={option.path}>
                        {option.label}
                    </NavLink>
                ))}
                <button
                className="btn btn-outline-danger ms-2" 
                onClick={handleLogoutClick} >
                    Cerrar Sesión
                </button>
                </>
            ) : (null)}
            </div>
        </nav>

);
}