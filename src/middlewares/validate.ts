import { ApiError } from '../utils';
import { Schema } from 'joi';
import { NextFunction, Request, Response } from 'express';

/**
 * @param  {Schema} schema
 */
export const validate = (schema: Schema) => (req: Request, res: Response, next: NextFunction) => {
  const { error } = schema.validate(req);
  if (error) throw new ApiError(error.details[0].message);
  return next();
};
