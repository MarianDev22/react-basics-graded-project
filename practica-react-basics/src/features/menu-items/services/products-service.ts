import { constants } from "@core/utils/constants";
import type { MenuItem, MenuItemDTO } from "../types/menu-item";

const productsUrl = import.meta.env.VITE_API_URL + "/products";


const getAuthHeader = (): {
    Authorization: string;
} => {
    const token = localStorage.getItem(constants.tokenKey);
    if (!token) {
        throw new Error("Not Authorized");
    }
    return { Authorization: "Bearer " + token };
};

export const getMenuList = async (): Promise<MenuItem[]> => {
    const response: Response = await fetch(productsUrl, {
        headers: getAuthHeader(),
    });
    if (!response.ok) {
        throw new Error(
            response.status.toString() + ` - ` + response.statusText
        );
    }
    const data = await response.json();
    return data;
};

export const getMenuItemById = async (id: string): Promise<MenuItem> => {
    const response: Response = await fetch(productsUrl + "/" + id, {
        headers: getAuthHeader(),
    });
    if (!response.ok) {
        throw new Error(
            response.status.toString() + ` - ` + response.statusText
        );
    }
    const data = await response.json();
    return data;
};

// export const createMenuItem = async (
//     mitemData: MenuItemDTO
// ): Promise<MenuItem> => {
//     const response: Response = await fetch(productsUrl, {
//         method: "POST",
//         body: JSON.stringify(mitemData),
//         headers: {
//             ...getAuthHeader(),
//             "Content-Type": "application/json",
//         },
//     });
//     if (!response.ok) {
//         throw new Error(
//             response.status.toString() + ` - ` + response.statusText
//         );
//     }
//     const data = await response.json();
//     return data;
// };

// export const updateMenuItem = async (
//     id: MenuItem["id"],
//     mitemData: Partial<MenuItemDTO>
// ): Promise<MenuItem> => {
//     const response: Response = await fetch(productsUrl + "/" + id, {
//         method: "PATCH",
//         body: JSON.stringify(mitemData),
//         headers: {
//             ...getAuthHeader(),
//             "Content-Type": "application/json",
//         },
//     });
//     if (!response.ok) {
//         throw new Error(
//             response.status.toString() + ` - ` + response.statusText
//         );
//     }
//     const data = await response.json();
//     return data;
// };

export const deleteMenuItem = async (id: MenuItem["id"]): Promise<MenuItem> => {
    const response: Response = await fetch(productsUrl + "/" + id, {
        method: "DELETE",
        headers: getAuthHeader(),
    });
    if (!response.ok) {
        throw new Error(
            response.status.toString() + ` - ` + response.statusText
        );
    }
    const data = await response.json();
    return data;
};

export default {
    getMenuList,
     getMenuItemById,
//     createMenuItem,
//     updateMenuItem,
    deleteMenuItem,
};