import { IsNotEmpty, IsOptional, IsUUID, } from "class-validator";
import { clientMeasurementInterface } from '../client-measurement.interface';

export class ClientMeasurementDto implements clientMeasurementInterface {
    @IsNotEmpty()
    @IsUUID('all')
    clientId: string;

    @IsNotEmpty()
    @IsUUID('all')
    measurementTypeId: string;

    @IsOptional()
    inches: number;
}