import type React from "react";
import { MenuItemForm } from "../menu-item-form/MenuItemForm";
import repo from "@features/menu-items/services/products-service"
import type { MenuItemDTO } from "@features/menu-items/types/menu-item";
import { useNavigate } from "react-router";

export const NewMenuItem: React.FC = () =>{
    const navigate = useNavigate()

 
    const handleCloseForm = async (menuItemData:MenuItemDTO | null ): Promise<void> =>{
            if(menuItemData){
                try {
                    const newItem = await repo.createMenuItem(menuItemData);                    
                    navigate(`/products/${newItem.id}`)
                } catch (error) {
                    alert((error as Error).message)
                }
            } else{ navigate('/products')}
        }

    return(
        
            <MenuItemForm item={null} onClose={handleCloseForm}/>
        
    )
}

export default NewMenuItem