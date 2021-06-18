import { Router } from 'express';
import { validate } from '../middlewares';
import * as authController from '../controllers';
import * as authValidation from '../validations';

export const authRoute = Router();

authRoute.get('/login', validate(authValidation.registerSchema), authController.login);
authRoute.post('/register', authController.register);
