
import type { MenuItem, MenuItemDTO} from "@features/menu-items/types/menu-item";
import type React from "react";
import { useState } from "react";

type Props = {
    item: MenuItem | null;
    onClose: (menuItem: MenuItem | null, isEditing?: boolean) => void;
};

export const newMenuItem: MenuItemDTO = {
    name: "",
    price: 0,
    description:"",
    isOnSale: false,
    image:"",
    tags: []
} 

export const MenuItemForm: React.FC<Props>= ({item, onClose}) =>{
    const isEditing = Boolean(item)
    const [menuItem, setMenuItem] = useState<any>(() => {
        if(item) {
            return {...item, tags: (item.tags || []).join(',') as any};
        } 
        return {...newMenuItem, tags:''}
    });
    

    const handleSubmit = (event:React.FormEvent):void =>{
        event.preventDefault();
        const finalTags = typeof menuItem.tags === 'string'
        ? (menuItem.tags as string).split(',').map(tag => tag.trim()).filter(tag => tag != "")
        : menuItem.tags

        const finalData ={
            ...menuItem,
            tags: finalTags
        };

        onClose(finalData, isEditing);

    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void => {
        const {name, value, type} = event.target;
        const finalValue = type === 'checkbox'
        ? (event.target as HTMLInputElement).checked: type === 'number'? Number(value):value
        setMenuItem({
            ...menuItem,
            [name]: finalValue,
        })
    }

    const handleCancel = (): void => {
        onClose(null);
    };
    
    return(
        <form onSubmit={handleSubmit} className="p-3 border rounded bg-light">
            <h3>{item ? "Editar Plato" : "Nuevo Plato"}</h3>
            <div className="mb-3">
                <label htmlFor="name" className="form-label ">Nombre del plato</label>
                    <input 
                        className="form-control"
                        type="text"
                        name="name"
                        value={menuItem.name} 
                        onChange={handleChange} 
                    />
                <label htmlFor="price" className="form-label">Precio del plato</label>
                    <input
                        className="form-control"
                        type="number" 
                        name="price"
                        value={menuItem.price} 
                        onChange={handleChange} 
                    />
                <label htmlFor="description" className="form-label">Descripción</label>
                    <textarea
                        className="form-control"
                        name="description"
                        value={menuItem.description} 
                        onChange={handleChange} 
                    />
                <label htmlFor="isOnSale" className="form-check-label">¿Es recomendación del día?</label>
                    <input
                        className="form-check-input"
                        type="checkbox" 
                        name="isOnSale"
                        checked={menuItem.isOnSale} 
                        onChange={handleChange} 
                    />
                <label htmlFor="image" className="form-check-label">Imagen</label>
                    <input
                        className="form-control"
                        type="text" 
                        name="image"
                        value={menuItem.image} 
                        onChange={handleChange} 
                        placeholder="URL de la imagen"
                    />
                <label htmlFor="tags" className="form-check-label">Categorías</label>
                    <input
                        className="form-control"
                        type="text" 
                        name="tags"
                        value={menuItem.tags}
                        onChange={handleChange} 
                        placeholder="Utilice comas. Ej: vegano, picante, postre"
                    />

            </div>
            <div className="btn-group"></div>

            <button type="submit" className="btn btn-primary me-2">Guardar</button>
            <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancelar</button>
</form>
    );
};
 