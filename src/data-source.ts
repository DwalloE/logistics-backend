import { DataSource } from 'typeorm';
import { User } from './auth/entities/user.entity';
import { Fleet } from './fleet/entities/fleet.entity';
import { Trip } from './trip/entities/trip.entity';
import { Inventory } from './inventory/entities/inventory.entity';
import { Package } from './trip/entities/package.entity';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT, 10) || 5433,
  username: process.env.DATABASE_USER || 'logistics_user',
  password: process.env.DATABASE_PASSWORD || 'secure_password',
  database: process.env.DATABASE_NAME || 'logistics_db',
  entities: [
    User,
    Fleet,
    Trip,
    Package,
    Inventory,
  ],  
  migrations: ['./migrations/*.ts'],
  synchronize: false, // Use migrations in production instead of auto-sync
  logging: true, // Enable logging for debugging
});
