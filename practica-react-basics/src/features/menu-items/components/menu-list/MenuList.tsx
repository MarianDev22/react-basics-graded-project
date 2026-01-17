import type React from "react";
import repo from "@features/menu-items/services/products-service"
import { useEffect, useState } from "react";
import type { MenuItem } from "@features/menu-items/types/menu-item";
import { Card } from "@core/components/card/card";
import { Link } from "react-router";

export const MenuList: React.FC = () =>{
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

    useEffect(() => {
        const loadList =  async (): Promise<void> => {
            try {
                const data = await repo.getMenuList()
                setMenuItems(data);
                
            } catch (error) {
                alert((error as Error).message)
            }
        }
        loadList();
    }, []);
    
    //const handleGoTo =(): void =>{}


    return(
        <>
            {menuItems.map((item) => (
            <div key={item.id} className="menu-item-container">
                <Card >
                    {item.name}
                    <Link to={`/products/${item.id}`}>
                        <button >Ver detalles</button>                
                    </Link>
                </Card>
            </div>

            ))}        
        </>
    );
}

export default MenuList