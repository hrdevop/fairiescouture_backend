import { Files } from 'src/file-handler/model/file-handler.model';
import { OrderClothesReferencesInterface } from './interface/order-clothes-references.interface';
import { OrderClothes } from './order-clothes.model';
import { CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()

export class OrderClothesReferences implements OrderClothesReferencesInterface {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(type => OrderClothes, orderClothes => orderClothes, { cascade: true })
    orderClothes: OrderClothes;

    @ManyToOne(() => Files, files => files, { cascade: true })
    files: Files;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date
    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date
}