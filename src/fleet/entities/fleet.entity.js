var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn, } from "typeorm";
import { Vehicle } from './vehicle.entity';
let Fleet = class Fleet {
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Fleet.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Fleet.prototype, "name", void 0);
__decorate([
    OneToMany(() => Vehicle, (vehicle) => vehicle.fleet),
    __metadata("design:type", Array)
], Fleet.prototype, "vehicles", void 0);
__decorate([
    CreateDateColumn(),
    __metadata("design:type", Date)
], Fleet.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn(),
    __metadata("design:type", Date)
], Fleet.prototype, "updatedAt", void 0);
Fleet = __decorate([
    Entity()
], Fleet);
export { Fleet };