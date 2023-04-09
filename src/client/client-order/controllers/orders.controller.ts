import { OrderClothesCostDto } from '../model/dto/order-clothes-cost.dto';
import { OrderClothesDto } from '../model/dto/order-clothes.dto';
import { OrdersService } from './../services/orders.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('orders')
export class OrdersController {

    constructor(private readonly ordersService: OrdersService) {

    }

    @Post()
    addOrderCloth(@Body() cloth: OrderClothesDto) {
        return cloth
    }


}
