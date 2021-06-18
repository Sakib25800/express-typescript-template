import Joi from 'joi';

export const registerSchema = Joi.object()
  .keys({
    body: Joi.object().keys({
      username: Joi.string().required(),
      displayName: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required()
    })
  })
  .unknown(true);
