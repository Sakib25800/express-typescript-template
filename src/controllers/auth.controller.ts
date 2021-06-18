import { Request, Response } from 'express';
import { catchAsync } from '../utils';

export const register = catchAsync(async (req: Request, res: Response): Promise<any> => {
  return res.status(201).send('User created');
});

export function login(_req: Request, res: Response) {
  return res.json({ status: 'success' });
}
