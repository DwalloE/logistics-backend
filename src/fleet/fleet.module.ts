import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fleet } from './entities/fleet.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Fleet])],
    controllers: [],
    providers: [],
})
export class FleetModule {}
