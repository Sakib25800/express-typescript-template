import chalk from 'chalk';
import { Application } from 'express';

import { config, logger } from './config';

export function startServer(app: Application): void {
  const server = app.listen(config.port, '127.0.0.1', () =>
    logger.info(chalk.blueBright(`App listening at http://localhost:${config.port}`))
  );

  const unexpectedErrorHandler = (error: Error) => {
    logger.error(error);
    server.close(() => {
      logger.info('Server closed');
      process.exit(1);
    });
  };

  process.on('SIGTERM', () => logger.info('SIGTERM received'));
  process.on('uncaughtException', unexpectedErrorHandler);
  process.on('unhandledRejection', unexpectedErrorHandler);
}
