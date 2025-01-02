var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn, } from "typeorm";
import { Fleet } from './fleet.entity';
import { Trip } from '../../trip/entities/trip.entity';
let Vehicle = class Vehicle {
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Vehicle.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Vehicle.prototype, "licensePlate", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Vehicle.prototype, "model", void 0);
__decorate([
    Column(),
    __metadata("design:type", Number)
], Vehicle.prototype, "capacity", void 0);
__decorate([
    ManyToOne(() => Fleet, (fleet) => fleet.vehicles),
    __metadata("design:type", Fleet)
], Vehicle.prototype, "fleet", void 0);
__decorate([
    OneToMany(() => Trip, (trip) => trip.vehicle),
    __metadata("design:type", Array)
], Vehicle.prototype, "trips", void 0);
__decorate([
    CreateDateColumn(),
    __metadata("design:type", Date)
], Vehicle.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn(),
    __metadata("design:type", Date)
], Vehicle.prototype, "updatedAt", void 0);
Vehicle = __decorate([
    Entity()
], Vehicle);
export { Vehicle };