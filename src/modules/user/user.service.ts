import { FirebaseClient } from '../../lib/firebase';
import { CreateUser, UserDomain, AuthData, LoginResponse } from './user.types';
import { Logger } from '../../types/common';
import { Config } from '../../config';

export interface UserService {
  createUser(userData: CreateUser): Promise<UserDomain>;
  login(authData: AuthData): Promise<LoginResponse>;
}

export class UserManagementService implements UserService {
  constructor(private logger: Logger, private config: Config, private firebaseClient: FirebaseClient) {}

  public async createUser(userData: CreateUser): Promise<UserDomain> {
    throw new Error('Method not implemented.');
  }

  public async login(authData: AuthData): Promise<LoginResponse> {
    throw new Error('Method not implemented.');
  }
}
