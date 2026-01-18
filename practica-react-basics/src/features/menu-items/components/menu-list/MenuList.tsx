import type React from "react";
import repo from "@features/menu-items/services/products-service"
import { useEffect, useState } from "react";
import type { MenuItem } from "@features/menu-items/types/menu-item";
import { Card } from "@core/components/card/card";
import { Link } from "react-router";

export const MenuList: React.FC = () =>{
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
    const [filters, setFilters] = useState({
    search: '',
    maxPrice: '',
    tag: ''
});

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>{
        const { name, value } = event.target;

        setFilters(prev => ({
            ...prev,
            [name]: name === 'maxPrice' ? (value === ''? '': Number(value)): value
        }));
    }
    const filteredItems = menuItems.filter(item => 
        item.name.toLowerCase().includes(filters.search.toLowerCase()) &&
        (filters.maxPrice === '' || item.price <= Number(filters.maxPrice)) &&
        (filters.tag === '' || item.tags.includes(filters.tag))
    );

    const availTags = Array.from(new Set(menuItems.flatMap(item => item.tags)))


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
    


    return(
        <>
            <div className="container py-4">
                    <div className="row g-3 mb-4 p-3 bg-light rounded border">
                        <div className="col-md-4">
                            <input 
                                name="search" 
                                type="text" 
                                className="form-control" 
                                placeholder="Buscar por nombre..."
                                value={filters.search}
                                onChange={handleFilterChange}
                            />
                        </div>

                        <div className="col-md-4">
                            <input 
                                name="maxPrice" 
                                type="number" 
                                className="form-control" 
                                placeholder="Precio máximo (€)"
                                value={filters.maxPrice}
                                onChange={handleFilterChange}
                            />
                        </div>

                        <div className="col-md-4">
                            <select 
                                name="tag" 
                                className="form-select"
                                value={filters.tag}
                                onChange={handleFilterChange}
                            >
                                <option value="">Todas las categorías</option>
                                {availTags.map(tag => (
                                    <option className="text-capitalize" key={tag} value={tag}>
                                        {tag}
                                    </option>

                                ))}
                            </select>
                        </div>
                    </div>
                    {filteredItems.length === 0 ? (
                        <div className="text-center py-5">
                            <h3>No hay platos que coincidan</h3>
                            <p className="text-muted">Prueba a cambiar los filtros o el buscador.</p>
                        </div>
                    ): (

                        filteredItems.map((item) => (
                    <div key={item.id} className="col">
                        <Card className="shadow-sm h-100 border-0">
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title fw-bold">{item.name}</h5>
                                <p className="card-text text-primary fs-5">€{item.price}</p>
                                <Link to={`/products/${item.id}`}>
                                    <button className="btn btn-secondary me-2">Ver detalles</button>                
                                </Link>
                            </div>
                        </Card>
                    </div>
                
                        )

                    ))}
            </div>       
        </>
    );
}

export default MenuList