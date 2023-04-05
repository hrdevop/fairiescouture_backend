import { OrderClothes } from '../order-cloth.model';
import { Files } from './../../../../file-handler/model/file-handler.model';
export class OrderClothReferencesInterface {
    id?: string;
    orderClothes: OrderClothes;
    files: Files;
    createdAt?: Date;
    updatedAt?: Date;
}