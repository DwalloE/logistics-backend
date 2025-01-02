var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
// Import any additional modules like Auth, Fleet, etc.
import { AuthModule } from './auth/auth.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { InventoryModule } from './inventory/inventory.module';
import { TripModule } from './trip/trip.module';
import { FleetModule } from './fleet/fleet.module';
let AppModule = class AppModule {
};
AppModule = __decorate([
    Module({
        imports: [
            // Load configuration from .env
            ConfigModule.forRoot({
                isGlobal: true, // Makes the configuration available globally
                envFilePath: '.env', // Load variables from .env file
            }),
            // Set up TypeORM with PostgreSQL using values from .env
            TypeOrmModule.forRootAsync({
                imports: [ConfigModule], // Import ConfigModule so we can access env vars
                inject: [ConfigService], // Inject ConfigService to access the env variables
                useFactory: async (configService) => ({
                    type: 'postgres',
                    host: configService.get('DATABASE_HOST'),
                    port: configService.get('DATABASE_PORT'),
                    username: configService.get('DATABASE_USER'),
                    password: configService.get('DATABASE_PASSWORD'),
                    database: configService.get('DATABASE_NAME'),
                    autoLoadEntities: true, // Automatically load entities
                    synchronize: true, // Set to false in production (don't sync schema automatically)
                }),
            }),
            // Example of other modules you might add
            AuthModule,
            FleetModule,
            TripModule,
            InventoryModule,
            AnalyticsModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
export { AppModule };
