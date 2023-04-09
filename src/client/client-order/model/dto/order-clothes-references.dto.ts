import { Files } from "src/file-handler/model/file-handler.model";
import { OrderClothesReferencesInterface } from "../interface/order-clothes-references.interface";
import { OrderClothes } from "../order-clothes.model";
import { IsNotEmpty, IsUUID } from "class-validator";

export class OrderClothesReferencesDto extends OrderClothesReferencesInterface {

    @IsNotEmpty()
    @IsUUID()
    orderClothes: OrderClothes;

    @IsNotEmpty()
    @IsUUID()
    files: Files;
}