import { Application } from 'express-serve-static-core';
import { authRoute } from './auth.route';

export function createRoutes(app: Application) {
  const routes = [
    {
      path: '/auth',
      route: authRoute
    }
  ];

  routes.forEach(({ path, route }) => app.use(path, route));
}
