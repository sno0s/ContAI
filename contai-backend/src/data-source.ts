import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Launch } from './entity/Launch';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '2304012232',
  database: 'ContAI',
  synchronize: true,
  logging: false,
  entities: [Launch],
});
