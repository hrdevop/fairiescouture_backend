import { Clients } from 'src/client/model/client.model';
import { IsArray, IsBoolean, IsDate, IsNotEmpty, IsOptional, IsString, IsUUID, ValidateNested } from "class-validator";
import { OrderClothesInterface } from "../interface/order-clothes.interface";
import { OrderClothesReferencesDto } from "./order-clothes-references.dto";
import { OrderClothesCostDto } from "./order-clothes-cost.dto";
import { OrderClothesMeasurementsDto } from "./order-clothes-measurements.dto";
import { Type } from "class-transformer";


export class OrderClothesDto extends OrderClothesInterface {

    @IsNotEmpty()
    name: string;

    @IsUUID()
    @IsNotEmpty()
    client: Clients;

    @IsOptional()
    @IsBoolean()
    asterRequired: boolean;

    @IsOptional()
    @IsBoolean()
    asterByClient: boolean;

    @ValidateNested({ each: true })
    @IsOptional()
    @IsArray()
    @Type(() => OrderClothesMeasurementsDto)
    measurement: OrderClothesMeasurementsDto[];

    @IsOptional()
    @IsBoolean()
    fabricRequired: boolean;

    @IsOptional()
    @IsString()
    fabricDetail: string;

    @ValidateNested({ each: true })
    @IsOptional()
    @IsArray()
    @Type(() => OrderClothesReferencesDto)
    references: OrderClothesReferencesDto[];

    @IsOptional()
    @IsString()
    notes: string;

    @ValidateNested({ each: true })
    @IsOptional()
    @IsArray()
    @Type(() => OrderClothesCostDto)
    cost: OrderClothesCostDto[];

    @IsOptional()
    @IsDate()
    pickupDate: Date;

    @IsOptional()
    @IsDate()
    pickupTime: Date;



}