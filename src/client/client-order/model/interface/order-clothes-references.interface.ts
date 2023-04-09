import { OrderClothes } from '../order-clothes.model';
import { Files } from '../../../../file-handler/model/file-handler.model';
export class OrderClothesReferencesInterface {
    id?: string;
    orderClothes: OrderClothes;
    files: Files;
    createdAt?: Date;
    updatedAt?: Date;
}