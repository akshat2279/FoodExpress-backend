import { Request, Response } from 'express';
import OrderService from '../services/orderService';
import OrderStatusService from '../services/orderStatusService';

/**
 * Create a new order
 */
export const createOrderController = async (req: Request, res: Response) => {
  try {
    const { items, customer } = req.body;
    
    const data = await OrderService.createOrder(items, customer);
    
    if (data.success && data.data) {
      OrderStatusService.startOrderStatusSimulation(data.data.id);
    }
    
    res.status(data.success ? 201 : 400).json({
      ...data,
      code: data.success ? 201 : 400,
    });
  } catch (error: any) {
    res.status(error.output?.statusCode ?? 500).json(error);
  }
};

/**
 * Get order by ID
 */
export const getOrderByIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    if (!id) {
      res.status(400).json({
        success: false,
        message: 'Order ID is required',
        code: 400,
      });
      return;
    }
    
    const data = await OrderService.getOrderById(id);
    
    res.status(data.success ? 200 : 404).json({
      ...data,
      code: data.success ? 200 : 404,
    });
  } catch (error: any) {
    res.status(error.output?.statusCode ?? 500).json(error);
  }
};
