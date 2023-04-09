import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderClothes } from './model/order-clothes.model';
import { OrderClothesCost } from './model/order-clothes-cost.model';
import { OrderClothesMeasurements } from './model/order-clothes-measurements.model';
import { OrderClothesReferences } from './model/order-clothes-references.model';
import { OrdersController } from './controllers/orders.controller';
import { OrdersService } from './services/orders.service';

@Module({
    controllers: [
        OrdersController
    ],
    imports: [
        TypeOrmModule.forFeature([
            OrderClothes,
            OrderClothesMeasurements,
            OrderClothesCost,
            OrderClothesReferences,
        ])
    ],
    providers: [
        OrdersService
    ],
})
export class ClientOrderModule { }
