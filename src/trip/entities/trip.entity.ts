import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Fleet } from '../../fleet/entities/fleet.entity';
import { User } from '../../auth/entities/user.entity';

export enum TripStatus {
  ONGOING = 'ONGOING',
  COMPLETED = 'COMPLETED',
  CANCELED = 'CANCELED',
}

@Entity('trips')
export class Trip {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Fleet, { nullable: false })
  fleet: Fleet;

  @ManyToOne(() => User, { nullable: false })
  driver: User;

  @Column()
  start_time: Date;

  @Column({ nullable: true })
  end_time: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  distance_km: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  cost_shillings: number;

  @Column({
    type: 'enum',
    enum: TripStatus,
  })
  status: TripStatus;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
