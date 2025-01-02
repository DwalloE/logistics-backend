import { DataSource } from "typeorm";
import { User } from './src/auth/entities/user.entity';
import { Fleet } from './src/fleet/entities/fleet.entity';
import { Trip } from './src/trip/entities/trip.entity';
import { Inventory } from './src/inventory/entities/inventory.entity';
import { Package } from './src/trip/entities/package.entity';
import * as dotenv from "dotenv";
dotenv.config();
export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT, 10) || 5433,
    username: process.env.DATABASE_USER || 'logistics_user',
    password: process.env.DATABASE_PASSWORD || 'secure_password',
    database: process.env.DATABASE_NAME || 'logistics_db',
    entities: [User, Fleet, Trip, Inventory, Package],
    migrations: ['./migrations/*.ts'],
    synchronize: false,
    logging: true,
});
