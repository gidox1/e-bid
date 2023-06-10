import { Controller, Logger } from "../../types/common";
import { UserManagementService } from "./user.service";
import { Request, Response } from 'express';

export class UserController extends Controller {
  constructor(logger: Logger, private deploymentService: UserManagementService) {
    super(logger);
  }

  public async create(req: Request, res: Response) : Promise<void> {}
  public async login(req: Request, res: Response) : Promise<void> {}
}