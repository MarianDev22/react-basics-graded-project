import { Card } from "@core/components/card/card";
import NotFoundPage from "@core/components/NotFound/NotFoundPage";
import repo from "@features/menu-items/services/products-service";
import type { MenuItem } from "@features/menu-items/types/menu-item";
import type React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";



export const MenuItemDetail: React.FC = () =>{

    const {id} = useParams()
    const navigate = useNavigate()

    const [menuItem, setMenuItem] = useState<MenuItem|null>(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        const loadDetail =  async (): Promise<void> => {
            if(!id) return;
            try {
                const item = await repo.getMenuItemById(id)
                setMenuItem(item);
                console.log(item)
                
            } catch (error) {
                setError(true);
            }
        }
        loadDetail();
    }, [id]);
    if (error) {return (
        <NotFoundPage/>
    )} else return(
        <Card>
            <div>
                <p>Detalles del plato con id:{id}</p>
                <p>Nombre: {menuItem?.name}</p>
                <p>Precio: {menuItem?.price}</p>
                <p>{menuItem?.isOnSale? (''):('Recomendación del día')}</p>
                <p>Descripción: {menuItem?.description}</p>

                {menuItem?.image && (
                    <div className="mb-3">
                        <img 
                        src={menuItem.image} 
                        alt={menuItem.name} 
                        className="img-fluid rounded" 
                        style={{ maxWidth: '100%', height: 'auto', maxHeight: '400px' }} 
                        />
                    </div>
                    )}
                
                <p>Categorías: {menuItem?.tags}</p>
                <Link to={`/products`}>
                <button>Volver</button>
                </Link>
            </div>
        </Card>
    )
}