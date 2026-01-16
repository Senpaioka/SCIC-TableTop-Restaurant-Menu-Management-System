export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  imageUrl: string;
  isAvailable: boolean;
  ingredients?: string[];
}

export enum Category {
  APPETIZER = 'Appetizer',
  MAIN = 'Main Course',
  DESSERT = 'Dessert',
  BEVERAGE = "Beverage",
}

export interface User {
  id: string;
  role: 'admin' | 'staff' | 'customer';
  name: string;
}

export type NewMenuItem = Omit<MenuItem, 'id'>;
