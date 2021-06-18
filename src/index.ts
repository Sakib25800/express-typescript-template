import cors from 'cors';
import express from 'express';

import { config } from './config';
import { successHandler } from './config';
import { errorHandler } from './middlewares';
import { createRoutes } from './routes';
import { startServer } from './startServer';
import { ApiError } from './utils';

const app = express();

if (config.env !== 'dev') {
  app.use(successHandler);
  app.use(errorHandler);
}

// middlewares
app.use(express.json());
app.use(cors({ credentials: true, origin: config.proxy }));

// routes
createRoutes(app);

app.get('/', (_req, res) => res.send('Hooray!'));
app.use((_req, _res, next) => next(new ApiError('404 page not found', 404)));

app.use(errorHandler);

startServer(app);
