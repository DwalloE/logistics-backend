import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';
  import { Fleet } from './fleet.entity';
  import { Trip } from '../../trip/entities/trip.entity';
  
  @Entity()
  export class Vehicle {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    licensePlate: string;
  
    @Column()
    model: string;
  
    @Column()
    capacity: number;
  
    @ManyToOne(() => Fleet, (fleet) => fleet.vehicles)
    fleet: Fleet;
  
    @OneToMany(() => Trip, (trip) => trip.vehicle)
    trips: Trip[];
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }
  