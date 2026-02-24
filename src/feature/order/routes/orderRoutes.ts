import { Router } from "express";
import {
  createOrderController,
  getOrderByIdController,
} from "../controllers/orderController";
import { validate } from "../../../middleware/validation";
import {
  createOrderSchema,
  getOrderSchema,
} from "../../../validations/orderValidation";
import { HandleErrors } from "../../../utils/errorHandler";
import { ORDER_ROUTES } from "../../../constants/routes";

const router = Router();

/**
 * Create a new order
 */
router.post(
  ORDER_ROUTES.CREATE_ORDER,
  validate(createOrderSchema, "body"),
  HandleErrors(createOrderController),
);

/**
 * Get order by ID
 */
router.get(
  ORDER_ROUTES.GET_ORDER_BY_ID,
  validate(getOrderSchema, "params"),
  HandleErrors(getOrderByIdController),
);

export default router;
