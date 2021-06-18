import winston from 'winston';

const customFormat = winston.format.printf(
  ({ level, message, timestamp }): string => `[${level}] ${timestamp}: ${message}`
);

winston.addColors({
  error: 'red',
  warn: 'yellow',
  info: 'cyan',
  debug: 'green'
});

const options = {
  file: {
    filename: './combined.log',
    format: winston.format.combine(winston.format.timestamp({ format: 'YYYY-MM-DD hh:mm:ss' }), customFormat)
  },
  console: {
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.timestamp({ format: 'YYYY-MM-DD hh:mm:ss' }),
      customFormat
    )
  }
};

export const logger = winston.createLogger({
  transports: [new winston.transports.Console(options.console), new winston.transports.File(options.file)]
});
