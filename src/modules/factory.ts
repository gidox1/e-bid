import { Config, config } from '../config';
import { FirebaseClient } from '../lib/firebase';
import { logger } from '../lib/logger';
import { Logger } from '../types/common';
import { UserManagementService } from './user/user.service';

export class ServiceFactory {
  private static config: Config;
  private static instance: ServiceFactory;

  public constructor(private logger: Logger) {}

  public static init(config: Config, logger: Logger): void {
    ServiceFactory.instance = new ServiceFactory(logger);
    ServiceFactory.config = config;
  }

  public static getUserManagementService() {
    return new UserManagementService(
      logger,
      config,
      new FirebaseClient()
    )
  }
}
