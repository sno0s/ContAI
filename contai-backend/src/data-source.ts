import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Launch } from './entity/Launch';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || 'postgres',
  database: process.env.DB_NAME || 'contai_db',
  synchronize: true,
  logging: false,
  entities: [Launch],
});
