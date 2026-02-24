import request from 'supertest';
import express from 'express';
import menuRoutes from '../routes/menuRoutes';

const app = express();
app.use(express.json());
app.use('/api/menu', menuRoutes);

describe('Menu Controller', () => {
  describe('GET /api/menu', () => {
    it('should return 200 and menu items', async () => {
      const response = await request(app).get('/api/menu');

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.code).toBe(200);
      expect(response.body.data).toBeDefined();
      expect(Array.isArray(response.body.data)).toBe(true);
    });

    it('should return menu items with correct properties', async () => {
      const response = await request(app).get('/api/menu');

      expect(response.body.data.length).toBeGreaterThan(0);
      const firstItem = response.body.data[0];
      expect(firstItem).toHaveProperty('id');
      expect(firstItem).toHaveProperty('name');
      expect(firstItem).toHaveProperty('description');
      expect(firstItem).toHaveProperty('price');
      expect(firstItem).toHaveProperty('image');
    });

    it('should return at least 6 menu items', async () => {
      const response = await request(app).get('/api/menu');

      expect(response.body.data.length).toBeGreaterThanOrEqual(6);
    });
  });
});
