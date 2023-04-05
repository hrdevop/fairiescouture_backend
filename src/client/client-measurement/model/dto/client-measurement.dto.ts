import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsUUID, } from "class-validator";

export class ClientMeasurementDto {
    @IsNotEmpty()
    @IsUUID('all')
    clientId: string;

    @IsNotEmpty()
    @IsUUID('all')
    measurementTypeId: string;

    @IsOptional()
    inches: number;
}