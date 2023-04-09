import { MeasurementType } from 'src/measurement-type/model/measurement-type.model';
import { OrderClothes } from '../order-clothes.model';
import { OrderClothesMeasurementsInterface } from '../interface/order-clothes-measurements.interface';
import {  IsNotEmpty, IsOptional, IsUUID } from 'class-validator';
export class OrderClothesMeasurementsDto extends OrderClothesMeasurementsInterface {

    @IsNotEmpty()
    @IsUUID()
    orderClothes: OrderClothes;

    @IsNotEmpty()
    @IsUUID()
    measurementType: MeasurementType;

    @IsOptional()
    inches: number | null;

}