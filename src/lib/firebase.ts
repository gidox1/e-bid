import * as firebase from 'firebase-admin';
import { Auth, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getAuth as getAdminAuth, UserRecord, CreateRequest } from 'firebase-admin/auth';
import { initializeApp, } from 'firebase/app';
import { config } from '../config';
import { logger } from './logger';

export const initFirebaseApp = (): Auth => {
  try {
    const app = initializeApp(config.firebaseAppConfig);
    return getAuth(app);
  } catch (error) {
    logger.error('Error occured during Firebase web initialization', error);
  }
};

interface FirebaseClientInterface {
  createUser(data: CreateRequest): Promise<UserRecord>;
  initFirebaseAdmin(): firebase.app.App;
}

export class FirebaseClient implements FirebaseClientInterface {
  public initFirebaseAdmin(): firebase.app.App  {
    try {
      if (!firebase.apps.length) {
        const admin = firebase.initializeApp({
          credential: firebase.credential.cert(<firebase.ServiceAccount>config.firebaseAdminConfig),
        });
        return admin;
      }
      return firebase.app();
    } catch (error) {
      logger.error('Error occured during Firebase admin initialization', error);
      throw error;
    }
  }

  public async createUser(data: CreateRequest): Promise<UserRecord> {
    try {
      return getAdminAuth().createUser({
        email: data.email,
        password: data.password,
        displayName: data.displayName,
      });
    } catch (error) {
      logger.error('unable to create user', error);
      throw error;
    }
  }
}
