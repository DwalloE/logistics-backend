import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export enum FleetStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  MAINTENANCE = 'MAINTENANCE',
}

@Entity('fleet')
export class Fleet {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 50 })
  type: string;

  @Column({ length: 100 })
  model: string;

  @Column({ unique: true, length: 50 })
  plate_number: string;

  @Column()
  capacity_kg: number;

  @Column({
    type: 'enum',
    enum: FleetStatus,
  })
  status: FleetStatus;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
