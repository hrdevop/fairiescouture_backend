import { IsInt, IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";
import { OrderClothesCostInterface } from "../interface/order-clothes-cost.interface"

export class OrderClothesCostDto extends OrderClothesCostInterface {

    @IsOptional()
    @IsString()
    title: string

    @IsOptional()
    @IsInt()
    price: number;
}