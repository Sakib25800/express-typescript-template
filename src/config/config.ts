import dotenv from 'dotenv';
import path from 'path';
import Joi from 'joi';
import chalk from 'chalk';

dotenv.config({ path: path.join(__dirname, '../../.env') });

const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string().valid('dev', 'prod').default('development'),
    PORT: Joi.number().default(3000)
  })
  .unknown();

const { value: envVars, error } = envVarsSchema.validate(process.env);

if (error) throw new Error(chalk.red(`Env vars are not correct \n ${error.details[0].message}`));

export const config = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  proxy: envVars.PROXY
};
