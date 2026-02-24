import { Router } from 'express';
import { getMenuController } from '../controllers/menuController';
import { HandleErrors } from '../../../utils/errorHandler';
import { MENU_ROUTES } from '../../../constants/routes';

const router = Router();

/**
 * Get all menu items with pagination
 * POST body: { offset: number, limit: number }
 */
router.post(MENU_ROUTES.GET_ALL_MENU, HandleErrors(getMenuController));

export default router;
