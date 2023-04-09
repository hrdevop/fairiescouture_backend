import { Clients } from "src/client/model/client.model";
import { OrderClothesReferencesInterface } from "./order-clothes-references.interface";
import { OrderClothesMeasurementsInterface } from "./order-clothes-measurements.interface";
import { OrderClothesCostInterface } from "./order-clothes-cost.interface";
import { ClientInterface } from "src/client/model/client.interface";

export class OrderClothesInterface {
    id?: string
    name: string
    asterRequired: boolean
    asterByClient: boolean
    fabricRequired: boolean
    fabricDetail: string
    measurement: OrderClothesMeasurementsInterface[]
    cost: OrderClothesCostInterface[]
    references: OrderClothesReferencesInterface[]
    notes: string
    pickupDate: Date
    pickupTime: Date
    client: Clients
    createdAt?: Date
    updatedAt?: Date
}