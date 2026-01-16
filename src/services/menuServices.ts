import { MenuItem, Category } from '@/types/types';

const STORAGE_KEY = 'tabletop_manager_menu_v1';

const INITIAL_MENU: MenuItem[] = [
  {
    id: '1',
    name: 'Truffle Mushroom Risotto',
    description: 'Creamy arborio rice cooked with wild mushrooms and finished with truffle oil and parmesan.',
    price: 24.00,
    category: Category.MAIN,
    imageUrl: 'https://images.unsplash.com/photo-1622115837997-90c89ae689f9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isAvailable: true,
    ingredients: ['Arborio Rice', 'Wild Mushrooms', 'Truffle Oil', 'Parmesan']
  },
  {
    id: '2',
    name: 'Spicy Tuna Tartare',
    description: 'Fresh tuna tossed with chili, sesame oil, and avocado, served with crispy wonton chips.',
    price: 18.00,
    category: Category.APPETIZER,
    imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isAvailable: true,
    ingredients: ['Tuna', 'Chili', 'Sesame Oil', 'Avocado', 'Wonton']
  },
  {
    id: '3',
    name: 'Molten Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla bean ice cream.',
    price: 12.00,
    category: Category.DESSERT,
    imageUrl: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isAvailable: true,
    ingredients: ['Dark Chocolate', 'Butter', 'Eggs', 'Sugar', 'Flour']
  }
];

export const getMenu = (): MenuItem[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_MENU));
    return INITIAL_MENU;
  }
  return JSON.parse(stored);
};

export const addMenuItem = (item: Omit<MenuItem, 'id'>): MenuItem => {
  const menu = getMenu();
  const newItem: MenuItem = {
    ...item,
    id: Date.now().toString(),
  };
  const updatedMenu = [...menu, newItem];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedMenu));
  return newItem;
};

export const deleteMenuItem = (id: string): void => {
  const menu = getMenu();
  const updatedMenu = menu.filter(item => item.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedMenu));
};

export const updateMenuItem = (updatedItem: MenuItem): void => {
  const menu = getMenu();
  const index = menu.findIndex(item => item.id === updatedItem.id);
  if (index !== -1) {
    menu[index] = updatedItem;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(menu));
  }
};
