import { OrderClothes } from "../order-cloth.model";

export class OrderClothCostInterface {
    id?: string;
    orderClothes: OrderClothes;
    title: string
    price: number;
    createdAt?: Date
    updatedAt?: Date
}
