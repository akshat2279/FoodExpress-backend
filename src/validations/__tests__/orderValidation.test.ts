import { createOrderSchema, getOrderSchema } from '../orderValidation';

describe('Order Validation', () => {
  describe('createOrderSchema', () => {
    it('should validate correct order data', () => {
      const validData = {
        items: [
          { menuItemId: 'item-1', quantity: 2 },
          { menuItemId: 'item-2', quantity: 1 },
        ],
        customer: {
          name: 'John Doe',
          address: '123 Main St',
          phone: '555-0123',
        },
      };

      const { error } = createOrderSchema.validate(validData);
      expect(error).toBeUndefined();
    });

    it('should reject empty items array', () => {
      const invalidData = {
        items: [],
        customer: {
          name: 'John Doe',
          address: '123 Main St',
          phone: '555-0123',
        },
      };

      const { error } = createOrderSchema.validate(invalidData);
      expect(error).toBeDefined();
    });

    it('should reject quantity less than 1', () => {
      const invalidData = {
        items: [{ menuItemId: 'item-1', quantity: 0 }],
        customer: {
          name: 'John Doe',
          address: '123 Main St',
          phone: '555-0123',
        },
      };

      const { error } = createOrderSchema.validate(invalidData);
      expect(error).toBeDefined();
    });

    it('should reject missing customer name', () => {
      const invalidData = {
        items: [{ menuItemId: 'item-1', quantity: 1 }],
        customer: {
          address: '123 Main St',
          phone: '555-0123',
        },
      };

      const { error } = createOrderSchema.validate(invalidData);
      expect(error).toBeDefined();
    });

    it('should reject missing customer address', () => {
      const invalidData = {
        items: [{ menuItemId: 'item-1', quantity: 1 }],
        customer: {
          name: 'John Doe',
          phone: '555-0123',
        },
      };

      const { error } = createOrderSchema.validate(invalidData);
      expect(error).toBeDefined();
    });

    it('should reject missing customer phone', () => {
      const invalidData = {
        items: [{ menuItemId: 'item-1', quantity: 1 }],
        customer: {
          name: 'John Doe',
          address: '123 Main St',
        },
      };

      const { error } = createOrderSchema.validate(invalidData);
      expect(error).toBeDefined();
    });
  });

  describe('getOrderSchema', () => {
    it('should validate correct order id', () => {
      const validData = { id: 'some-order-id' };

      const { error } = getOrderSchema.validate(validData);
      expect(error).toBeUndefined();
    });

    it('should reject missing id', () => {
      const invalidData = {};

      const { error } = getOrderSchema.validate(invalidData);
      expect(error).toBeDefined();
    });
  });
});
