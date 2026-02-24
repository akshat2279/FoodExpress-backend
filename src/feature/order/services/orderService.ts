import { v4 as uuidv4 } from 'uuid';
import { Order, OrderItem, Customer, OrderStatus } from '../models/Order';
import MenuService from '../../menu/services/menuService';
import { ResponseObject } from '../../../types/response';
import { API_RESPONSE_MSG } from '../../../constants/messages';

class OrderService {
  static response: ResponseObject;
  private static orders: Map<string, Order> = new Map();

  /**
   * This function is for creating a new order
   */
  static async createOrder(
    items: Array<{ menuItemId: string; quantity: number }>,
    customer: Customer
  ) {
    try {
      const orderItems: OrderItem[] = [];
      let total = 0;

      for (const item of items) {
        const menuItemResponse = await MenuService.getMenuItemById(item.menuItemId);
        
        if (!menuItemResponse.success || !menuItemResponse.data) {
          return {
            success: false,
            message: `${API_RESPONSE_MSG.menu_item_not_found}: ${item.menuItemId}`,
          };
        }

        const menuItem = menuItemResponse.data;
        const orderItem: OrderItem = {
          menuItemId: item.menuItemId,
          quantity: item.quantity,
          name: menuItem.name,
          price: menuItem.price
        };

        orderItems.push(orderItem);
        total += menuItem.price * item.quantity;
      }

      const order: Order = {
        id: uuidv4(),
        items: orderItems,
        customer,
        total: Math.round(total * 100) / 100,
        status: 'Order Received',
        createdAt: new Date()
      };

      this.orders.set(order.id, order);

      if (order) {
        this.response = {
          data: order,
          message: API_RESPONSE_MSG.order_created_successfully,
          success: true,
        };
      } else {
        this.response = {
          success: false,
          message: API_RESPONSE_MSG.fail_to_create_order,
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
   * This function is for getting order by id
   */
  static async getOrderById(id: string) {
    try {
      const result = this.orders.get(id);

      if (result) {
        this.response = {
          data: result,
          message: API_RESPONSE_MSG.success,
          success: true,
        };
      } else {
        this.response = {
          success: false,
          message: API_RESPONSE_MSG.order_not_found,
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
   * This function is for updating order status
   */
  static async updateOrderStatus(id: string, status: OrderStatus) {
    try {
      const order = this.orders.get(id);
      
      if (!order) {
        return undefined;
      }

      order.status = status;
      this.orders.set(id, order);
      return order;
    } catch (error) {
      return undefined;
    }
  }
}

export default OrderService;
