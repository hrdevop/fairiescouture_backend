import { OrderClothesCostInterface } from './interface/order-clothes-cost.interface';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { OrderClothes } from './order-clothes.model';

@Entity()

export class OrderClothesCost implements OrderClothesCostInterface {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(type => OrderClothes, orderClothes => orderClothes)
    orderClothes: OrderClothes;


    @Column({ nullable: true })
    title: string;

    @Column({ type: 'decimal', precision: 5, scale: 3, nullable: true })
    price: number;


    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date
    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date

}