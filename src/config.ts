import * as dotenv from 'dotenv';
dotenv.config();

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
};
