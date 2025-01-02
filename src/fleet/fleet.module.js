var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FleetService } from './fleet.service';
import { FleetController } from './fleet.controller';
import { VehicleService } from './vehicle.service';
import { VehicleController } from './vehicle.controller';
import { Fleet } from './entities/fleet.entity';
import { Vehicle } from './entities/vehicle.entity';
let FleetModule = class FleetModule {
};
FleetModule = __decorate([
    Module({
        imports: [TypeOrmModule.forFeature([Fleet, Vehicle])],
        controllers: [FleetController, VehicleController],
        providers: [FleetService, VehicleService],
    })
], FleetModule);
export { FleetModule };