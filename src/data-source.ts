import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from './config';

const options: DataSourceOptions = {
  type: 'mysql',
  host: config.mysql.host,
  port: config.mysql.port,
  username: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
  synchronize: false,
  logging: process.env.NODE_ENV !== 'production' ? ['query'] : false,
  entities: [__dirname + '/entity/**/*.entity.{ts,js}'],
  migrations: [__dirname + '/migrations/*.{ts,js}'],
  subscribers: [],
};
export const AppDataSource = new DataSource(options);
