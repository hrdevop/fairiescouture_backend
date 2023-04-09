import { IsNotEmpty, IsString } from "class-validator";

export class MeasurementTypeDto {
    @IsString()
    @IsNotEmpty()
    name: string
}