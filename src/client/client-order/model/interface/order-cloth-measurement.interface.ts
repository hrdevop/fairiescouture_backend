import { MeasurementType } from "src/measurement-type/model/measurement-type.model";
import { OrderClothes } from "../order-cloth.model";

export class OrderClothMeasurementInterface {
    id?: string;

    orderClothes: OrderClothes;
    measurementType: MeasurementType;
    inches: number | null;

    createdAt?: Date
    updatedAt?: Date
}