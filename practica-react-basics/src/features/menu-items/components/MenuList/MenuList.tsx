import type React from "react";
import method from "@features/menu-items/services/products-service"
import { useEffect, useState } from "react";
import type { MenuItem } from "@features/menu-items/types/menu-item";
import { Card } from "@core/components/card/card";

export const MenuList: React.FC = () =>{
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

    useEffect(() => {
        const loadList =  async (): Promise<void> => {
            try {
                const data = await method.getMenuList()
                setMenuItems(data);
                
            } catch (error) {
                alert("error")
            }
        }
        loadList();
    }, []);
    
    return(
        <>
        {menuItems.map((item) => (
        <Card key={item.id}>{item.name}</Card>
        ))}        
        </>
    )
}

export default MenuList