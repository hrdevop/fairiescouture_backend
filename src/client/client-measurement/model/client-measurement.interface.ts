import { Clients } from "src/client/model/client.model";
import { MeasurementType } from "src/measurement-type/model/measurement-type.model";

export interface clientMeasurementInterface {
    clientId: string;
    measurementTypeId: string;
    inches: number
}