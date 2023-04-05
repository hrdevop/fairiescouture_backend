import { Files } from 'src/file-handler/model/file-handler.model';
import { OrderClothReferencesInterface } from './interface/order-cloth-references.interface';
import { OrderClothes } from './order-cloth.model';
import { CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()

export class OrderClothReferences implements OrderClothReferencesInterface {
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