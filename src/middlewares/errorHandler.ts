import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../utils';

/**
 * @param  {ApiError} err
 * @param  {Request} req
 * @param  {Response} res
 * @param  {NextFunction} next
 */
export function errorHandler(err: ApiError, req: Request, res: Response, next: NextFunction) {
  let { statusCode, message } = err;
  statusCode = statusCode || 400;
  res.locals.errorMessage = message;

  return res.status(statusCode).json({
    statusCode,
    message
  });
}
