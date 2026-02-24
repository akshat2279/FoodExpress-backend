import MenuService from '../services/menuService';
import { menuItems } from '../models/MenuItem';

describe('MenuService', () => {
  describe('getMenu', () => {
    it('should return all menu items successfully', async () => {
      const result = await MenuService.getMenu();

      expect(result.success).toBe(true);
      expect(result.data).toBeDefined();
      expect(result.data).toHaveLength(menuItems.length);
      expect(result.message).toBe('Success');
    });

    it('should return menu items with correct structure', async () => {
      const result = await MenuService.getMenu();

      expect(result.data).toBeDefined();
      result.data?.forEach((item) => {
        expect(item).toHaveProperty('id');
        expect(item).toHaveProperty('name');
        expect(item).toHaveProperty('description');
        expect(item).toHaveProperty('price');
        expect(item).toHaveProperty('image');
      });
    });
  });

  describe('getMenuItemById', () => {
    it('should return a menu item when valid id is provided', async () => {
      const result = await MenuService.getMenuItemById('item-1');

      expect(result.success).toBe(true);
      expect(result.data).toBeDefined();
      expect(result.data?.id).toBe('item-1');
      expect(result.data?.name).toBe('Margherita Pizza');
    });

    it('should return error when menu item is not found', async () => {
      const result = await MenuService.getMenuItemById('invalid-id');

      expect(result.success).toBe(false);
      expect(result.message).toBe('Menu item not found');
    });

    it('should return correct menu item details', async () => {
      const result = await MenuService.getMenuItemById('item-2');

      expect(result.success).toBe(true);
      expect(result.data?.name).toBe('Chicken Burger');
      expect(result.data?.price).toBe(9.99);
    });
  });
});
