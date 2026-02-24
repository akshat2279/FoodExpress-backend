import { menuItems } from '../models/MenuItem';
import { ResponseObject } from '../../../types/response';
import { API_RESPONSE_MSG } from '../../../constants/messages';

class MenuService {
  static response: ResponseObject;

  /**
   * This function is for getting all menu items with pagination
   * @param offset - Page number (default: 0)
   * @param limit - Number of items per page (default: 10)
   */
  static async getMenu(offset: number = 0, limit: number = 10) {
    try {
      const totalItems = menuItems.length;
      
      // Apply pagination using skip logic: skip = offset * limit
      const skip = Number(limit * offset);
      const paginatedItems = menuItems.slice(skip, skip + Number(limit));

      if (paginatedItems) {
        this.response = {
          data: paginatedItems,
          message: API_RESPONSE_MSG.success,
          success: true,
        };
      } else {
        this.response = {
          success: false,
          message: API_RESPONSE_MSG.fail_to_fetch_menu,
        };
      }
      return this.response;
    } catch (error) {
      return {
        success: false,
        message: API_RESPONSE_MSG.failed,
      };
    }
  }

  /**
   * This function is for getting menu item by id
   */
  static async getMenuItemById(id: string) {
    try {
      const result = menuItems.find(item => item.id === id);

      if (result) {
        this.response = {
          data: result,
          message: API_RESPONSE_MSG.success,
          success: true,
        };
      } else {
        this.response = {
          success: false,
          message: API_RESPONSE_MSG.menu_item_not_found,
        };
      }
      return this.response;
    } catch (error) {
      return {
        success: false,
        message: API_RESPONSE_MSG.failed,
      };
    }
  }
}

export default MenuService;
