import { NextFunction, Response } from 'express';
import { logger } from '../lib/logger';

export interface Dictionary<T = any> {
  [key: string]: T;
}

export type Logger = {
  log: Function;
  error: Function;
  warn: Function;
};

export type SchemaCallbackFunction = {
  validate: (data: Dictionary) => {
    value: Dictionary;
    error?: Dictionary;
  };
};

export const requestValidator = (
  dataObject: Dictionary,
  schema: SchemaCallbackFunction,
  res: Response,
  next: NextFunction,
): Response | void => {
  const resolver = schema.validate(dataObject);
  if (resolver.error instanceof Error) {
    logger.error('Validation erorr: ', resolver.error);
    return res.status(422).send({
      error: true,
      code: 'schemaValidationFailed',
    });
  }
  next();
};
