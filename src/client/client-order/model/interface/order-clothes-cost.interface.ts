import { OrderClothes } from "../order-clothes.model";

export class OrderClothesCostInterface {
    id?: string;
    orderClothes?: OrderClothes;
    title: string
    price: number;
    createdAt?: Date
    updatedAt?: Date
}
