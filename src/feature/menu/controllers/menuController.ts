import { Request, Response } from 'express';
import MenuService from '../services/menuService';

/**
 * Get all menu items with pagination
 * Body params: offset (default: 0), limit (default: 10)
 */
export const getMenuController = async (req: Request, res: Response) => {
  try {
    // Get offset and limit from request body
    const { offset = 0, limit = 10 } = req.body;
    
    // Validate and parse values
    const validOffset = typeof offset === 'number' ? offset : parseInt(offset, 10) || 0;
    const validLimit = typeof limit === 'number' ? limit : parseInt(limit, 10) || 10;
    
    
    const data = await MenuService.getMenu(validOffset, validLimit);
    res.status(200).json({
      ...data,
      code: 200,
    });
  } catch (error: any) {
    res.status(error.output?.statusCode ?? 500).json(error);
  }
};
