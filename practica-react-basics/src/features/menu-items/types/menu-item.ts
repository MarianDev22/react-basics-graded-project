export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  isOnSale: boolean;
  tags: string[];
  image: string
};

export type MenuItemDTO = Omit<MenuItem, 'id'>