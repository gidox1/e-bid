import * as dotenv from 'dotenv';
dotenv.config();

interface FirebaseAdminConfig {
  type: string;
  project_id: string;
  private_key_id: string;
  private_key: string;
  client_email: string;
  client_id: string;
  auth_uri: string;
  token_uri: string;
  auth_provider_x509_cert_url: string;
  client_x509_cert_url: string;
}

interface FirebaseAppConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

export interface Config {
  port: string;
  appUrl: string;
  mysql: {
    host: string;
    port: number;
    database: string;
    user: string;
    password: string;
  };
  firebaseAdminConfig: FirebaseAdminConfig;
  firebaseAppConfig: FirebaseAppConfig;
}

export const config: Config = {
  port: process.env.PORT,
  appUrl: process.env.APP_URL,
  mysql: {
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
  },
  firebaseAppConfig: {
    apiKey: process.env.FIREBASE_APP_API_KEY,
    authDomain: process.env.FIREBASE_APP_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_APP_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_APP_MEASUREMENT_ID,
  },
  firebaseAdminConfig: {
    type: process.env.FIREBASE_PROJECT_TYPE,
    project_id: process.env.FIREBASE_PROJECT_ID,
    private_key_id: process.env.FIREBASE_PROJECT_PRIVATE_KEY_ID,
    private_key: JSON.parse(`"${process.env.FIREBASE_PROJECT_PRIVATE_KEY}"`),
    client_email: process.env.FIREBASE_PROJECT_CLIENT_EMAIL,
    client_id: process.env.FIREBASE_PROJECT_CLIENT_ID,
    auth_uri: process.env.FIREBASE_PROJECT_AUTH_URI,
    token_uri: process.env.FIREBASE_PROJECT_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.FIREBASE_PROJECT_AUTH_PROVIDER_x509_CERT_URL,
    client_x509_cert_url: process.env.FIREBASE_PROJECT_CLIENT_x509_CERT_URL,
  },
};
