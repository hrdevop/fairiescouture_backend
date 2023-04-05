import { Orders } from "../order.model";

export class OrderClothInterface {
    id?: string;
    order: Orders;
    name: string;
    asterRequired: boolean
    asterByClient: boolean
    fabricRequired: boolean
    fabricDetail: string
    notes: string
    pickupDate: Date
    pickupTime: Date

    createdAt?: Date
    updatedAt?: Date
}