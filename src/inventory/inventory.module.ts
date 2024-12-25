import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inventory } from './entities/inventory.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Inventory])],
    controllers: [],
    providers: [],
})
export class InventoryModule {}
