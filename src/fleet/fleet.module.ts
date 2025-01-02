import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FleetService } from './fleet.service';
import { FleetController } from './fleet.controller';
import { VehicleService } from './vehicle.service';
import { VehicleController } from './vehicle.controller';
import { Fleet } from './entities/fleet.entity';
import { Vehicle } from './entities/vehicle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Fleet, Vehicle])],
  controllers: [FleetController, VehicleController],
  providers: [FleetService, VehicleService],
})
export class FleetModule {}
