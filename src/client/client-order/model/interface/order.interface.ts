import { Clients } from "src/client/model/client.model";

export class OrdersInterface {
    id?: string;

    client: Clients;

    createdAt?: Date
    updatedAt?: Date
}