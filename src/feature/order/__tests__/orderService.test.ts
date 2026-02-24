import OrderService from '../services/orderService';
import { Customer } from '../models/Order';

describe('OrderService', () => {
  beforeEach(() => {
    // Clear orders before each test
    OrderService.getAllOrders().forEach(order => {
      // Reset the orders map by creating a new instance would be ideal
      // For now, we'll work with the existing orders
    });
  });

  describe('createOrder', () => {
    const validCustomer: Customer = {
      name: 'John Doe',
      address: '123 Main St',
      phone: '555-0123',
    };

    const validItems = [
      { menuItemId: 'item-1', quantity: 2 },
      { menuItemId: 'item-2', quantity: 1 },
    ];

    it('should create an order successfully with valid data', async () => {
      const result = await OrderService.createOrder(validItems, validCustomer);

      expect(result.success).toBe(true);
      expect(result.data).toBeDefined();
      expect(result.data?.id).toBeDefined();
      expect(result.data?.status).toBe('Order Received');
      expect(result.data?.customer).toEqual(validCustomer);
      expect(result.message).toBe('Order created successfully');
    });

    it('should calculate total price correctly', async () => {
      const result = await OrderService.createOrder(validItems, validCustomer);

      expect(result.data?.total).toBeDefined();
      // item-1: 12.99 * 2 = 25.98
      // item-2: 9.99 * 1 = 9.99
      // Total: 35.97
      expect(result.data?.total).toBe(35.97);
    });

    it('should include item details in order', async () => {
      const result = await OrderService.createOrder(validItems, validCustomer);

      expect(result.data?.items).toHaveLength(2);
      expect(result.data?.items[0]).toHaveProperty('name');
      expect(result.data?.items[0]).toHaveProperty('price');
      expect(result.data?.items[0]).toHaveProperty('quantity');
    });

    it('should return error when menu item does not exist', async () => {
      const invalidItems = [{ menuItemId: 'invalid-id', quantity: 1 }];

      const result = await OrderService.createOrder(invalidItems, validCustomer);

      expect(result.success).toBe(false);
      expect(result.message).toContain('Menu item not found');
    });

    it('should generate unique order IDs', async () => {
      const result1 = await OrderService.createOrder(validItems, validCustomer);
      const result2 = await OrderService.createOrder(validItems, validCustomer);

      expect(result1.data?.id).not.toBe(result2.data?.id);
    });

    it('should set createdAt timestamp', async () => {
      const result = await OrderService.createOrder(validItems, validCustomer);

      expect(result.data?.createdAt).toBeDefined();
      expect(result.data?.createdAt).toBeInstanceOf(Date);
    });
  });

  describe('getOrderById', () => {
    it('should retrieve an existing order', async () => {
      const customer: Customer = {
        name: 'Jane Doe',
        address: '456 Oak Ave',
        phone: '555-0456',
      };
      const items = [{ menuItemId: 'item-3', quantity: 1 }];

      const createResult = await OrderService.createOrder(items, customer);
      const orderId = createResult.data?.id;

      const result = await OrderService.getOrderById(orderId!);

      expect(result.success).toBe(true);
      expect(result.data?.id).toBe(orderId);
      expect(result.data?.customer.name).toBe('Jane Doe');
    });

    it('should return error when order does not exist', async () => {
      const result = await OrderService.getOrderById('non-existent-id');

      expect(result.success).toBe(false);
      expect(result.message).toBe('Order not found');
    });
  });

  describe('updateOrderStatus', () => {
    it('should update order status successfully', async () => {
      const customer: Customer = {
        name: 'Test User',
        address: '789 Pine St',
        phone: '555-0789',
      };
      const items = [{ menuItemId: 'item-1', quantity: 1 }];

      const createResult = await OrderService.createOrder(items, customer);
      const orderId = createResult.data?.id;

      const updatedOrder = await OrderService.updateOrderStatus(orderId!, 'Preparing');

      expect(updatedOrder).toBeDefined();
      expect(updatedOrder?.status).toBe('Preparing');
    });

    it('should return undefined when order does not exist', async () => {
      const result = await OrderService.updateOrderStatus('invalid-id', 'Preparing');

      expect(result).toBeUndefined();
    });
  });
});
