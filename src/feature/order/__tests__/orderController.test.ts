import request from 'supertest';
import express from 'express';
import orderRoutes from '../routes/orderRoutes';

const app = express();
app.use(express.json());
app.use('/api/orders', orderRoutes);

describe('Order Controller', () => {
  describe('POST /api/orders', () => {
    const validOrderData = {
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

    it('should create an order successfully with valid data', async () => {
      const response = await request(app)
        .post('/api/orders')
        .send(validOrderData);

      expect(response.status).toBe(201);
      expect(response.body.success).toBe(true);
      expect(response.body.code).toBe(201);
      expect(response.body.data).toBeDefined();
      expect(response.body.data.id).toBeDefined();
      expect(response.body.data.status).toBe('Order Received');
    });

    it('should return 400 when items array is empty', async () => {
      const invalidData = {
        ...validOrderData,
        items: [],
      };

      const response = await request(app)
        .post('/api/orders')
        .send(invalidData);

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
    });

    it('should return 400 when customer name is missing', async () => {
      const invalidData = {
        ...validOrderData,
        customer: {
          address: '123 Main St',
          phone: '555-0123',
        },
      };

      const response = await request(app)
        .post('/api/orders')
        .send(invalidData);

      expect(response.status).toBe(400);
    });

    it('should return 400 when quantity is less than 1', async () => {
      const invalidData = {
        ...validOrderData,
        items: [{ menuItemId: 'item-1', quantity: 0 }],
      };

      const response = await request(app)
        .post('/api/orders')
        .send(invalidData);

      expect(response.status).toBe(400);
    });

    it('should return 400 when menu item does not exist', async () => {
      const invalidData = {
        ...validOrderData,
        items: [{ menuItemId: 'invalid-item', quantity: 1 }],
      };

      const response = await request(app)
        .post('/api/orders')
        .send(invalidData);

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
    });
  });

  describe('GET /api/orders/:id', () => {
    let createdOrderId: string;

    beforeAll(async () => {
      const orderData = {
        items: [{ menuItemId: 'item-1', quantity: 1 }],
        customer: {
          name: 'Test User',
          address: '456 Oak Ave',
          phone: '555-0456',
        },
      };

      const response = await request(app)
        .post('/api/orders')
        .send(orderData);

      createdOrderId = response.body.data.id;
    });

    it('should retrieve an order by id', async () => {
      const response = await request(app).get(`/api/orders/${createdOrderId}`);

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data.id).toBe(createdOrderId);
    });

    it('should return 404 when order does not exist', async () => {
      const response = await request(app).get('/api/orders/non-existent-id');

      expect(response.status).toBe(404);
      expect(response.body.success).toBe(false);
      expect(response.body.message).toBe('Order not found');
    });
  });
});
