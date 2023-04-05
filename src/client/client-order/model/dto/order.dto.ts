import { Clients } from "src/client/model/client.model";
import { OrdersInterface } from "../interface/order.interface";
import { IsUUID } from "class-validator";

export class OrdersDto implements OrdersInterface {
    @IsUUID()
    client: Clients;

}