import { Request, Response, NextFunction } from 'express';

export const HandleErrors = (controller: (req: Request, res: Response, next: NextFunction) => Promise<void>) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await controller(req, res, next);
    } catch (error: any) {
      const statusCode = error.output?.statusCode ?? error.statusCode ?? 500;
      res.status(statusCode).json({
        success: false,
        message: error.message || 'Internal Server Error',
        code: statusCode,
        ...(process.env.NODE_ENV !== 'production' && { stack: error.stack })
      });
    }
  };
};
