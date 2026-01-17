export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  crew: number;
  isOnSale: boolean;
  tags: [];
};

export type MenuItemDTO = Omit<MenuItem, 'id'>