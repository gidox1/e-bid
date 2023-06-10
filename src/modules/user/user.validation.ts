import joi from 'joi';
import { SchemaCallbackFunction } from '../../types/common';

export const createUserValidation = joi.object({
  firstName: joi.string().required(),
  lastName: joi.string().required(),
  email: joi.string().required(),
  password: joi.string().required(),
}) as unknown as SchemaCallbackFunction;

export const loginUserValidation = joi.object({
  email: joi.string().required(),
  password: joi.string().required(),
}) as unknown as SchemaCallbackFunction;
