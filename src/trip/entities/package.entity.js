var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, } from "typeorm";
import { Trip } from './trip.entity';
let Package = class Package {
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Package.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Package.prototype, "description", void 0);
__decorate([
    Column(),
    __metadata("design:type", Number)
], Package.prototype, "weight", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Package.prototype, "status", void 0);
__decorate([
    ManyToOne(() => Trip, (trip) => trip.packages),
    __metadata("design:type", Trip)
], Package.prototype, "trip", void 0);
__decorate([
    CreateDateColumn(),
    __metadata("design:type", Date)
], Package.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn(),
    __metadata("design:type", Date)
], Package.prototype, "updatedAt", void 0);
Package = __decorate([
    Entity()
], Package);
export { Package };
