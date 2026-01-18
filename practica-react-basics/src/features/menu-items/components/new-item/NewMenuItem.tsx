import type React from "react";
import { MenuItemForm, newMenuItem } from "../menu-item-form/MenuItemForm";

import type { MenuItem, MenuItemDTO } from "@features/menu-items/types/menu-item";
import { useNavigate } from "react-router";

export const NewMenuItem: React.FC = () =>{
    const navigate = useNavigate()

    const handleCloseForm = (): void =>{
        navigate('/products')
    }

    return(
        
            <MenuItemForm item={(newMenuItem as MenuItemDTO)} onClose={handleCloseForm}/>
        
    )
}

export default NewMenuItem