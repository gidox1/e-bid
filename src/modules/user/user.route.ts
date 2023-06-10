import express, { Request, Response } from 'express';
import { logger } from '../../lib/logger';
import { config } from '../../config';
import { NextFunction } from 'express';
import { requestValidator } from '../../types/common';
import { ServiceFactory } from '../factory';
import { UserController } from './user.controller';
import { createUserValidation, loginUserValidation } from './user.validation';
export const userRoutes = express.Router();

const userService = ServiceFactory.getUserManagementService();
const routePrefix = 'user'

/**
 * create new user
 */
userRoutes.post(
  `${routePrefix}`,
  (req: Request, res: Response, next: NextFunction) => requestValidator(req.body, createUserValidation, res, next),
  (req: Request, res: Response) => new UserController(logger, userService).create(req, res),
);

/**
 * user login
 */
userRoutes.post(
  `${routePrefix}/login`,
  (req: Request, res: Response, next: NextFunction) => requestValidator(req.body, loginUserValidation, res, next),
  (req: Request, res: Response) => new UserController(logger, userService).login(req, res),
);
