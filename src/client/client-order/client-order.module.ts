import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orders } from './model/order.model';
import { OrderClothes } from './model/order-cloth.model';
import { OrderClothReferences } from './model/order-cloth-references.model';
import { OrderClothMeasurements } from './model/order-cloth-measurement.model';
import { OrderClothCosts } from './model/order-cloth-cost.model';

@Module({
    controllers: [],
    imports: [
        TypeOrmModule.forFeature([
            Orders,
            OrderClothes,
            OrderClothMeasurements,
            OrderClothCosts,
            OrderClothReferences,
        ])
    ],
    providers: [],
})
export class ClientOrderModule { }
