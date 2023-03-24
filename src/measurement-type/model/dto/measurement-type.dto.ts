import { IsNotEmpty, IsString, NotContains } from "class-validator";

export class MeasurementTypeDto {
    @IsString()
    @IsNotEmpty()
    name: string
}