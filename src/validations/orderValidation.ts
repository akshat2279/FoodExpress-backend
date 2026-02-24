import Joi from 'joi';

export const createOrderSchema = Joi.object({
  items: Joi.array()
    .items(
      Joi.object({
        menuItemId: Joi.string().required(),
        quantity: Joi.number().integer().min(1).required()
      })
    )
    .min(1)
    .required(),
  customer: Joi.object({
    name: Joi.string().trim().min(1).required(),
    address: Joi.string().trim().min(1).required(),
    phone: Joi.string().trim().min(1).required()
  }).required()
});

export const getOrderSchema = Joi.object({
  id: Joi.string().required()
});
