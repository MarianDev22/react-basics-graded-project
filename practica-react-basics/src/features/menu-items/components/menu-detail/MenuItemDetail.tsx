import { Card } from "@core/components/card/card";
import NotFoundPage from "@core/components/NotFound/NotFoundPage";
import repo from "@features/menu-items/services/products-service";
import type { MenuItem } from "@features/menu-items/types/menu-item";
import type React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import "@features/menu-items/components/menu-detail/MenuItemDetail.css"




export const MenuItemDetail: React.FC = () =>{

    const {id} = useParams()
    const [menuItem, setMenuItem] = useState<MenuItem|null>(null);
    const [error, setError] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false)
    const navigate = useNavigate()

    const handleDelete = async() =>{
        if(!id)return;
        try {
            await repo.deleteMenuItem(id)
            navigate('/products')
            
        } catch (error) {
            alert((error as Error).message)
        }
    }



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
        <Card className="card shadow-sm h-100">
            <div>
                <h2 className="card-title fw-bold">{menuItem?.name}</h2>
                <p className="card-text text-muted  fs-5 small">{menuItem?.description}</p>
                <div className="align-items-center">
    			  <span className="fw-bold fs-4">{menuItem?.price}€</span>
                </div>
                <p className="card-text fw-bold text-success fs-6 small">{menuItem?.isOnSale? (''):('Recomendación del día')}</p>
                {menuItem?.image && (
                    <div className="mb-3">
                        <img 
                            src={menuItem.image ? menuItem.image : 'https://placehold.co/600x400?text=Plato+sin+foto'} 
                            alt={menuItem.name} 
                            className="img-fluid rounded product-image-detail" 
                        />
                    </div>
                    )}
                <div className="mb-3">
                    {menuItem?.tags.map(tag => (
                        <span key={tag} className="badge bg-info me-1">{tag}</span>
                    ))}
                </div>
                
                <div className="admin-actions mt-4 border-top pt-3">
                    <Link to={`/products`}>
                        <button className="btn btn-secondary me-2" >Volver</button>
                    </Link>
                    {!isDeleting ? (
                        <>
                            <button 
                                className="btn btn-warning me-2" 
                              /*  onClick={() => navigate(`/products/edit/${id}`)}*/ >
                                Editar Plato
                            </button>
                            <button 
                                className="btn btn-danger" 
                                onClick={() => setIsDeleting(true)}
                            >
                                Borrar Plato
                            </button>
                        </>
                    ) : (
                        <div className="alert alert-warning">
                            <p>¿Estás seguro de que quieres eliminar este plato?</p>
                            <button className="btn btn-danger me-2" onClick={handleDelete}>
                                Sí, eliminar
                            </button>
                            <button className="btn btn-secondary" onClick={() => setIsDeleting(false)}>
                                Cancelar
                            </button>
                        </div>
                    )}
                </div>

            </div>
        </Card>
    )
}