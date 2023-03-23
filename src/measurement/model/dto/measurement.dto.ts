import { IsNotEmpty, IsString, NotContains } from "class-validator";

export class MeasurementDto {
    @IsString()
    @IsNotEmpty()
    name: string
}