import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../../auth/entities/user.entity';
import { Vehicle } from '../../fleet/entities/vehicle.entity';
import { Package } from './package.entity';

@Entity()
export class Trip {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  origin!: string;

  @Column()
  destination!: string;

  @Column()
  departureTime!: Date;

  @Column()
  arrivalTime!: Date;

  @ManyToOne(() => User, (user) => user.trips)
  user!: User;

  @ManyToOne(() => Vehicle, (vehicle) => vehicle.trips)
  vehicle!: Vehicle;

  @OneToMany(() => Package, (packageEntity) => packageEntity.trip)
  packages!: Package[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
